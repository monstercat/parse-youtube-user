
var parse = require('../')

describe('youtube url parser', function(){
  it('work', function(){
    parse('http://m.youtube.com/channel/UC5F2oUCU91HQMjCxJeODGsA')
    .should.equal('UC5F2oUCU91HQMjCxJeODGsA')

    parse('http://m.youtube.com/user/officialdjtmz')
    .should.equal('officialdjtmz')

    parse('http://www.youtube.com/channel/UC0ynNPczQ_Cc0Txs9xrIaRQ/videos')
    .should.equal('UC0ynNPczQ_Cc0Txs9xrIaRQ')

    parse('http://www.youtube.com/channel/UCCIlWlP_sh4iQTOGlcarSGw?feature=guide')
    .should.equal('UCCIlWlP_sh4iQTOGlcarSGw')

    parse('/channel/UC3OMbFI3n2vR2BIGwG_pXVQ')
    .should.equal('UC3OMbFI3n2vR2BIGwG_pXVQ')

    parse('channel/UC3OMbFI3n2vR2BIGwG_pXVQ')
    .should.equal('UC3OMbFI3n2vR2BIGwG_pXVQ')

    parse('channel/UCV8dV53ALfpO2vjCuK5kyCA/videos')
    .should.equal('UCV8dV53ALfpO2vjCuK5kyCA')

    parse('www.youtube.com/channel/UCcbzBlCbdiCZxCXAxuzla9g')
    .should.equal('UCcbzBlCbdiCZxCXAxuzla9g')

    parse(' www.youtube.com/channel/UCcbzBlCbdiCZxCXAxuzla9g')
    .should.equal('UCcbzBlCbdiCZxCXAxuzla9g')

    parse('/user/derp').should.equal('derp')
    parse('user/derp').should.equal('derp')
    parse('/user/derp?what').should.equal('derp')
    parse('/user/derp/what').should.equal('derp')
    parse('Http://YouTube.com/thevipermusic').should.equal('thevipermusic')
    parse('youtube.com/user/ThatKaiburGuy').should.equal('ThatKaiburGuy')

    parse('jackbox55').should.equal('jackbox55')
  });
});
