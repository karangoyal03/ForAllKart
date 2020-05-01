function fetchusers(done) {
  $.get("/api/users", function (data) {
    done(data);
  });
}

function refreshCart() {
  let cart_list = $("#cart_list");
  cart_list.empty();
  fetchcartitems((carts) => {
    fetchCartDone(cart_list, carts);
  });
}
function fetchCartDone(cart_list, carts) {
  for (cart of carts) {
    cart_list.append(addcart(cart));
    $(".cart_details").append(
      $("<button>")
        .attr("class", "btn btn-danger")
        .text("Remove from Cart")
        .click((e) => {
          deleteproductbyid(e.target.parentElement.id);
        })
    );
  }
}
function fetchmobiles(done) {
  $.get("/api/products", function (data) {
    done(data);
  });
}
function fetchMobileById(id, done) {
  // $.get(
  //   "/api/products/id",
  //   {
  //     id: id,
  //   },
  //   (data) => {
  //     done(data);
  //   }
  // );
  $.get('/api/products',function(data){
    let temp=0;
    for(let i=0;i<data.length;i++){
      if(data[i].id==id){
         temp=data[i];
      }
    }
    done(temp);

  })
}
function deleteproductbyid(id) {
  $.get(
    "/api/cart/delete",
    {
      id: id,
    },
    (data) => {
      refreshCart();
      window.alert(data.message);
    }
  );
}

function fetchmobilesbycompanyname(searchval, done) {
  $.get(
    "/api/products/manufacturer",
    {
      manufacturer: searchval,
    },
    function (data) {
      done(data);
    }
  );
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

function addusers(name, gender, address, email, phone, done) {
  $.post(
    "/api/users",
    {
      name: name,
      gender: gender,
      address: address,
      email: email,
      phonenumber: phone,
    },
    function (data) {
      done(data);
    }
  );
}

function addproducts(
  name,
  manufacturer,
  price,
  imageurl,
  ram,
  primarycamera,
  secondarycamera,
  storage,
  done
) {
  $.post(
    "/api/products",
    {
      name: name,
      manufacturer: manufacturer,
      price: price,
      imageurl: imageurl,
      ram: ram,
      primarycamera: primarycamera,
      secondarycamera: secondarycamera,
      storage: storage,
    },
    function (data) {
      done(data);
    }
  );
}

function addqueries(name, productname, problem, phonenumber, done) {
  $.post(
    "/api/queries",
    {
      name: name,
      productname: productname,
      problem: problem,
      phonenumber: phonenumber,
    },
    function (data) {
      done(data);
    }
  );
}

function addcartitems(productname, manufacturer, price, imageurl, done) {
  $.post(
    "/api/cart",
    {
      productname: productname,
      manufacturer: manufacturer,
      price: price,
      imageurl: imageurl,
    },
    function (data) {
      done(data);
    }
  );
}

function createproduct(product) {
  return $(`
    <div class="shadow-lg rounded-sm p-4 mb-4 bg-white" >
    <div class="row ">
    <div class="col m-2 mt-3 hvr-bounce-in">
     <img src="${product.imageurl}" width="400px" height="470px"> 
     </div>

     <div class="col-6 d-flex justify-content-center" id="productdetail" style="height:250px">
     <div id=${product.id} class="p-3 hvr-wobble-horizontal">
     <br>
     <div class="font-weight-bolder text-center p-1">${product.name}</div>
       <br>

       <div class="font-weight-bolder text-center p-1">${product.manufacturer}</div>
       <br>
        <div class="font-weight-bold text-center p-1">${product.primarycamera} </div>
       <div class="font-weight-bold text-center p-1">${product.secondarycamera} </div>
       <br>
       <div class="font-weight-bold text-center p-1">${product.ram} GB RAM</div>
       <br>
       <div class="font-weight-bold text-center p-1">${product.storage} GB ROM</div>
       <br>
      <div class=" price font-weight-bolder text-center p-1" style="color:red;"><strong>&#8377 ${product.price}</strong></div>
      <br>
      <button onclick=" myclick(event)"
            class="btn btn-primary">Add to Cart</button>
    
     <br>
     
       
     </div>
     </div>
    </div>
    </div>
    `);
}

function myclick(event) {
  console.log(event.target.parentElement.id);
  fetchMobileById(event.target.parentElement.id, createcart);
}

function addcart(product) {
  return $(`
  <div class="row bg-white text-info m-2">
  <div class="col-4">
 <img src="${product.imageurl}" width="400px" height="470px"> 
 </div>

  <div class="col d-flex justify-content-center">
 <div id=${product.id} class="cart_details p-3">
<br>
<div class="font-weight-bolder text-center p-2">${product.productname}</div>
<br>
 <div class="font-weight-bolder text-center p-2">${product.manufacturer}</div>
<br>
<div class="font-weight-bolder text-center p-2" style="color:blue;">&#8377 ${product.price}</div>
<br>
</div>
</div>

  </div>
  `);
}

function createcart(product) {
  $.post(
    "/api/cart",
    {
      productname: product.name,
      manufacturer: product.manufacturer,
      price: product.price,
      imageurl: product.imageurl,
    },
    (cartadded) => {
      window.alert(" Successfully added " + cartadded.name + " to cart");
    }
  );
}
