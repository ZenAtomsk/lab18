'use strict';

const uuid = require('uuid').v4;
const mugModel = require('./mug.schema');

exports.handler = async (event) => {
  
  console.log('event before deconstruction:', event)
  //parse
  const {name, capacity, color, dropable} = JSON.parse(event.body);
  console.log('event after deconstruction:', event)
  const id = uuid();

  try{

    //create the record
    const record = new mugModel({id, name, capacity, color, dropable});
    //save the record
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
 
  }catch(e){
    return{
      statusCode: 500,
      response: e.message
    }
  }

};
