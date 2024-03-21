import mongoose from "mongoose";

// Define the Counter schema
const counterSchema = new mongoose.Schema({
  entity: { 
    type: String,
    required: true 
    },
    
  count: { 
    type: Number, 
    default: 0 
    },
});

// Create the Counter model
const Counter = mongoose.model('Counter', counterSchema);

// Export the Counter model
export default Counter;