var expect = require('chai').expect;
var feeOpenWeb = require('../src/feeopen.web');
/**
 * @jest-environment jsdom
 */
test('url query config',()=>{
    location.search = '?from=sFrom';
    var openWeb = new feeOpenWeb();
    expect(openWeb.config.auto).to.equal(false);
    
    location.search = '?from=sFrom&open=true';
    openWeb = new feeOpenWeb();
    expect(openWeb.config.auto).to.equal(true);

    location.search = '?from=sFrom&open=1';
    openWeb = new feeOpenWeb();
    expect(openWeb.config.auto).to.equal(true);
    
    location.search = '?from=sFrom&open=false';
    openWeb = new feeOpenWeb();
    expect(openWeb.config.auto).to.equal(false);

    location.search = '?from=sFrom&open=0';
    openWeb = new feeOpenWeb();
    expect(openWeb.config.auto).to.equal(false);
});