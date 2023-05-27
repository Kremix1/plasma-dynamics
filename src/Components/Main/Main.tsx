import './main.scss';
import {headerAnchors} from "../../Models/anchorModel";
import {useState} from "react";

export const Main: React.FC = () => {
    const [menu, setMenu] = useState('burger')
    const [menuOpen, setMenuOpen] = useState('main__links')

    const toggleMenu = () => {
        if (menu === 'burger'){
            setMenu('close')
            setMenuOpen('main__links-open')
        }

        else{
            setMenu('burger')
            setMenuOpen('main__links')
        }
    }

    return (
        <div className='main'>
            <div className='main__container'>
                <div className='main__header'>
                    <a href='/'>
                        <img className='main__img'  src='/images/header/logo.svg'/>
                    </a>
                    <div className={menuOpen}>
                        <div className='main__anchors'>
                            {headerAnchors.map((anchor: {title: string, link: string}) =>
                                <a key={anchor.link} href={anchor.link}>{anchor.title}</a>
                            )}
                        </div>

                        <a href='tel:+79920143877' className='main__phone'>
                            <div className='main__phone-img'></div>
                            <p>+7 (992) 014-38-77</p>
                        </a>
                    </div>
                    <img className='main__burger' src={'/images/header/' + menu + '.svg'} onClick={toggleMenu}/>
                </div>
                <div className='main__background'>
                    <h1 className='main__title'>Plasma Dynamics - лучшее решение для вас</h1>
                    <h2 className='main__subtitle'>Мы увеличим срок эксплуатации оборудования и снизим денежные затраты на его ремонт</h2>
                    <a href='#send-request' className='main__button'>Оставить заявку</a>
                </div>
            </div>
        </div>
    );
};
