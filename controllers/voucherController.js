const Voucher = require('../models/voucher');
const HttpResponse = require('../Classes/HttpResponse');

const _ = require('lodash');
let http_response = new HttpResponse();

const voucher_list = (req, res, next) => {
	//res.send({type: 'GET'});
	Voucher.find()
		.then((voucher) => {
			//res.send(voucher);
			res.status(http_response.code_success)
				.send(http_response.response_data_json(http_response.status_success(),voucher));
		})
		.catch(next);
	};

const add_voucher = (req, res, next) => {
	var voucher = new Voucher(req.body);
	voucher.voucher_code = _.random(99999, 9999999);
	voucher.save()
		.then((voucher) => {
			//res.send(voucher);
			res.status(http_response.code_success)
				.send(http_response.response_data_json(http_response.status_success(),voucher));
		})
		.catch(next);
	};



module.exports = {
		voucher_list,
		add_voucher
	}