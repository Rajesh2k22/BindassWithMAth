function sendmail(){

     var param={
         from_name : document.getElementById("Name").value,

         Email_id : document.getElementById("email").value,
         message :  document.getElementById("msg").value,
     };

     document.getElementById("Name").value="";
    document.getElementById("email").value="";
    document.getElementById("msg").value="";

     emailjs.send('service_mn222eb', 'template_kd725od', param)
    .then(function(response) {
       console.log('SUCCESS!', response.status);
    }).catch(function(err){
          console.log("Something Went Wrong.....!");
    })
    
    

}