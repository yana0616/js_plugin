import slick from 'slick-carousel/slick/slick.min'
import Swiper from 'swiper/dist/js/swiper'

export default class SliderFunc {
    constructor(target){
        this.target = target;
    }
    sliderSwiper(){
        const target = {
            $slider: $('[data-target-slider]')
        };
        if(!target.$slider.length) return;
        // console.log('swiper');

        target.$slider.map(i => {
            console.log($(target.$slider[i]).data('target-slider'));
            let swiperConfig = {};
            switch ($(target.$slider[i]).data('target-slider')){
                case 'custom01':
                    swiperConfig = {
                        loop: true,
                        direction: 'vertical',
                        speed: 1000,
                        height: 200,
                        autoHeight: true,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets'
                        },
                        breakpoints: {
                            800: {
                                height: 100
                            }
                        },
                        autoplay: {
                            delay: 4000
                        }
                    };
                    break;
                case 'custom02':
                    swiperConfig = {
                        loop: true,
                        slidesPerView: 3,
                        breakpoints: {
                            400: {
                                slidesPerView: 1
                            },
                            800: {
                                slidesPerView: 2
                            }
                        },
                        speed: 1000,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets'
                        },
                        autoplay: {
                            delay: 4000
                        }
                    };
                    break;
                case 'default':
                default:
                    swiperConfig = {
                        loop: true,
                        speed: 1000,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets'
                        },
                        autoplay: {
                            delay: 4000
                        }
                    };
                    break;
            }
            const mySwiper = new Swiper (target.$slider[i], swiperConfig);
        })
    }
    slickSlider(){
        const target = {
            $slider: $('[data-target-slick]')
        };
        if(!target.$slider.length) return;
        console.log('slick');
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