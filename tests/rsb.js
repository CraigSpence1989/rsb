'use strict'

const RSB = require('../src/rsb_controller');
const expect = require('chai').expect;
const rsb = new RSB();


describe('RSB Controller', function() {

    it('Open Page', function(done) {
		this.timeout(5000);
		rsb.gotoPage(function(result){
			expect(result).to.equal(200);
			done()
		});
    });
	
	it('Able To Login', function(done) {
		rsb.login(function(result){
			expect(result).to.equal(true);
			done()
		});
    });
	
	

});