let modalOpen = false;

$(window).scroll(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$(window).resize(() => {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  positionHoverText();
});

let $root = $('html, body');
$('a').click(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  let href = $.attr(this, 'href');
});

let menuOpen = false;

$('.hamburger').click(function() {
  if ($('.menu').css('display') === 'none') {
    $('.menu').css('display', 'flex');
    setTimeout(function() {menuOpen = true;}, 100);
  } else {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$('body').click( e => {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  if ($(e.target).attr('class') === 'slb_viewer_overlay' ||
      $(e.target).attr('class') === 'slb_viewer_layout') {
    scrollLock( false );
    $('html, body').animate({scrollTop: currentTop}, 50);
  }
});

$('.menu-item').click(function() {
  $('.menu').css('display', 'none');
  menuOpen = false;
});

$(document).ready(function() {
  $('p').has('.hero-img').addClass('hero');
});

$(window).load(() => {
  positionHoverText();
});

const closeButton = "slb_template_tag slb_template_tag_ui slb_template_tag_ui_close";
const closeButtonDot = closeButton.split(' ').join('.');
const imgContainer = "slb_viewer_slb_default";
let currentTop;

$('body').on('DOMNodeInserted', e => {
  if ($(e.target).attr('class') === closeButton) {
    $(`.${closeButtonDot}`).click(() => {
      scrollLock( false );
      $('html, body').animate({scrollTop: currentTop}, 50);
    });
  }

  if ($(e.target).attr('id') === imgContainer) {
    $(`#${imgContainer}`).css('top', $(window).scrollTop());
    currentTop = $(window).scrollTop();
    scrollLock( true );

    $('.gallery-item').click(() => {
      $(`#${imgContainer}`).css('top', $(window).scrollTop());
      currentTop = $(window).scrollTop();
      scrollLock( true );
    });
  }
});

const positionHoverText = () => {
  for (let i = 0; $(`.img-description-${i}`).siblings().position(); i++) {
    let element = $(`.img-description-${i}`);

    element.css({
      'top': element.siblings().position().top,
      'left': element.siblings().position().left,
      'height': element.siblings().height(),
      'width': element.siblings().width()
    });
  }
}

const scrollLock = $.scrollLock = ( function scrollLockClosure() {
    'use strict';

    var $html      = $( 'html' ),
        // State: unlocked by default
        locked     = false,
        // State: scroll to revert to
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        },
        // State: styles to revert to
        prevStyles = {},
        lockStyles = {
            'overflow-y' : 'scroll',
            'position'   : 'fixed',
            'width'      : '100%'
        };

    // Instantiate cache in case someone tries to unlock before locking
    saveStyles();

    // Save context's inline styles in cache
    function saveStyles() {
        var styleAttr = $html.attr( 'style' ),
            styleStrs = [],
            styleHash = {};

        if( !styleAttr ){
            return;
        }

        styleStrs = styleAttr.split( /;\s/ );

        $.each( styleStrs, function serializeStyleProp( styleString ){
            if( !styleString ) {
                return;
            }

            var keyValue = styleString.split( /\s:\s/ );

            if( keyValue.length < 2 ) {
                return;
            }

            styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
        } );

        $.extend( prevStyles, styleHash );
    }

    function lock() {
        var appliedLock = {};

        // Duplicate execution will break DOM statefulness
        if( locked ) {
            return;
        }

        // Save scroll state...
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        };

        // ...and styles
        saveStyles();

        // Compose our applied CSS
        $.extend( appliedLock, lockStyles, {
            // And apply scroll state as styles
            'left' : - prevScroll.scrollLeft + 'px',
            'top'  : - prevScroll.scrollTop  + 'px'
        } );

        // Then lock styles...
        $html.css( appliedLock );

        // ...and scroll state
        $( window )
            .scrollLeft( 0 )
            .scrollTop( 0 );

        locked = true;
    }

    function unlock() {
        // Duplicate execution will break DOM statefulness
        if( !locked ) {
            return;
        }

        // Revert styles
        $html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );

        // Revert scroll values
        $( window )
            .scrollLeft( prevScroll.scrollLeft )
            .scrollTop(  prevScroll.scrollTop );

        locked = false;
    }

    return function scrollLock( on ) {
        // If an argument is passed, lock or unlock depending on truthiness
        if( arguments.length ) {
            if( on ) {
                lock();
            }
            else {
                unlock();
            }
        }
        // Otherwise, toggle
        else {
            if( locked ){
                unlock();
            }
            else {
                lock();
            }
        }
    };
}() );
