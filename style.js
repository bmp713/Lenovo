
window.addEventListener("scroll", parallax);
function parallax(){
    var width_right = document.getElementById("content_right").style.width;
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        document.getElementById("content_left").style.top = window.pageYOffset/2 + 'px';
        //width_right = width_right + 1 + '%';
    }
}
var menuOpen = 0;
function openMenu(){
    console.log("openMenu()");
    if( window.matchMedia("(min-width: 768px)").matches){
        console.log("DESKTOP");
        if( menuOpen == 0 ){
            document.querySelector("#content_4_sub_heading").style.paddingTop = '35%'; 
            document.querySelector('#content_1').style.display = 'none';
            document.querySelector('#content_2').style.display = 'none';
            document.querySelector('#content_3').style.display = 'none';
            document.querySelector('#contents').style.width = '75%'; 
            document.querySelector('#content_left').style.width = '0%';
            document.querySelector('#content_right').style.width = '100%';
            menuOpen = 1;
        }
        else if( menuOpen == 1 ){
            document.querySelector("#content_4_sub_heading").style.paddingTop = '50%'; 
            document.querySelector('#contents').style.width = '100%'; 
            document.querySelector('#content_left').style.width = '50%';
            document.querySelector('#content_right').style.width = '50%';
            document.querySelector('#content_1').style.display = 'block';
            document.querySelector('#content_2').style.display = 'block';
            document.querySelector('#content_3').style.display = 'block';
            menuOpen = 0;
        }
    }
    // MOBILE view
    else{
        console.log("MOBILE");
        if( menuOpen == 0 ){
            document.querySelector('#menu_div').style.display = 'block';
            menuOpen = 1;
        }
        else if( menuOpen == 1 ){
            document.querySelector('#menu_div').style.display = 'none'; 
            menuOpen = 0;
        }
    }
}
// Elastic smooth scrolling between content sections
function smoothScroll( elementId ){
    var speed = 1;
    var offset = 20;
    var current = window.pageYOffset;
    var destination = document.getElementById( elementId ).offsetTop;

    var timer = setInterval( function(){

        if( current <= destination ){
            current = current + offset;
            window.scrollTo( 0, current );
            if( current >= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
                offset = 1;
            }
        }
        if( current >= destination ){
            current = current - offset;
            window.scrollTo( 0, current );
            if( current <= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
                offset = 1;
            }
        }
    }, speed );
}
//window.addEventListener("load", fixNavbar);
//window.addEventListener("scroll", fixNavbar);
/*function fixNavbar(){
    //console.log('Current = ' + window.pageYOffset );

    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        //console.log('DESKTOP');
        if( window.pageYOffset >= 150 ){
            document.getElementById("header").style.display = 'none';
            document.getElementById('content').style.marginTop = '0px';
            document.getElementById("navbar").style.position = 'fixed';
            document.getElementById("navbar").style.top = '0';
        }
        else{
            document.getElementById("header").style.display = 'block';
            document.getElementById('content').style.marginTop = '0px';
            document.getElementById("navbar").style.position = 'fixed';
            document.getElementById("navbar").style.top = '0';
        }
    }
    // Mobile View
    else{
        document.getElementById("navbar").style.position = 'fixed';
        document.getElementById("navbar").style.top = '0';
        //document.getElementById('copyright_2').appendChild( document.createElement('br') );
    }
}
*/
/*
window.addEventListener("scroll", fadeSections);
function fadeSections{

    if( window.matchMedia("(min-width: 768px)").matches ){

        console.log( "window.pageYOffset: " + window.pageYOffset );

        var content2 = document.getElementById( 'content_2' ).offsetTop;
        var content3 = document.getElementById( 'content_3' ).offsetTop;
        console.log( "Offsets: " + content2 + ', ' + content3 );

        if( (window.pageYOffset > content2) && (window.pageYOffset < content3) ){
            document.getElementById( 'content_2' ).style.display = 'block';
            document.getElementById( 'content_3' ).style.display = 'hidden';
        }
        else if( window.pageYOffset > content3 ){
            document.getElementById( 'content_2' ).style.display = 'hidden';
            document.getElementById( 'content_3' ).style.display = 'block';
        }
    }
}
*/



