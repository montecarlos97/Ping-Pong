var number = function(userNumber) {
   var numberArray = [];
   
     if (userNumber < 0) { //negative numbers
       for (var i = -1; i >= userNumber; i--) {
         numberArray.push(i);
       }
       numberArray.forEach(function(number) {
         if (number % 15 === 0) {
           numberArray[-numbers-1] = 'number';
         } else if (number % 3 === 0) {
           numberArray[-number-1] = 'ping';
         } else if (number % 5 === 0) {
           numberArray[-number-1] = 'pong';
         }
       });
     } else 
     if (userNumber > 0) { //positive numbers
         for (var i = 1; i <= userNumber; i++) {
           numberArray.push(i);
         }
         numberArray.forEach(function(number) {
           if (number % 15 === 0) {
             numberArray[number-1] = 'pingpong';
           } else if (number % 3 === 0) {
             numberArray[number-1] = 'ping';
           } else if (number % 5 === 0) {
             numberArray[number-1] = 'pong';
           }
         });
     }
     return numberArray;
    }

    var displayResultList = function(outputArray) {
       $('ul#result').empty();
     outputArray.forEach(function(item) {
       $('ul#result').append('<li>' + item + '</li>');
     });
     return;
    }

  $(document).ready(function() {
   $('form').submit(function(event) {
     var userNumber = $('input#number').val();

    displayResultList(number(userNumber));

    event.preventDefault();
   });
});