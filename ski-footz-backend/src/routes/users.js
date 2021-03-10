const express = require('express');
const router = express.Router();
import { MongoClient } from 'mongodb';

/* GET users listing. */
router.get('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const client = await MongoClient.connect(
     process.env.MONGO_USER && process.env.MONGO_PASS 
     ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9b54o.gcp.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
     :'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
  const db = client.db(process.env.MONGO_DBNAME || 'ski-db');
  const user = await db.collection('users').findOne({ id: userId });
  if(!user) return res.status(404).json('Could not find User with the Id ');
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id => 
    products.find((product) => product.id === id));
  res.status(200).json(cartItems);
  client.close();
});


router.post('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;
  const client = await MongoClient.connect(
     process.env.MONGO_USER && process.env.MONGO_PASS 
     ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9b54o.gcp.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
     :'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
  const db = client.db(process.env.MONGO_DBNAME || 'ski-db');
  await db.collection('users').updateOne({ id: userId }, {
    $addToSet: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id => 
    products.find((product) => product.id === id)); 
    res.status(200).json(cartItems);
    client.close();
}); 

router.delete('/api/users/:userId/cart/:productId', async (req, res) => {
  const { productId } = req.params;
  const { userId } = req.params;
  const client = await MongoClient.connect(
     process.env.MONGO_USER && process.env.MONGO_PASS 
     ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9b54o.gcp.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
     :'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
  const db = client.db(process.env.MONGO_DBNAME || 'ski-db');
  await db.collection('users').updateOne({ id: userId }, {
  $pull: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id => 
    products.find((product) => product.id === id)); 
    res.status(200).json(cartItems);
    client.close();
});

module.exports = router;
 