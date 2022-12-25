const HttpResponse = require('../Classes/HttpResponse');
const VoucherOrder = require('../Classes/VoucherOrder');


const Voucher = require('../models/voucher');
let http_response = new HttpResponse();
let voucher_order = new VoucherOrder();

const apply_voucher = (req, res, next) => {
	var customerId = req.body.customer_id;
	var voucherCode = req.body.voucher_code;
	var orderPrice = req.body.order_total_price;
	Voucher.findOne({
		customer_id: customerId,
		voucher_code: voucherCode,
		use_date: null
		}).then((voucher_detail) => {
			if(voucher_detail == null){
				res.status(http_response.code_error_voucher_validation).
				send(http_response.response_json(http_response.status_voucher_not_vaild()));
			}else{
				var voucherData = voucher_order.apply_voucher(voucher_detail,orderPrice)
				res.status(http_response.code_success)
					.send(http_response.response_data_json(http_response.status_success(),
						voucherData));
			}
		});
};

const confirm_voucher_usage = (req, res, next) => {
		Voucher.findByIdAndUpdate({
			_id:req.params.id
			}, {use_date:Date.now()},(err,data)=>{
				if(err != null)
					res.status(http_response.code_error_not_found)
					.send(http_response.response_json(http_response.status_not_found()));
				else
					res.status(http_response.code_success)
					.send(http_response.response_json(http_response.status_success()));
			})/*.then(() => {
				res.status(http_response.code_success)
					.send(http_response.response_json(http_response.status_success()));
		}).catch(err);*/
	};
 

module.exports = {
	apply_voucher,
	confirm_voucher_usage
}