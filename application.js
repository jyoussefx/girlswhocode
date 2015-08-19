
var userFullName={};
var userPIN={}
var userEmail={};
var userPhone={};


$(document).ready(function(){ 

         //when the <submit> button is clicked
         $('button').click(function(){

         //store the user's entry in a variable
         var enteredName= document.getElementById('fullName').value;
		  var enteredPIN = document.getElementById('PIN').value;
		   var entereduserName= document.getElementById('userName').value;
		  var enteredEmail = document.getElementById('Email').value;
		  var enteredNum = document.getElementById('phoneNumber').value;

		  userFullName[entereduserName] = enteredName
		  
		  console.log(userFullName);
		  
         //OR var enteredName = $('#enteredFormName').val();
         //update the html in the second form to show the user's entered name
        // $('#fixedFormName').val(enteredName);
        });
    });