let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../routes/api");

chai.should();
chai.use(chaiHttp);

describe('voucher list api',()=> {
	 describe("GET /api/voucher" , () => {
	 	it("it shoud GET all vouchers" , (done)=> { 
	 		chai.request('http://localhost:5000').get("/api/voucher")
	 			.end((err,response) =>{
	 				response.should.have.status(200);
	 				response.body.data.should.be.a('array');
	 				done();
	 			});
	 	});
	 }); 
});

describe('voucher list api',()=> {
	 describe("GET /api/voucher" , () => {
	 	it("it shoud GET all vouchers" , (done)=> { 
	 		chai.request('http://localhost:5000').get("/api/vouchers")
	 			.end((err,response) =>{
	 				response.should.have.status(404);
	 				done();
	 			});
	 	});
	 }); 
});


describe('confirm vouchers usage',()=> {
	 describe("PUT /api/confirm_voucher_usage/id" , () => {
	 	it("it shoud Post confirm vouchers usage" , (done)=> { 
	 		const id = "63a77bcc214c3e4f987ccdee";
	 		chai.request('http://localhost:5000').put("/api/confirm_voucher_usage/" + id)
	 			.end((err,response) =>{
	 				response.should.have.status(200);
	 				response.body.should.be.a('object');
	 				done();
	 			});
	 	});
	 }); 
});