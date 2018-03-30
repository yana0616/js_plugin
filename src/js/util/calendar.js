import Kalendae from 'kalendae/build/kalendae.standalone.min'
import flatpickr from 'flatpickr/dist/flatpickr.min'

export default class CalendarFunc {
    range(){
        const target = {
            $calendar: $('[data-calender=calender]'),
            $calResult: $('[data-cal-result=result]')
        }

        if(!target.$calendar.length) return;
        const daysList = ['日','月','火','水','木','金','土'];
        var classMap = [];
        classMap[ Kalendae.moment().add({d:10}).format('YYYY-MM-DD') ] = 'closed';

        const dateList = [];
        target.$calendar.kalendae({
            format: 'YYYY年MM月DD日',
            mode: 'range',
            months: 2,
            dayHeaderClickable: true,
            titleYearFormat: 'YYYY年',
            titleMonthFormat: 'MM月',
            dateClassMap: classMap,
            subscribe: {
                'show': function (date){
                    $('[data-day]').map(function(i){
                        // 曜日の書き換え
                        $('[data-day]')[i].innerText = daysList[i%7];
                    })
                },
                'hide': function () {
                    this.getSelectedAsText().map(date => {
                        dateList.push(`<div>${date}</div>`);
                });
                    target.$calResult.append(dateList);
                }
            }
        });
    }

    flatPicker(){
        const target = {
            $flatpicker: $('[data-calender=flatpicker]')
        };
        if(!target.$flatpicker.length) return;
        target.$flatpicker.flatpickr();
    }
}