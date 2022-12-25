//const express = require('express');
//const router = express.Router();
const { body, validationResult } = require('express-validator');

const applyVoucherBodyRole = [
        body('customer_id', 'customer_id is required').exists(),
        body('customer_id', 'customer_id value is required').notEmpty(),
        body('voucher_code', 'voucher_code is required').exists(),
        body('voucher_code', 'voucher_code value is required').notEmpty(),
        body('order_total_price', 'order_total_price is required').exists(),
        body('order_total_price', 'order_total_price value is required').notEmpty(),
    ];

const addVoucherBodyRole = [
        body('customer_id', 'customer_id is required').exists(),
        body('customer_id', 'customer_id value is required').notEmpty(),
        body('voucher_type', 'voucher_type is required').exists(),
        body('voucher_type', 'voucher_type value is required').notEmpty(),
        body('voucher_value', 'voucher_value is required').exists(),
        body('voucher_value', 'voucher_value value is required').notEmpty(),
    ];


const checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


/*module.exports = ValidateRequest;*/
module.exports = {
    addVoucherBodyRole,
    applyVoucherBodyRole,
    checkRules
}