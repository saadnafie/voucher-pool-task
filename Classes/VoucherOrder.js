class VoucherOrder{
	
	apply_voucher(user_voucher,order_total_price){
		var voucherType = user_voucher.voucher_type;
		var orderPriceAfterDiscount = 0;
		var orderDiscountValue = user_voucher.voucher_value;
		if(voucherType == 1){
			orderDiscountValue = this.discount_by_percentage(order_total_price,orderDiscountValue);
			orderPriceAfterDiscount = order_total_price - orderDiscountValue;
		}else{
			orderPriceAfterDiscount = order_total_price - orderDiscountValue;
		}

		return {
			voucherId : user_voucher._id,
			voucherType : user_voucher.voucher_type,
			voucherValue : user_voucher.voucher_value,
			orderDiscountValue : orderDiscountValue,
			orderPriceAfterDiscount : orderPriceAfterDiscount

		};
	}

	discount_by_percentage(price,percentage){
		return (price * percentage) / 100; 
	}
}
module.exports = VoucherOrder;