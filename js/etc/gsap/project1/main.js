let _loadedImages = 0;
const _imageArray = new Array('arrow1.png', 'arrow2.png', 'background.jpg', 'backgroundBlue.jpg', 'link.png', 'phrase1.png', 'phrase2.png', 'phrase-end.png', 'text.png', 'text2.png', 'bottle.png');
const banner = document.querySelector('.banner');
this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (let i = 0; i < _imageArray.length; i++) {
        const _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress() {
    _loadedImages++;
    if (_loadedImages == _imageArray.length) init();
}

function init() {
    const css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', "style.css");
    document.getElementsByTagName('head')[0].appendChild(css);
    initAnimations();
}

function initAnimations() {
    const _myAnimation = new TimelineMax();
    _myAnimation
        .to('.bannerSize', 0.7, { scale: ('1'), ease: Circ.easeOu }).delay(0.2)
        .to('.bottle', 0.8, { opacity: 1, ease: Back.easeOut.config(1.2) }).delay(0.2)
        .to('.backgroundBlue', 0.9, { ease: Back.easeOut.config(1.2), opacity: 1, top: ('150') })

        .addLabel('text')
        .to('.text1', 1.5, { opacity: 1 }, 'text')
        .to('.get', 1.5, { opacity: 1 }, 'text')

        // clip animation 

        .addLabel('clip', '-=0.6')
        .to('.phrase1', 1.6, { opacity: 1,  easeOut: Power1.easeInOut , clip: 'rect(0px, 0px, 27px, 0px)' }, 'clip')
        .to('.phrase1', 1.7, { opacity: 1, easeOut: Power1.easeInOut , clip: 'rect(0px, 90px, 27px, 0px)' }, 'clip')
        .to('.arrow1', 1, { opacity: 1, easeOut: Power1.easeInOut , clip: 'rect(0px, 126px, 0px, 125px)' },'-=1')
        .to('.arrow1', 1.4, { opacity: 1, easeOut: Power1.easeInOut , clip: 'rect(0px, 126px, 28px, 0px)' }, '-=1')

        .addLabel('clip2', '-=0.2')
        .to('.phrase2', 1.6, { opacity: 1,  easeOut: Power1.easeInOut , clip: 'rect(0px, 0px, 27px, 0px)' }, 'clip2')
        .to('.phrase2', 1.7, { opacity: 1, easeOut: Power1.easeInOut , clip: 'rect(0px, 70px, 27px, 0px)' }, 'clip2')
        .to('.arrow2', 1, { opacity: 1, easeOut: Power1.easeInOut , clip: 'rect(45px, 0px, 0px, 0px)' },'-=1')
        .to('.arrow2', 1.4, { opacity: 1, easeOut: Power1.easeInOut , clip:  'rect(0px, 22px, 94px, 0px)' },'-=1')
        
        // hidden animation text

        .addLabel('hidden')
        .to('.phrase1', 0.5, { opacity: 0,  }, 'hidden')
        .to('.phrase1', 0.5, { opacity: 0  }, 'hidden')
        .to('.arrow1', 0.5, { opacity: 0  }, 'hidden')
        .to('.arrow1', 0.8, { opacity: 0},)

        .to('.phrase2', 0.5, { opacity: 0,  }, 'hidden')
        .to('.phrase2', 0.5, { opacity:0  }, 'hidden')
        .to('.arrow2', 0.5, { opacity: 0 }, 'hidden')
        .to('.arrow2', 0.5, { opacity: 0 }, 'hidden')
        
        // text-end animation

        .to('.text1', 1, { top: 155,  easeOut: Power1.easeInOut })
        .to('.line', 0.9, {opacity:1 ,  easeOut: Power1.easeInOut})
    
        .to('.phrase-end', 0.9, {opacity:1 ,  easeOut: Power1.easeInOut, clip: 'rect(0px, 0px, 30px, 0px'  })
        .to('.phrase-end', 1, {opacity:1 ,  easeOut: Power1.easeInOut, clip: 'rect(0px, 110px, 32px, 0px)'})
    
}

