const mongoose = require("mongoose");

const WalletSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  wallet: {
      type: Number,
      required: true,
      default: 10000
  },
  
});

// export model user with WalletSchema
module.exports = mongoose.model("wallet", WalletSchema);