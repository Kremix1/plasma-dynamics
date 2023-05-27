import './about.scss'

export const About: React.FC = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>
                <h1 className='about__title'>О компании</h1>
                <div className='about__body'>
                    <div className='about__text'>Plasma Dynamics – это молодая компания с большим научно-техническим опытом и энтузиазмом в работе.
                        Мы используем наши лучшие эксклюзивные технологии и проверенные решения как в области разработки оборудования,
                        так и в сфере оказания услуг по нанесению функциональных покрытий.<br/><br/>
                        Усилия компании направлены на повышение надежности, долговечности и конкурентоспособности деталей машин,
                        инструмента и технологической оснастки, которые используются в сфере производства,
                        эксплуатации и технического обслуживания.
                    </div>
                    <img className='about__img' src='/images/about/plasmatron.png' />
                </div>
            </div>
        </div>
    );
};