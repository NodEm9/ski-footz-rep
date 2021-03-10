import express from 'express';
const router = express.Router();
import { MongoClient } from 'mongodb';

 
/* GET home page. */
router.get('/api/products', async (req, res) => {
  const client = await MongoClient.connect(
    process.env.MONGO_USER && process.env.MONGO_PASS 
     ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9b54o.gcp.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
     :'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
  const db = client.db(process.env.MONGO_DBNAME || 'ski-db');
  const products = await db.collection('products').find({}).toArray();
  res.status(200).json(products);
  client.close();
})

router.get('/api/products/:productId', async (req, res) =>{
   const { productId } = req.params;
   const client = await MongoClient.connect(
     process.env.MONGO_USER && process.env.MONGO_PASS 
     ? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9b54o.gcp.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
     :'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
  const db = client.db(process.env.MONGO_DBNAME || 'ski-db');
  const product = await db.collection('products').findOne({ id: productId });
  if(product){
      res.status(200).json(product); 
   }else{
      res.status(404).json('Could not find product!');
   }
});   


module.exports = router;
