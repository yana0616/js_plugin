import CalendarFunc from './util/calendar'
import SliderFunc from './util/slider'
import AOS from 'aos/dist/aos'

// let trigger = trigger || {};
let target = target || {};
target = {
    $slider: $('[data-target-slider]')
};


(function($){
    const calendar = new CalendarFunc();
    const slider = new SliderFunc();
    // const  = new SliderFunc();
    calendar.range();
    calendar.flatPicker();
    slider.sliderSwiper();
    // slider.slickSlider();
    AOS.init();
}(jQuery));