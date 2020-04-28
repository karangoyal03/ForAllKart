


$(function(){
 
  let productlist =$('#product-list')

  fetchmobiles(function(products){
        productlist.empty()
        for(let product of products){
            productlist.append(createproduct(product))
        }

})


})





