import validator from 'validator'

export default class Validation {
    constructor(){
        this.message = {
            name: '名前を入れてね',
            company: '会社名を入れてね',
            tel: '正しい電話番号をいれてね',
            email: '正しいEメールじゃないよ',
            contents: '問い合わせ内容を入れてね'
        }
    }

    basic(){
        $('#inquireForm').on('click', (e) => {
            e.preventDefault()
            Object.keys($('[data-target-input]')).forEach(i => {
                if(!isNaN(i)){
                    let key = $('[data-target-input]').eq(i).data('target-input')
                    showErrorMsg(key)
                }
            })
            if (!$('[data-msg=error]').hasClass('is-active')) $('#inquireForm').submit()
        })

        $('[data-target-input]').on('blur', function(e) {
            const key = $(e.target).data('target-input')
            showErrorMsg(key)
        })

    }
}

const showErrorMsg = (key) => {
    const message = {
        name: {
            required: 'お名前を記入してください。'
        },
        company: {
            required: '法人名を記入してください。'
        },
        tel: {
            required: '電話番号を記入してください。',
            valid: '電話番号を正しく記入してください。'
        },
        email: {
            required: 'メールアドレスを記入してください。',
            valid: 'メールアドレスを正しく記入してください。'
        },
        contents: {
            required: 'お問い合わせ内容を記入してください'
        }
    }

    const $target = $(`[data-target-input=${key}]`)

    if(validator.isEmpty(document.getElementsByName(key)[0].value)) {
        if($target.attr('required'))
            $target.siblings('[data-msg]').addClass('is-active').text(message[key].required)
    }else {
        if($target.attr('required')){
            $target.siblings('[data-msg]').addClass('is-active').text(message[key].required)
        } else {
            $target.siblings('[data-msg]').removeClass('is-active').text('')
        }

        if(!judgeCorrectFlg(key)){
            $target.siblings('[data-msg]').addClass('is-active').text(message[key].valid)
        } else {
            $target.siblings('[data-msg]').removeClass('is-active').text('')
        }
    }

}

const judgeCorrectFlg = (key) => {
    let flg = true
    const value = document.getElementsByName(key)[0].value
    switch(key){
        case 'email':
            flg = validator.isEmail(value)
            break;
        case 'tel':
            flg = validator.isNumeric(value) && validator.isLength(value, {min: 10, max: 11})
            break;
        default:
            break;
    }
    return flg
}