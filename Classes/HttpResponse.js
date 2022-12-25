class HttpResponse{

	code_success = 200;
	code_error_valid_data = 400;
	code_error_not_found = 404;
	code_error_voucher_validation = 406;


	status_success(){
		return {
			code:this.code_success,
			message:"Success"
		}
	}

	status_voucher_not_vaild(){
		return {
			code:this.code_error_voucher_validation,
			message:"Voucher code not valid"
		}
	}

	status_not_found(){
		return {
			code:this.code_error_not_found,
			message:"Not Found"
		}
	}

	status_error_data_validation(){
		return {
			code:this.code_error_valid_data,
			message:"Please enter all required data"
		}
	}
	
	response_data_json(status,data){
		return {status:status,data:data};
	}

	response_json(status){
		return {status:status};
	}
}

module.exports = HttpResponse;