$( document ).ready(function() {
    
    $('.splash').click(function(){
        $('.ui').fadeOut(500);
        // $('.ui').attr("z-index","-2")
        var scene = document.querySelector('a-scene');
        let cake = scene.querySelector('#cake');
        cake.setAttribute("visible",true);
        $('.addJelly').fadeIn(500);
    })
    $('.addJelly').click(function(){
        $(this).fadeOut(500);
        var scene = document.querySelector('a-scene');
        let jelly = scene.querySelector('#jelly');
        jelly.setAttribute("visible",true);
        // let animJ = $('a-animation');
        // let anim = document.createElement('a-animation');
        // anim.setAttribute('attribute',"position");
        // anim.setAttribute('dur',"1500");
        // anim.setAttribute('to','2 0.80 -1.85');
        // anim.setAttribute('easing','linear');
        // jelly.appendChild(anim);
        console.log(jelly);
    });
});