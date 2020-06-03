

function formValidation()
{
var docname = document.registration.fname;
var doccountry= document.registration.country;
var docemail= document.registration.email;

var a=Checkname(docname,docemail);
/* Conditions to be true for successful submission of form */
if(a==true)
{
        var c=Checkaddress(doccountry);
        if(c==true)
        {
            alert("HURRAY !!!!!!!!!!! Your form is successfully submitted...     The form was validated on following criterias.. Name contains only letters. Email has only small letters,numbers,dot and @. Country was chosen.No field was left empty");

        }
    }

}



/* Conditions to be true for successful submission of name */
function Checkname(x,y) 
{
    var letters=/^[A-Za-z" "]+$/;
    var emails=/^[0-9a-z@.]+$/;
  if (x.value.length == 0)
   { 
      alert("Name field is blank");  	
      return false; 
   } 
   if (y.value.length == 0)
   { 
      alert("email field is blank");  	
      return false; 
   } 	
   else if(x.value.match(letters) && y.value.match(emails) )
   {
        return true;
   }
   else{
       alert("Name field should contain alphabets only and email should contain only small letters and @");
       return false;
   }
 }


/* Conditions to be true for successful submission of address */
 function Checkaddress(y)
 {
     var def="Default";
     if(y.value.length==0 || y.value.match(def))
     {
        alert("Country field is blank");
        return false;
     }
     else return true;
 }



 function dat(){
    var d = new Date();
    document.getElementById("date").innerHTML = d;
    }

function collaps(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
        }
     else {
      content.style.display = "block";
    }
  });
}
}