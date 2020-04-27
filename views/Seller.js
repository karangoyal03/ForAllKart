$(function(){
    let name = $("#productname");
    let manufacturer = $("#manufacturer");
    let price=$('#price');
    let imageurl=$('#imageurl')
    let ram =$('#ram')
    let primarycamera=$('#primarycamera')
    let secondarycamera = $("#secondarycamera");
    let storage = $("#storage");
    let description=$('#description')

    $('#add').click(()=>{

         console.log(name.val());
         console.log(manufacturer.val());
         console.log(price.val());
         console.log(imageurl.val());
         console.log(primarycamera.val());
         console.log(secondarycamera.val());
         console.log(storage.val());
         console.log(description.val())

         addproducts(
             name.val(),
             manufacturer.val(),
             price.val(),
             imageurl.val(),
             ram.val(),
             primarycamera.val(),
             secondarycamera.val(),
             storage.val()
             ,function(addedproduct){
                  window.alert("Added " + addedproduct.name + "to database successfully");
             }
             
         )


         
    })
})
