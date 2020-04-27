$(function () {
  let name = $("#name");
  let productname = $("#productname");
  let phonenumber = $("#phonenumber");
  let problem = $("#problem");

  $("#submit").click(() => {


    console.log(name.val());
    console.log(productname.val());
    console.log(phonenumber.val());
    console.log(problem.val());

    addqueries(
      name.val(),
      productname.val(),
      problem.val(),
      phonenumber.val(),
      function (addedquery) {
        window.alert(
          "Added your problem " + addedquery.name + "to our database"
        );
      }
    );


  });
});
