$(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });

    if(window.innerWidth > 767){
        $('header').css('height', window.innerHeight);
        $('video').css('width', $('header').css('width'));
        $( ".square" ).each(function() {
          $( this ).css('height',$( this ).css('width'));
        });
    }
    else{
        $('header').css('height', 'auto');
        $( ".square" ).each(function() {
          $( this ).css('height','auto');
        });
    }

    $( ".square-sm" ).each(function() {
      $( this ).css('height',$( this ).css('width'));
    });

    $( ".half-margin-top" ).each(function() {
      $( this ).css('margin-top',$( this ).height()/2);
    });

    $( ".half-margin-top-data-02" ).each(function() {
          $( this ).css('margin-top',($( ".data-02" ).height()/2)-$( this ).height()/2);
    });

    $( ".neg-half-margin-top" ).each(function() {
      $( this ).css('margin-top',-1*$( ".neg-ref" ).height()/2);
    });

    $('.btnShare').hover(function(){
        $(this).addClass('animated tada');
    },function(){
        $('.animated.tada').removeClass('animated tada');
    });

    $('.header-content-mobile a').css('margin-top', -1*$( ".header-content-mobile a" ).height());


    $(window).on('resize', function(){
        if(window.innerWidth > 767){
            $('header').css('height', window.innerHeight);
            $('video').css('width', $('header').css('width'));
            $( ".square" ).each(function() {
              $( this ).css('height',$( this ).css('width'));
            });
        }
        else{
            $('header').css('height', 'auto');
            $( ".square" ).each(function() {
              $( this ).css('height','auto');
            });
        }
        $( ".square-sm" ).each(function() {
          $( this ).css('height',$( this ).css('width'));
        });

        $( ".half-margin-top" ).each(function() {
          $( this ).css('margin-top',$( this ).height()/2);
        });

        $( ".half-margin-top-data-02" ).each(function() {
          $( this ).css('margin-top',($( ".data-02" ).height()/2)-$( this ).height()/2);
        });

        $( ".neg-half-margin-top" ).each(function() {
          $( this ).css('margin-top',-1*$( ".neg-ref" ).height()/2);
        });
        $('.header-content-mobile a').css('margin-top', -1*$( ".header-content-mobile a" ).height());
    });

    $(window).on('scroll', function () {
    });

    (function () {
    var countUp, setCount, url;
    url = 'https://rockcontent.com/contenttrends/';
    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url=' + url + '&callback=?', function (json) {
        return setCount($('.twCount'), json.count);
    });
    $.getJSON('http://graph.facebook.com/http://rockcontent.com/contenttrends', function (json) {
        console.log($('.fbCount'), json.shares);
        return setCount($('.fbCount'), json.shares);
    });
    // $.getJSON('http://api.pinterest.com/v1/urls/count.json?url=' + url + '&callback=?', function (json) {
    //     return setCount($('.prCount'), json.count);
    // });
    $.getJSON('http://www.linkedin.com/countserv/count/share?url=http%3A//rockcontent.com/contenttrends/' + '&callback=?', function (json) {
        return setCount($('.liCount'), json.count-284);
    });
    // $.getJSON('http://feeds.delicious.com/v2/json/urlinfo/data?url=' + url + '&callback=?', function (json) {
    //     return setCount($('.dlCount'), json[0].total_posts);
    // });

    var request = [{
        "method":"pos.plusones.get",
        "id":"p",
        "params":{
            "nolog":true,
            "id":url,
            "source":"widget",
            "userId":"@viewer",
            "groupId":"@self"
            },
        "jsonrpc":"2.0",
        "key":"p",
        "apiVersion":"v1"
    }];

    $.ajax({
        url: "https://clients6.google.com/rpc?http://rockcontent.com/contenttrends",
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            return setCount($('.gpCount'), response[0].result.metadata.globalCounts.count);
        }
    });

    countUp = function ($item) {
        return setTimeout(function () {
            var current, newCount, target;
            current = $item.attr('data-current-count') * 1;
            target = $item.attr('data-target-count') * 1;
            newCount = current + Math.ceil((target - current) / 2);
            $item.attr('data-current-count', newCount);
            $item.html(newCount);
            if (newCount < target) {
                return countUp($item);
            }
        }, 100);
    };
    setCount = function ($item, count) {
        if (count == null) {
            count = 0;
        }
        $item.attr('data-target-count', count);
        $item.attr('data-current-count', 0);
        return countUp($item);
    };
}.call(this));



}); 