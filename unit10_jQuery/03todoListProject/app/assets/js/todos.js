
// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// click on X to delete todo
$('ul').on('click', 'span', function(event){
    $(this).parent().slideUp(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// add events
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+$(this).val()+"</li>");
        $(this).val("");
    }
});

// hide input
$('.fa-plus').on('click', function(){
    $('input').slideToggle(200);
});