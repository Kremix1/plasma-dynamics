import './footer.scss'

export const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__body'>
                    <div className='footer__body-group'>
                        <a href='/'><img className='footer__img' src='/images/footer/logo-gray.svg'/></a>
                        <p className='footer__text'>Проект создан в рамках федерального<br/>
                            проекта «Платформа университетского<br/>
                            технологического предпринимательства»</p>
                        <img className='footer__img-fond' src='/images/footer/fond.png'/>
                    </div>
                    <div className='footer__body-group'>
                        <a className='footer__link' href='#about'>О компании</a>
                        <a className='footer__link' href='#requests'>Услуги</a>
                        <a className='footer__link' href='#plasm'>Плазменное напыление</a>
                        <a className='footer__link' href='#plasmatrons'>Комплектующие</a>
                        <a className='footer__link' href='#contacts'>Контакты</a>
                    </div>
                    <div className='footer__body-group'>
                        <a href='tel:+79920143877'>
                            <img className='footer__phone-img' src='/images/footer/phone.svg'/>
                            <span className='footer__phone'>+7 (992) 014-38-77</span>
                        </a>
                        <a href='#send-request' className='footer__btn'>Оставить заявку</a>
                    </div>
                </div>
                <p className='footer__copyright'>Товарный знак © 2022 Plasma Dynamics – Авторское право сохранено.</p>
            </div>
        </div>
    );
};