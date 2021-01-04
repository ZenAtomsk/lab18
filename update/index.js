'use strict';

const mugModel = require('./mug.schema');

exports.handler = async (event)=>{

  // console.log('event before deconstruction:', event)
  const {name, capacity, color, dropable} = JSON.parse(event.body);
  // console.log('event after deconstruction:', event)
  const id = event.pathParameters.id

  try{
      let data = await mugModel.update({id, name, capacity, color, dropable});
      console.log('__data__:', data)
      return{
        statusCode: 200,
        body: JSON.stringify(data)
      }
  
    }catch(e){
      return{
        statusCode: 500,
        response: e.message
    }
  }
}