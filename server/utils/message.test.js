var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate the correct message object',()=>{
    var from = 'diana';
    var text = 'some text....';
    var message = generateMessage(from,text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});