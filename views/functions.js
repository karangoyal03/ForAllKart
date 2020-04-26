function fetchusers(done){
    $.get('/api/users',function(data){
        done(data)
    })
}
function fetchmobiles(done) {
  $.get("/api/products", function (data) {
    done(data);
  });
}
function fetchcomplaints(done) {
  $.get("/api/queries", function (data) {
    done(data);
  });
}
function fetchcartitems(done) {
  $.get("/api/cart", function (data) {
    done(data);
  });
}



function addusers(name,gender,address,email,phone,done){
    $.post('/api/users',{
        name:name,
        gender:gender,
        address:address,
        email:email,
        phonenumber:phone
    },function(data){
        done(data)
    })

}

function addproducts(name,manufacturer,price,imageurl,ram,primarycamera,secondarycamera,storage,done){
    $.post('/api/products',{
        name:name,
        manufacturer:manufacturer,
        price:price,
        imageurl:imageurl,
        ram:ram,
        primarycamera:primarycamera,
        secondarycamera:secondarycamera,
        storage:storage
    },function(data){
        done(data)
    })
}

function addqueries(name,productname,problem,phonenumber,done){
    $.post('/api/queries',{
        name:name,
        productname:productname,
        problem:problem,
        phonenumber:phonenumber
    },function(data){
        done(data)
    })
}

function addcartitems(productname,manufacturer,price,imageurl,done){
    $.post('/api/cart',{
       productname:productname,
       manufacturer:manufacturer,
       price:price,
       imageurl:imageurl 
    },function(data){
        done(data)
    })
}