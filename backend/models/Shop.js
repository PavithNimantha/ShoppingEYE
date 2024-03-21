import mongoose from "mongoose";

const Schema = mongoose.Schema;

const shopSchema = new Schema({
    shopId: { 
        type: String, 
        unique: true, 
        required: true 
    },

    shopOwnerId: { 
        type: String, 
        unique: true, 
        required: true 
    },
    
    shopName: {
        type: String,
        required: true
    },

    shopOwnerName: {
        type: String,
        required: true
    },

    dataAddedTime : { 
        type : String,
        required: true 
    }
})

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;