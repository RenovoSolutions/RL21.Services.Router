/*global describe: false, beforeEach: false, it: false, expect: false */

var expect = require('chai').expect;

var router = require('./../release/router');

describe("router", function () {

	var myRouter;

	"use strict";
    
	beforeEach(function () {
		myRouter = new router();
	});

	it("should offer a default configuration", function() {
		var routerConfig = myRouter.getDefaultConfig();

		expect(routerConfig.environments).to.not.be.empty;
	});

	it("should find that 2 + 2 = 4", function () {
        var arithmetic = 2 + 2;
        
        expect(arithmetic).to.equal(4);
	});
	
});
