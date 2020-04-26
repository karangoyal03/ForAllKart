

$(function(){
    let name = $('#input-name')
    let gender = $("#input-gender")
    let address = $("#input-address")
    let email = $("#input-email")
    let phone = $("#input-phone")

    $('#submit').click(()=>{
       
        console.log(name.val());
        console.log(gender.val());
        console.log( address.val());
        console.log( email.val());
        console.log( phone.val());


        addusers(
          name.val(),
          gender.val(),
          address.val(),
          email.val(),
          phone.val()
          ,function(useradded){
              window.alert("Added" + useradded.name + "to database");
          }
        );
       
       
    })

})