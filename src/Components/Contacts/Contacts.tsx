import './contacts.scss'
import {contacts} from "../../Models/contacts";

export const Contacts: React.FC = () => {
    return (
        <div className='contacts' id='contacts'>
            <div className='contacts__container'>
                <h1 className='contacts__title'>Контакты</h1>
                <div className='contacts__body'>
                    <div className='contacts__info'>
                        <div className='contacts__links'>
                            {contacts.map((contact: { name: string, img: string }) =>
                                <a className='contacts__link' key={contact.img} href='#'>
                                    <img className='contacts__img' src={'/images/contacts/' + contact.img + '.svg'}/>
                                    <p className='contacts__text'>{contact.name}</p>
                                </a>
                            )}
                        </div>
                        <div className='contacts__social'>
                            <a className='contacts__social-item' href='#'><img src='/images/contacts/vk.svg'/></a>
                            <a className='contacts__social-item' href='#'><img src='/images/contacts/telegram.svg'/></a>
                        </div>
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb8af4c611996ba7ee8c67ebbec1f6161a591e6f844aa3bb4e9c10cf870f2e76&amp;source=constructor"
                        width="554" height="300" frameBorder="0"></iframe>
                </div>
            </div>
        </div>
    );
};