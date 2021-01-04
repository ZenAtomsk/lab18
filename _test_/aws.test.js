'use strict';

const req = require('superagent');



// let READ = '';
// let UPDATE = '';
// let DELETE = '';

describe('Post route', ()=>{
  it('should invoke lambda function to post object', async ()=>{
    let CREATE = 'https://boq1yie4pj.execute-api.us-west-2.amazonaws.com/mugs';
    const res = await (await req.post(CREATE)).setEncoding({name: 'Supermug', capacity: '9002', color: ['red', 'blood'], dropable: true })
    expect(res).toHaveProperty('status', 200);
    expect(typeof res.body).toEqual('object');
  
  });

})
