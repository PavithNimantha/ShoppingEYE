import moment from "moment-timezone";
import Shop from "../models/Shop.js";
import Counter from "../models/Counter.js";

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
                return `S${shopCounterDoc.count.toString().padStart(5, '0')}`;
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

export const updateShop = async (req,res,next) =>{ //update shops
    try{  
        let shopId = req.params.id;

        const {name, ownerName } = req.body;

        const updateShop = {
            shopName: name,
            shopOwnerName: ownerName
        }

        await Shop.findOneAndUpdate({ shopId: shopId }, updateShop);

        res.status(200).send({status: "Shop Updated"})

    }catch(error) {

        console.error('Error adding shop:', error.message);
        res.status(500).send({status: "Error with update shop", error: error.message});
      }
    }    

export const deleteShop = async (req,res,next) =>{ //delete shops

    let shopId = req.params.id;

    await Shop.findOneAndDelete({ shopId: shopId })
    .then((shop) => {
        res.status(200).send({status: "Shop Deleted", shop});
    }).catch((error) => {
        res.status(500).send({status: "Error with delete shop", error: error.message});
    })
   }

export const getShop = async (req,res,next) =>{ //fetch single shops by Id

    let shopId = req.params.id;
    
    await Shop.findOne({ shopId: shopId })
    .then((shop) => {
        res.status(200).json(shop)
    }).catch((error) => {
        res.status(500).send({status: "Error with get shop", error: error.message});
    })
   }
