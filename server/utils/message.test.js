var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate the correct message object',()=>{
    var from = 'diana';
    var text = 'some text....';
    var message = generateMessage(from,text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});
describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'Dave';
    var lat = 12;
    var lon = 1;
    var url = `https://www.google.com/maps/?q=${lat},${lon}`;
    var urlMsg = generateLocationMessage(from,lat,lon);
    expect(urlMsg.url).toBe(url);
    expect(urlMsg).toInclude({from,url});
  });
});
