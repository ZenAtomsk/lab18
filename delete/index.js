'use strict';

const mugModel = require('./mug.schema');

exports.handler = async(event)=>{

  const id = event.pathParameters.id

  try{
    await mugModel.delete(id);
    let data = {}
    return {
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
