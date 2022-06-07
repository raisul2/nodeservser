 const express = require('express');

  const cors = require('cors');
const products = require('./product');

   const app = express()

   app.use(express.json())

    
    app.use(cors())


    app.get("/", (req, res)=>{
      
          
         res.send("wellcome to uour online shop api")
         
    })
    app.get("/products", (req, res)=>{
      
          
         res.send(products)
         
    })

    const PORT = process.env.PORT || 5000

     app.listen(PORT , console.log("server running on port 5000"))