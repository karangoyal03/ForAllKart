$(function () {
  let productlist = $("#product-list");
  let item = $("#item");

  fetchmobiles(function (products) {
    productlist.empty();
    for (let product of products) {
      productlist.append(createproduct(product));
      // $("#productdetail").siblings().siblings().append(
      //   $("<button>")
      //         .attr("class", "btn btn-outline-primary")
      //         .text("ADD TO CART")
      //         .click((event) => {
      //           console.log(event.target.parentElement.id);
      //           fetchMobileById(
      //             event.target.parentElement.id,
      //             createcart
      //           );
      //         })
      // );
    //  $('.productdetail').append(
    //     $("<button>")
    //       .attr("class", "btn btn-outline-primary")
    //       .text("ADD TO CART")
    //       .click((event) => {
    //         console.log(event.target.parentElement.parentElement.id);
    //         fetchMobileById(
    //           event.target.parentElement.parentElement.id,
    //           createcart
    //         );
    //       })
    //   );
    // $('<button onclick="myclick()"class="btn btn-outline-primary">ADD TO CART</button>').insertAfter('.productdetails')
    //  function myclick(event) {
    //    console.log(event.target.parentElement.parentElement.id);
    //            fetchMobileById(
    //              event.target.parentElement.parentElement.id,
    //              createcart
    //   );
    // }
  }
    
  });


  $("#searchbtn").click(() => {
    let searchval = item.val();
    productlist.empty();
    fetchmobilesbycompanyname(searchval, function (products) {
      for (let product of products) {
        productlist.append(createproduct(product));
      }
    });
    searchval.val("");
  });
});
