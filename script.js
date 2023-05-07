//Este Javascript es para darle el efecto glow(brillo) a los iconos y botones

$(".input_text").focus(function(){
    $(this).prev(".fa").addClass("glowIcon");
})

$(".input_text").focusout(function(){
    $(this).prev(".fa").removeClass("glowIcon");
})

$("#login_button").hover(function(){
    $(this).addClass("button_group");
})

$("#login_button").mouseleave(function(){
    setTimeout(() => {
        $(this).removeClass("button_group");
    }, 100);
    
})