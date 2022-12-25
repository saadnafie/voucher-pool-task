const express = require('express');
const voucherController = require('../controllers/voucherController');
const voucherOrderController = require('../controllers/voucherOrderController');
const validation = require('../ValidateRequest');
const router = express.Router();
//const { body, validationResult } = require('express-validator');


// admin routes
router.get('/voucher', voucherController.voucher_list);
router.post('/voucher', validation.addVoucherBodyRole ,validation.checkRules, voucherController.add_voucher);

//customer routes
router.post('/apply_voucher', validation.applyVoucherBodyRole ,validation.checkRules, voucherOrderController.apply_voucher);
router.put('/confirm_voucher_usage/:id', voucherOrderController.confirm_voucher_usage);

module.exports = router;








