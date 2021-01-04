'use strict';

const mugModel = require('./mug.schema');

exports.handler = async(event)=>{
  console.log('event:', event)
  const id = event.pathParameters.id;

  try{
    let data;

    if(id){
      data = await mugModel.query('id').eq(id).limit(1).exec(); 

    }else{
      data = await mugModel.scan().exec();
    }
    return{
      statusCode: 200,
      body: JSON.stringify(data)

    };
  }catch(e){
    return{
      statusCode: 500,
      response: e.message
    }
  }
}