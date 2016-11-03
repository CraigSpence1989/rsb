'use strict'

const Browser = require('zombie');
const browser = new Browser();


class RSB {
	constructor() {
		this.URL = 'http://work.krasimirtsonev.com/git/blog-posts/TestingWithZombieJS/site/';
    }
	
	gotoPage(callback){
		browser.visit(this.URL, function(err) {
			callback(browser.status);
		});
	}
	
	login(callback){
		browser
			.fill('input[name="username"]', "admin")
			.fill('input[name="password"]', "1234")
			.pressButton('input[value="Login"]', function() {
				if(browser.querySelector("#logout")){
					callback(true);
				}else{
					callback(false);
				}
			});
	}
	
	
	
}

module.exports = RSB;
