import moment from "moment-timezone";
import Shop from "../../models/shoppingMallManagement/Shops.model.js";
import Counter from "../../models/Counter.js";

export const getShops = (req, res, next) => { //fetch shop
        Shop.find()
        .then(shops => {
            res.status(200).json(shops)
        })
        .catch(error => {
            res.status(500).send({status: "Error with get shop", error: error.message});
        })
    }

export const addShop = async (req,res,next) =>{ //add new shops

    try{
        const currentDateTime = moment().tz('Asia/Colombo'); //data creating time
        async function generateShopId() {

            try { //creating unique Id
                const shopCounterDoc = await Counter.findOneAndUpdate({ entity: 'Shop' }, { $inc: { count: 1 } }, { new: true,    upsert: true });
                return `S${shopCounterDoc.count.toString().padStart(3, '0')}`;
            } catch (error) {
              console.error('Error fetching shop count:', error.message);
            }
          }
      
        const {name, ownerName} = req.body

        const shopId = await generateShopId()

        const shop = new Shop ({
            shopId,
            shopName: name,
            shopOwnerName: ownerName,
            shopCreatedTime: currentDateTime
        })

        await shop.save()
            res.json({status: "New shop added", shop})

    }catch (error) {

        console.error('Error adding shop:', error.message);
        res.status(500).json({ status: "Internal server error", error: error.message });
      }
    }

    export const updateShop = async (req, res, next) => { //update shops
        try {  
            let shopId = req.params.id;
            const { name, ownerName } = req.body;
    
            const updateShop = {
                shopName: name,
                shopOwnerName: ownerName
            };
    
            const updatedShop = await Shop.findOneAndUpdate({ shopId: shopId }, updateShop);
            if (!updatedShop) {
                // If updatedShop is null
                return res.status(404).send({ status: "Error with update shop", error: "Shop not found" });
            }
    
            res.status(200).send({ status: "Shop Updated" });
    
        } catch (error) {
            console.error('Error updating shop:', error.message);
            res.status(500).send({ status: "Error with update shop", error: error.message });
}                                                                                                                                                                                                                                                                                                                                                           
    };
    
    export const deleteShop = async (req, res, next) => { //delete shops
        try {
            let shopId = req.params.id;
    
            const deletedShop = await Shop.findOneAndDelete({ shopId: shopId });
    
            if (!deletedShop) {
                // If deletedShop is null, it means no shop was found with the given shopId
                return res.status(404).send({ status: "Error with delete shop", error: "Shop not found" });
            }
    
            +
            res.status(200).send({ status: "Shop Deleted", shop: deletedShop });
    
        } catch (error) {
            console.error('Error deleting shop:', error.message);
            res.status(500).send({ status: "Error with delete shop", error: error.message });
        }
    };
    

export const getShop = async (req,res,next) =>{ //fetch single shops by Id

    let shopId = req.params.id;
    
    await Shop.findOne({ shopId: shopId })
    .then((shop) => {
        res.status(200).json(shop)
    }).catch((error) => {
        res.status(500).send({status: "Error with get shop", error: error.message});
    })
   }
