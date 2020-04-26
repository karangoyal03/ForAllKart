const User =require('../../db').User
const route =require('express').Router()


route.get('/',(req,res)=>{
    User.findAll()
    .then((users)=>{
        res.status(200).send(users)

    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'can not find users'
        })

    })
})

route.post('/',(req,res)=>{
      User.create({
        name: req.body.name,
        gender: req.body.gender,
        address: req.body.address,
        email: req.body.email,
        phonenumber:req.body.phonenumber
      })
      .then((user)=>{
          res.status(201).send(user)

      })
      .catch((err)=>{
          console.log(err)
           res.status(501).send({
               error:'could not add a new user'
           });

      })
})

exports =module.exports=route