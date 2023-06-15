import './about.scss'

export const About: React.FC = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>
                <h1 className='about__title'>О компании</h1>
                <div className='about__body'>
                    <div className='about__text'>Plasma Dynamics - это компания специализирующаяся на плазменных методах напыления функциональных покрытий на детали машин.
                        <br/><br/>
                        Мы предлагаем индивидуальный подход к каждому проекту, чтобы удовлетворить потребности и требования клиента. Наша компания гарантирует высокое качество работы и соблюдение всех необходимых стандартов и нормативов.
                        <br/><br/>
                        Наша цель – помочь вам увеличить срок эксплуатации вашего оборудования и снизить денежные затраты на его ремонт.
                    </div>
                    <img className='about__img' src='/images/about/plasmatron.png' />
                </div>
            </div>
        </div>
    );
};