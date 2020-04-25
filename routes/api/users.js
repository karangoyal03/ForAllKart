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
    var x = req.body.email;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf("."); 
    if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= x.length
    )
    {
        return res.status(403).send({
          error: "Email is not valid",
        });
    }
    if(req.body.phonenumber.length>10){
        return res.status(405).send({
          error: "It is not valid phone number",
        });
    }
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