import './leaveRequest.scss'

export const LeaveRequest: React.FC = () => {
    const submitForm = () => {
        console.log('Абоба')
    }

    return (
        <div className='leave-request' id='send-request'>
            <div className='leave-request__container'>
                <h1 className='leave-request__title'>Оставьте заявку</h1>
                <div className='leave-request__body'>
                    <img className='leave-request__img' src='/images/about/plasmatron.png'/>
                    <form className='leave-request__form' onSubmit={submitForm}>
                        <p className='leave-request__text'>Если остались вопросы, оставьте свою заявку.<br/>Специалисты свяжутся с вами и помогут найти нужное для вас решение.</p>
                        <input type='text' className='leave-request__input' placeholder='Имя*'/>
                        <input type='text' className='leave-request__input' placeholder='Номер телефона*'/>
                        <input type='text' className='leave-request__input' placeholder='Почта*'/>
                        <textarea className='leave-request__input-area' placeholder='Вопрос*'/>
                        <label className='leave-request__checkbox-label'><input className='leave-request__checkbox' type='checkbox'/>Соглашаюсь с обработкой персональных данных*</label>
                        <button className='leave-request__button' type='submit'>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};