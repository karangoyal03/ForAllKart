const route =require('express').Router()

const userroute=require('./users')

const productroute=require('./products')

const queryroute=require('./queries')

const cartroute=require('./cart')


route.use('/users',userroute)

route.use('/products',productroute)

route.use('/queries',queryroute)

route.use('/cart',cartroute)

exports =module.exports=route