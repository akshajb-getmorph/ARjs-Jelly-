$( document ).ready(function() {
    
    $('.splash').click(function(){
        $(this).fadeOut(500);
        $('.addJelly').fadeIn(500);
    })
    $('.addJelly').click(function(){
        $(this).fadeOut(500);
        var scene = document.querySelector('a-scene');
        let jelly = scene.querySelector('#jelly');
        let anim = document.createElement('a-animation');
        let animJ = $('a-animation');
        jelly.setAttribute("visible",true);
        anim.setAttribute('attribute',"position");
        anim.setAttribute('dur',"1500");
        anim.setAttribute('to','2 0.80 -1.85');
        anim.setAttribute('easing','linear');
        jelly.appendChild(anim);
        console.log(jelly);
    });
});