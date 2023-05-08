import express from 'express'
import mongoose from 'mongoose';
import { createConnection } from 'mongoose';
import { Product } from './modules/product.js';
const url ='mongodb://localhost:27017/shop';


mongoose.connect(url)
       
.then(()=> {
            console.log('Connected to DB');
            app.listen(port, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});
const PORT = 3000;
const app = express();
app.get('/', async (req, res) => {
    try {
     const products= await Product.find()
      const htmlstart= products.map(product => `
<div style="border: 1px solid #000; 
width: fit-content; 
margin: 0 0 20px 0; 
padding: 0 10px">
  <h2>${product.title}</h2>
  <p>Price: ${product.price}</p>
</div>
`); 
const html = `<h1>Products:</h1> ${htmlstart.join('')}`;
res.send(htmlstart);  
    }catch(e) {
        console.error( "error"+ error);
    }
}
)

