$(document).ready(function(){ 

         //when the <submit> button is clicked
         $('button').click(function(){

         //store the user's entry in a variable
         var enteredName = document.getElementById('enteredFormName').value;
		  var enteredPIN = document.getElementById('PIN').value;
         //OR var enteredName = $('#enteredFormName').val();
         //update the html in the second form to show the user's entered name
        // $('#fixedFormName').val(enteredName);
        });
    });