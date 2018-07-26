// $(document).ready(function() {
//     $('button').on('click', function() {
//         var index = randomIndex();
//         var queryStr = 'div:nth-of-type('+index+')';
//         console.log(queryStr);
//         $(queryStr).fadeOut(function(){
//             $(this).remove();
//         });
//     });
// })

// function randomIndex() {
//     var numDivs = $('div').length

//     if (numDivs === 1) {
//         return 1;
//     } else {
//         return Math.floor(Math.random() * numDivs) + 1;
//     }
// }

$(document).ready(function() {
    $('button').on('click', function(){
        $('div').fadeToggle();
    });
})