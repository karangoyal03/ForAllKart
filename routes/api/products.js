const Mobile =require('../../db').Mobile
const route =require('express').Router()


route.get('/',(req,res)=>{
    Mobile.findAll()
    .then((mobiles)=>{
        res.status(200).send(mobiles)
    })
    .catch((err)=>{
        res.status(500).send({
            error:'could not find mobiles'
        })
    })
})

route.post('/',(req,res)=>{
    if(isNaN(req.body.price)){
         return res.status(403).send({
           error: "Price is not valid number",
         });
    }

    Mobile.create({
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      price: parseFloat(req.body.price),
      imageurl: req.body.imageurl,
      ram: req.body.ram,
      primarycamera: req.body.primarycamera,
      secondarycamera: req.body.secondarycamera,
      storage: req.body.storage,
    })
      .then((mobile) => {
        res.status(201).send(mobile);
      })
      .catch((err) => {
        console.log(err);
        res.status(501).send({
          error: "could not add new mobile",
        });
      });
})


exports =module.exports=route