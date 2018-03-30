import slick from 'slick-carousel/slick/slick.min'
import swiper from 'swiper/dist/js/swiper'

export default class SliderFunc {
    constructor(target){
        this.target = target;
    }
    sliderSwiper(){
        const target = {
            $slider: $('[data-target-slider]')
        };
        if(!target.$slider.length) return;
        target.$slider.swiper({
            loop: true,
            pagination: '.swiper-pagination'
        })
        // console.log('test');
    }
    slickSlider(){
        const target = {
            $slider: $('[data-target-slick]')
        };
        if(!target.$slider.length) return;
        target.$slider.slick({
            dots: true,
            autoplay: true,
            speed: 300,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 0
                    }
                }
            ]
        });
        // console.log('test');
    }
}