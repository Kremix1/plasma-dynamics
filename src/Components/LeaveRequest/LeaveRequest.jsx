import './leaveRequest.scss'
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

export const LeaveRequest = () => {
    let [approvedForm, setApprovedForm] = useState(false)
    let [agreement, setAgreement] = useState(false)

    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [mail, setMail] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Зашёл в сабмит форм')
        if (!validate()) {
            return;
        }

        emailjs.sendForm('service_818q51x', 'template_dd0mmhr', form.current, 'ADQS3Y40pUo1_c19z')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();

        setApprovedForm(true);
    }

    function validate() {
        console.log('Зашёл в валидацию')
        let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let regPhone = /7\d{10}/;

        if(name === '') {
            alert('Обязательно введите корректное имя')
            return false;
        }

        if(!regPhone.test(phone) || phone === '') {
            alert('Обязательно введите корректный телефон начиная с 7')
            return false;
        }

        if(!regMail.test(mail) || mail === '') {
            alert('Обязательно введите корректный e-mail');
            return false;
        }
        return true
    }

    const form = useRef();

    return (
        <div className='leave-request' id='send-request'>
            <div className='leave-request__container'>
                <h1 className='leave-request__title'>Оставьте заявку</h1>
                <div className='leave-request__body'>
                    <img className='leave-request__img' src='/images/about/plasmatron.png'/>
                    {!approvedForm ?
                        <form ref={form} name='form_id' id='form_id' className='leave-request__form' onSubmit={(e) => submitForm(e)}>
                            <p className='leave-request__text'>Если остались вопросы, оставьте свою заявку.<br/>Специалисты свяжутся с вами и помогут найти нужное для вас решение.</p>
                            <input value={name} onChange={(e) => setName(e.target.value)} id='user_name' type='text' name="user_name" className='leave-request__input' placeholder='Имя*'/>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} id='user_phone' type='text' name="user_phone" className='leave-request__input' placeholder='Номер телефона*'/>
                            <input value={mail} onChange={(e) => setMail(e.target.value)} id='user_mail' type='text' name="user_mail" className='leave-request__input' placeholder='Почта*'/>
                            <textarea name="message" className='leave-request__input-area' placeholder='Вопрос*'/>
                            <label onChange={() => setAgreement(prev => !prev)} className='leave-request__checkbox-label'><input className='leave-request__checkbox' checked={agreement} type='checkbox'/>Соглашаюсь с обработкой персональных данных*</label>
                            <button className={agreement ?
                                'leave-request__button' :
                                'leave-request__button leave-request__button_gray'}
                                    type='submit' disabled={!agreement}>Отправить</button>
                        </form>
                        :
                        <div className='leave-request__approved-form'>
                            <p className='leave-request__approved-text'>Благодарим за вашу заявку, в скором времени с вами свяжутся.</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};