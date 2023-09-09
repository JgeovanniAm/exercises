let _loadedImages = 0;
const _imageArray = new Array('animalcuerpo.png', 'animalfinal.png', 'cabeza.png', 'card.png', 'line.jpg', 'titleFirst.png', 'sombragrande.png', 'sombratitulofinal.png', 'titlefinal.png', 'tituloabajo.png', 'tituloFirtssombra.png', 'titulosombraabajo.png', 'vaso.png', 'roto1.png', 'roto2.png');
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



function initModule() {
    return new TimelineMax()
        .addLabel('bezier')
        .to('.title-up', 0.2, { top: ('50') }).delay(0.2)
        .to('.title-up-shadow', 0.2, { top: ('70') }).delay(0.25)

        .to('.title-up', 1, { bezier: { curviness: 2, values: [{ x: ('-3'), y: ('-4') }, { x: ('-2'), y: ('4') }, { x: ('2'), y: ('-3') }, { x: ('3'), y: ('3') }] }, ease: Power1.easeInOut, yoyo: true, repeat: 1 }, 'bezier')
        .to('.title-up-shadow', 1, { bezier: { curviness: 2, values: [{ x: ('3'), y: ('4') }, { x: ('2'), y: ('-4') }, { x: ('0'), y: ('4') }, { x: ('-3'), y: ('-2') }] }, ease: Power1.easeInOut, yoyo: true, repeat: 1 }, 'bezier');
}

function initAnimations() {
    const duration = 1;
    const _myAnimation = new TimelineMax();

    _myAnimation.to(`.ui-ball`, 0.5, {})
        .addLabel('none')
        .to('.title-up', 1, { top: ('-200') }, 'none').delay(0.2)
        .to('.title-up-shadow', 1, { top: ('-200') }, 'none').delay(0.25)
        .to('.title', 1.5, { top: ('-200') }, 'none').delay(0.2)
        .to('.title-shadow', 1.5, { top: ('-200') }, 'none').delay(0.25)

        .addLabel('show')
        .to('.head', 0.5, { top: ('20') }, 'show')
        .to('.bodyAnimal', 0.5, { top: ('108'), rotation: ('0deg'), }, 'show')
        .to('.background-line', 0.5, { top: ('200'), }, 'show')
        .to('.head', 0.5, { left: '80', top: ('20'), rotation: ('-12deg'), ease: Power1.easeInOut })
        .to('.head', 0.5, { left: '90', top: ('20'), rotation: ('-1deg'), ease: Power1.easeInOut })
        .to('.head', 0.3, { left: '80', top: ('20'), rotation: ('-12deg'), ease: Power1.easeInOut })
        .to('.head', 0.3, { left: '90', top: ('20'), rotation: ('-1deg'), ease: Power1.easeInOut })

        .addLabel('hid')
        .to('.head', 0.5, { opacity: 0 }, 'hid')
        .to('.bodyAnimal', 0.5, { opacity: 0 }, 'hid')
        //
        .addLabel('start')
        .to('.card', 0.1, { top: 130, left: 10, y: -50, scale: 1, ease: Power2.easeOut, delay: duration / 4 }, 'start')
        .to('.card', 0.2, { top: 110, left: 0, scale: 0.9, ease: Power2.easeOut, })
        .to('.card', 0.5, { top: 145, left: -10, scale: 0.85, ease: Bounce.easeOut, delay: duration / 4 })
        .to('.sombraCard', 0.8, { opacity: 0.4 })
        .to('.title-final', 0.6, { opacity: 1 }, 'start')
        .to('.title-final-sombra', 1.5, { opacity: 0.4 })
        .to('.vaso', 0.2, { right: -25, scale: 1.1 }, 'start')

        // leave animal

        .addLabel('leave', '-=2')
        .to('.roto', 0.1, { scale: 1, opacity: 1, ease: Power1.easeInOut }, 'leave')
        .to('.roto2', 0.1, { scale: 1, opacity: 1, ease: Power1.easeInOut }, 'leave')
        .to('.rotowhite', 0.1, { scale: 1, opacity: 1, ease: Power1.easeInOut }, 'leave')
        .from('.animal', 0.5, { top: 15, opacity: 0, ease: Power1.easeInOut }, 'leave')
        .to('.shine', 0.6, { scale: 1.1, top: 0, opacity: 1, ease: Power1.easeInOut }, 'leave');
}

