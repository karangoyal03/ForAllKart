function fetchusers(done) {
  $.get("/api/users", function (data) {
    done(data);
  });
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

     <div class="col-6 d-flex justify-content-center" style="height:250px">
     <div id=${product.id} class="product_details p-3 hvr-wobble-horizontal">
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
      <div class="font-weight-bolder text-center p-1" style="color:red;"><strong>&#8377 ${product.price}</strong></div>
      <br>
      <button class="btn btn-outline-primary text-center">ADD TO CART</button>
    <br>
     </div>
     </div>
    </div>
    </div>
    `);
}
