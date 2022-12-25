# voucher-pool-task

# Zumrafood coding challenge

## The problem:
Task: Voucher Pool
The objective is to create a voucher pool microservice based in NodeJs. You can use whichever libraries you prefer. The service should expose a ​REST API​.

A voucher pool is a collection of voucher codes that can be used by customers to get discounts on website. Each code may only be used once, and we would like to know when it was used by the customer. Since there can be many customers in a voucher pool, we need a call that auto-generates voucher codes for each customer.


## The solution:
Focuses on Backend only


## Linked:
https://www.linkedin.com/in/saadnafie/

## What is Expected from you:
- Apply OOP and SOLID principles as much you can.
- Write unit testing for your solution
- Write commands to run the application
- Add API documentation
- Code quality, linting, and naming convention.


# Steps to run the application:

1. download project from github
2. open terminal and run command > npm install to download node modules and required dependancies (packages)
3. to start server run command > nodemon index
4. the server link should be http://localhost:5000/
5. for running API download postman collection attached here


# Postman collection File

[voucher pool.postman_collection.zip](https://github.com/saadnafie/voucher-pool-task/files/10299352/voucher.pool.postman_collection.zip)


# API Documnetation

## Admin Part:

1. API enable admin Generate Voucher Code for customer (discount by value or percentage)
method: POST
URL: http://localhost:5000/api/voucher
Parameters:
    "customer_id": 2,
    "voucher_type": 1, //1: by percentage, 2: by value
    "voucher_value": 20,
    "expiration_date": "02-15-2023"



2. API show admin all customers with vouchers and date of use
- method: GET
- URL: http://localhost:5000/api/voucher
- return customers with vouchers and date of use
___________________________________________________________________________________________

## Customer Part:


1. API check specific customer voucher Code valid or not and get discount value or percentage
 - method: GET
 - URL: http://localhost:5000/api/apply_voucher
- Parameters: 
    1. "customer_id": 1,
    2. "voucher_code": 1130541,
    3. "order_total_price": 1000
- return [“Invalid voucher”] or [valid and discount value for current voucher code for specific customer]

2. API for confirm usage and set update (use_date) for Voucher Code (used once) for specific customer if customer used it
 - method: PUT
- URL: http://localhost:5000/api/confirm_voucher_usage/+id
- Example: http://localhost:5000/api/confirm_voucher_usage/63a77bcc214c3e4f987ccdee




