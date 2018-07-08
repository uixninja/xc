$(document).ready(function(){
    $('.carousel').length > 0 ? $('.carousel').carousel({
        num: 5,
        maxWidth: 360,
        maxHeight: 540,
        distance: 175,
        scale: 0.9,
        animationTime: 400,
        autoPlay: false
    }) : null;
    
    function Timer (date) {
        var s = (new Date(date)).getTime() - (new Date()).getTime();
        s = parseInt(s / 1000);
        
        var h = parseInt(s / 3600);
        var d = parseInt(h / 24);
        h = h % 24;
        s -= h * 3600;
    
        var m = parseInt(s / 60) % 60;

        document.getElementById('days1').innerHTML = d.toString().length == 1 ? 0 : d.toString()[0];
        document.getElementById('days2').innerHTML = d.toString().length == 1 ? d.toString()[0] : d.toString()[1];

        document.getElementById('hours1').innerHTML = h.toString().length == 1 ? 0 : h.toString()[0];
        document.getElementById('hours2').innerHTML = h.toString().length == 1 ? h.toString()[0] : h.toString()[1];

        document.getElementById('mins1').innerHTML = m.toString().length == 1 ? 0 : m.toString()[0];
        document.getElementById('mins2').innerHTML = m.toString().length == 1 ? m.toString()[0] : m.toString()[1];
    }
    if ($(".timer").length > 0) {
        setInterval(function() {
            Timer('September 30, 2018');
        }, 1000);
    }
    
    $('.line .point').on('click', function(){
        $(this).closest('.line').find('> div').removeClass('active');
        $(this).addClass('active');

        $('.point_description').text($(this).data('text'));
    });
    
    $('.business .right img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });

    $('.read .centered .left img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated jackInTheBox',
        offset: 100
    });

    $('.earn .right img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
    });

    $('.map img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 100
    });

    $('.technology .image img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

    $('.stream .image img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInDown',
        offset: 100
    });

    $('.people > div').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 100
    });
});
