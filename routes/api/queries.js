const Query=require('../../db').Query
const route =require('express').Router()

route.get('/',(req,res)=>{
    Query.findAll()
    .then((queries)=>{
        res.status(200).send(queries)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'could not find any query'
        })
    })
})

route.post('/',(req,res)=>{
    Query.create({
        name:req.body.name,
        productname:req.body.productname,
        problem:req.body.problem,
        phonenumber:req.body.phonenumber
    })
    .then((query)=>{
        res.status(201).send(query)
    })
    .catch((err)=>{
        console.log(err)
        res.status(501).send({
            error:'could not add a new query'
        })
    })
})


exports=module.exports=route