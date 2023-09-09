let _loadedImages = 0;
const _imageArray = new Array('background1.png', 'background2.png', 'backgroundBlue.png', 'body.png', 'link.png', 'BowlNone.png', 'eyes.png', 'fullBowl.png', 'iceCream.png', 'left1.png', 'left2.png', 'left3.png', 'left4.png', 'left5.png', 'left6.png', 'leftBowl1.png', 'leftBowlFull.png', 'phrase1.png', 'phrase2.png', 'phrase3.png', 'products.png', 'right1.png', 'right2.png', 'right3.png', 'right5.png', 'right6.png', 'right4.png', 'rightBowl.png', 'rightBowlFull.png');
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

        // show character 

        .addLabel('bodyShow')
        .from('.bannerSize', 0.3, { opacity: 1, easeOut: Power1.easeInOut }, 'bodyShow')
        .from('.body', 0.3, { opacity: 1, top: 25, ease: Circ.easeOu }, 'bodyShow')
        .from('.leftHandFull', 0.5, { opacity: 1, easeOut: Power1.easeInOut }, 'bodyShow')
        .from('.rightHandFull', 0.5, { opacity: 1, easeOut: Power1.easeInOut }, 'bodyShow')
        .to('.text1', 1, { opacity: 1, easeOut: Power1.easeInOut })

        // hidden body
        .addLabel('hid')
        .to('.body', 0.5, { opacity: 0.1, easeOut: Power1.easeInOut }, 'hid')
        .to('.bodyeyes', 0.1, { opacity: 1, easeOut: Power1.easeInOut }, 'hid')
        // open eyes
        .addLabel('hi!')
        .to('.bodyeyes', 0.5, { opacity: 0.1, easeOut: Power1.easeInOut }, 'hi!')
        .to('.body', 0.1, { opacity: 1, easeOut: Power1.easeInOut }, 'hi!')

        // chocolate



        //moveHands
        .addLabel('movehands')
        .to('.leftHandFull', 0.5, { opacity: 1, left: 35, rotationZ: ('11deg'), easeOut: Power1.easeInOut }, 'movehands')
        .to('.rightHandFull', 0.5, { opacity: 1, left: 195, top: 40, rotationZ: ('-13deg'), easeOut: Power1.easeInOut }, 'movehands')
        .to('.chocos', 0.1, { opacity: 1, easeOut: Power1.easeInOut })

        // throw chocos HAHAHA!

        .addLabel('throw', '-=0.3')
        // left
        .to('.chocoL1', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('10'), y: ('-10') }, { x: ('40'), y: ('-40') }, { x: ('50'), y: ('60') }] } }, 'throw')
        .to('.chocoL2', 0.9, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('10'), y: ('-10') }, { x: ('40'), y: ('-40') }, { x: ('50'), y: ('60') }] } }, 'throw')
        .to('.chocoL3', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('10'), y: ('-10') }, { x: ('40'), y: ('-40') }, { x: ('50'), y: ('60') }] } }, 'throw')
        .to('.chocoL4', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('10'), y: ('-10') }, { x: ('40'), y: ('-40') }, { x: ('50'), y: ('60') }] } }, 'throw')
        .to('.chocoL5', 0.9, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('10'), y: ('-10') }, { x: ('40'), y: ('-40') }, { x: ('50'), y: ('60') }] } }, 'throw')
        .to('.chocoL6', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('10'), y: ('-10') }, { x: ('40'), y: ('-40') }, { x: ('50'), y: ('60') }] } }, 'throw')
        // Right
        .to('.chocoR1', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('-30'), y: (-'50') }, { x: ('-40'), y: ('-40') }, { x: ('-80'), y: ('60') }] } }, 'throw')
        .to('.chocoR2', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('-30'), y: (-'50') }, { x: ('-40'), y: ('-40') }, { x: ('-80'), y: ('60') }] } }, 'throw')
        .to('.chocoR3', 0.9, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('-30'), y: (-'50') }, { x: ('-40'), y: ('-40') }, { x: ('-80'), y: ('60') }] } }, 'throw')
        .to('.chocoR4', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('-30'), y: (-'50') }, { x: ('-40'), y: ('-40') }, { x: ('-80'), y: ('60') }] } }, 'throw')
        .to('.chocoR5', 0.9, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('-30'), y: (-'50') }, { x: ('-40'), y: ('-40') }, { x: ('-80'), y: ('60') }] } }, 'throw')
        .to('.chocoR6', 0.8, { bezier: { curviness: 5, type: 'soft', values: [{ x: ('-30'), y: (-'50') }, { x: ('-40'), y: ('-40') }, { x: ('-80'), y: ('60') }] } }, 'throw')

        // full
        .to('.leftHandFull', 0.2, { opacity: 0, easeOut: Power1.easeInOut }, 'throw')
        .to('.rightHandFull', 0.2, { opacity: 0, easeOut: Power1.easeInOut }, 'throw')
        .to('.leftHand', 0.3, { opacity: 1, easeOut: Power1.easeInOut }, 'throw')
        .to('.rightHand', 0.3, { opacity: 1, easeOut: Power1.easeInOut }, 'throw')
        .to('.blowlFull', 0.4, { top: 100, easeOut: Power1.easeInOut }, 'throw')
        .to('.blowlFull', 0.4, { opacity: 1, easeOut: Power1.easeInOut }, 'throw')

        .addLabel('hidden2part')
        
        .to('.leftHand', 1, { opacity: 0, easeOut: Power1.easeInOut }, 'hidden2part')
        .to('.rightHand', 1, { opacity: 0, easeOut: Power1.easeInOut }, 'hidden2part')
        .to('.blowlFull', 1, { opacity: 0, easeOut: Power1.easeInOut }, 'hidden2part')
        .to('.bodyeyes', 1, { opacity: 0, easeOut: Power1.easeInOut }, 'hidden2part')
        .to('.body', 1, { opacity: 0, easeOut: Power1.easeInOut }, 'hidden2part')
        .to('.blowlnone', 1, { opacity: 0, easeOut: Power1.easeInOut }, 'hidden2part')
        .to('.chocos', 1, { opacity: 0, easeOut: Power1.easeInOut }, 'hidden2part')

        // pRoducts Animation
        .to('.iceCream', 1, { opacity: 1, easeOut: Power1.easeInOut })
        .to('.text1', 1, { opacity: 0, easeOut: Power1.easeInOut })
        .to('.text2', 1, { opacity: 1, easeOut: Power1.easeInOut })
        .to('.text2', 1, { opacity: 0, easeOut: Power1.easeInOut })
        .to('.text3', 1, { opacity: 1, easeOut: Power1.easeInOut })

        .addLabel('endend')
        .to('.iceCream', 0.5, { scale: (0.24), opacity: 0.8, borderRadius: ('100% 100%'), left: 27, easeOut: Power1.easeInOut },'endend')
        .to('.products', 1, { scale: ('1'),  opacity: 1, easeOut: Power1.easeInOut },'-=0.5')
       // .to('.background', 0.5, { opacity: 1},'endend')
}

