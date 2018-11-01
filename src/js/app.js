import CalendarFunc from './util/calendar'
import SliderFunc from './util/slider'
import AOS from 'aos/dist/aos'
import Validation from './util/validator'

// let trigger = trigger || {};
let target = target || {};
target = {
    $slider: $('[data-target-slider]')
};


(function($){
    const calendar = new CalendarFunc();
    const slider = new SliderFunc();
    const validation = new Validation();
    // const  = new SliderFunc();
    calendar.range();
    calendar.flatPicker();
    slider.sliderSwiper();
    // slider.slickSlider();
    AOS.init();
    validation.basic()
}(jQuery));