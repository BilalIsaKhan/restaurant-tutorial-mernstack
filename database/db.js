const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Bilal_Isa_Khan:December25.@restaurant-tutorial-mer.rys8njb.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connection success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
