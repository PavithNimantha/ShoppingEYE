//creating routes
import { getShops, getShop, addShop, updateShop, deleteShop } from '../controllers/Shops.js';
import { Router } from "express";

const router = Router();

router.get('/shops',getShops)

router.get('/shop/:id', getShop)

router.post('/createshop', addShop)

router.put('/updateshop/:id', updateShop)

router.delete('/deleteshop/:id', deleteShop)


export default router;