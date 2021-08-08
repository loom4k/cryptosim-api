const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require('axios')

require("dotenv").config();

const router = express.Router();

const auth = require('./../middleware/key');
const config = require('./../config/config.json');
const User = require('./../model/Wallet')

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

/* router.post(
    "/user*",
    auth, async (req, res) => {
        return res.status(200).json({
            message: "Valid API Key"
        })
    }
    ) */
    
    router.post(
        "/user/wallet/wallet",
        auth, async(req, res) => {
            const {
                username,
                operation,
                reqAmount
            } = req.body;
            try {
                let user = await User.findOne({
                    username
                });
                
                let operations = ['add', 'subtract']
                if(!operations.includes(operation)) {
                    return res.status(400).json({
                        message: "Please choose a valid operation."
                    });
                }
                
                async function calculate(amount) {
                    switch(operation) {
                        case 'add': 
                            user.wallet = user.wallet + amount
                            user.save();
                            break;
                        case 'subtract':
                            user.wallet = user.wallet - amount
                            user.save();
                            break;
                        default:
                            res.status(400).json({
                                message: "Make sure to include an expression for the wallet update."
                            })                        
                    }
                }
                
                if(reqAmount > 150000) {
                    return res.status(400).json({
                        message: "You can't increment the wallet by more than 150k."
                    });
                } else if (reqAmount.isNaN) {
                    return res.status(400).json({
                        message: "Wallet increment must be a number."
                    });
            } else {
                calculate(reqAmount);

                return res.status(200).json({
                    message: "Database Updated"
                })
            }
        } catch(e) {
            console.error(e);
            return res.status(500).json({
                message: "Server Error"
            })
        }
    }
)

module.exports = router;