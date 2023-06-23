import './plasmatron.scss'
import 'swiper/css'
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from "swiper";
import {coating} from "../../Models/coating";
import {useEffect, useState} from "react";
import {plasmTech} from "../../Models/plasmTech";
import {CoatingItem} from "./CoatingItem";
export const Plasmatron: React.FC = () => {
    const [countOfSlides, setCountOfSides] = useState(3)

    const calculateCountOfSlides = () => {
        const globalWidth = window.innerWidth;
        if (globalWidth < 1150)
            setCountOfSides(2)
        if (globalWidth < 700)
            setCountOfSides(1)
    }

    useEffect(() => {
        calculateCountOfSlides()
    }, [])

    return (
        <div className='plasmatron' id='plasm'>
            <div className='plasmatron__container'>
                <div className='plasmatron__process'>
                    <p className='plasmatron__number'>1</p>
                    <h1 className='plasmatron__title'>Плазменное напыление</h1>
                    <h2 className='plasmatron__subtitle'>Описание процесса</h2>
                    <div className='plasmatron__body'>
                        <div className='plasmatron__text'>Плазменное напыление - это технология нанесения на поверхность изделий функциональных покрытий. Данный метод позволяет увеличить срок эксплуатации деталей, а также восстановить изношенное изделие. Плазменное напыление широко применяется для защиты от высокотемпературного износа, для защиты от коррозии, для упрочнения поверхности деталей, работающих при высоких нагрузках.
                        </div>
                        <img className='plasmatron__img' src='/images/plasmatron/plasmatron.svg'/>
                    </div>
                </div>


                <div className='plasmatron__coating'>
                    <h2 className='plasmatron__subtitle'>Виды покрытий</h2>
                    <div className='plasmatron__coating-swiper'>
                        <Swiper
                            navigation={true} modules={[Navigation]}
                            spaceBetween={45}
                            slidesPerView={countOfSlides}
                        >
                            {coating.map((coat) =>
                                <SwiperSlide>
                                    <CoatingItem coating={coat} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>


                <div className='plasmatron__cost'>
                    <h2 className='plasmatron__subtitle'>Ценообразование</h2>
                    <h3 className='plasmatron__subsubtitle'>Полная стоимость зависит от нексольких факторов:</h3>
                    <div className='plasmatron__cost-body'>
                        <div className='plasmatron__cost-item'>
                            <span className='plasmatron__cost-number'>1</span>
                            <p className='plasmatron__cost-desc'>Толщина покрытия
                                от 0.1 мм до 5 мм
                            </p>
                        </div>
                        <div className='plasmatron__cost-item-group'>
                            <div className='plasmatron__cost-item'>
                                <span className='plasmatron__cost-number'>2</span>
                                <p className='plasmatron__cost-desc'>Размер детали</p>
                            </div>
                            <div className='plasmatron__cost-item'>
                                <span className='plasmatron__cost-number'>3</span>
                                <p className='plasmatron__cost-desc'>Сложность геометрии</p>
                            </div>
                        </div>
                        <div className='plasmatron__cost-item'>
                            <span className='plasmatron__cost-number'>4</span>
                            <p className='plasmatron__cost-desc'>Стоимость 1 кг напыляемого материала</p>
                            <ul className='plasmatron__list'>
                                <li className='plasmatron__list-item'>Вид покрытия</li>
                                <li className='plasmatron__list-item'>Требования к покрытию</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='plasmatron__works'>
                    <h2 className='plasmatron__subtitle'>Примеры работ</h2>
                    <div className='plasmatron__swiper'>
                        <Swiper
                            navigation={true} modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <div className='works__container'>
                                    <h3 className='works__title'>Описание:</h3>
                                    <p className='works__text'>Нанесения износостойкого, жаростойкого и термобарьерного композитного покрытия на фурмы доменных печей для компании "НЛМК"</p>
                                    <div className='works__body'>
                                        <img
                                            className='works__img'
                                            src='/images/plasmatron/works-1.png'
                                        />
                                        <img
                                            className='works__img'
                                            src='/images/plasmatron/works-2.png'
                                        />
                                    </div>
                                    <h3 className='works__title works__title_result'>Результат:</h3>
                                    <p className='works__text'>Срок эксплуатации фурмы без покрытия 40 дней, с покрытием 240</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='works__container'>
                                    <h3 className='works__title'>Описание:</h3>
                                    <p className='works__text'>Нанесение антифрикционного покрытия на деталь гидрораспределителя</p>
                                    <div className='works__body'>
                                        <img
                                            className='works__img'
                                            src='/images/plasmatron/works-3.png'
                                        />
                                        <img
                                            className='works__img'
                                            src='/images/plasmatron/works-4.png'
                                        />
                                    </div>
                                    <h3 className='works__title works__title_result'>Результат:</h3>
                                    <p className='works__text'>Снижение коэффициента трения с 0,4 до 0,16 и увеличение срока эксплуатации в 2 раза</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='works__container'>
                                    <h3 className='works__title'>Описание:</h3>
                                    <p className='works__text'>Нанесение коррозионностойкого покрытия на авиационные детали для компании "Уральские Авиалинии"</p>
                                    <div className='works__body'>
                                        <img
                                            className='works__img'
                                            src='/images/plasmatron/works-5.png'
                                        />
                                        <img
                                            className='works__img'
                                            src='/images/plasmatron/works-6.png'
                                        />
                                    </div>
                                    <h3 className='works__title works__title_result'>Результат:</h3>
                                    <p className='works__text'>Покрытие проверено в камере солевого тумана в течение 764 часов и показала положительные результаты</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='works__container'>
                                    <h3 className='works__title'>Описание:</h3>
                                    <p className='works__text'>Нанесение антифрикционного покрытия на пневмоцилиндр для снижения коэффциента трения.</p>
                                    <div className='works__body'>
                                        <img
                                            className='works__img'
                                            src='/images/plasmatron/works-7.png'
                                        />
                                    </div>
                                    <h3 className='works__title works__title_result'>Результат:</h3>
                                    <p className='works__text'>Срок эксплуатации пневмоцилиндра увеличился в 2,5 раза</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>


                {/*<div className='plasmatron__works-completed'>*/}
                {/*    <h2 className='plasmatron__subtitle'>Акт выполненных работ</h2>*/}
                {/*    <div className='plasmatron__works-completed-body'>*/}
                {/*        <div className='plasmatron__works-completed-group'>*/}
                {/*            <div className='plasmatron__works-completed-item'>*/}
                {/*                <img*/}
                {/*                    className='plasmatron__works-completed-cubes'*/}
                {/*                    src='/images/plasmatron/cubes.svg'*/}
                {/*                />*/}
                {/*                <p>Компания</p>*/}
                {/*            </div>*/}
                {/*            <div className='plasmatron__works-completed-item'>*/}
                {/*                <img*/}
                {/*                    className='plasmatron__works-completed-cubes'*/}
                {/*                    src='/images/plasmatron/cubes.svg'*/}
                {/*                />*/}
                {/*                <p>Компания</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='plasmatron__works-completed-group'>*/}
                {/*            <div className='plasmatron__works-completed-item'>*/}
                {/*                <img*/}
                {/*                    className='plasmatron__works-completed-cubes'*/}
                {/*                    src='/images/plasmatron/cubes.svg'*/}
                {/*                />*/}
                {/*                <p>Компания</p>*/}
                {/*            </div>*/}
                {/*            <div className='plasmatron__works-completed-item'>*/}
                {/*                <img*/}
                {/*                    className='plasmatron__works-completed-cubes'*/}
                {/*                    src='/images/plasmatron/cubes.svg'*/}
                {/*                />*/}
                {/*                <p>Компания</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='plasmatron__works-completed-group'>*/}
                {/*            <div className='plasmatron__works-completed-item'>*/}
                {/*                <img*/}
                {/*                    className='plasmatron__works-completed-cubes'*/}
                {/*                    src='/images/plasmatron/cubes.svg'*/}
                {/*                />*/}
                {/*                <p>Компания</p>*/}
                {/*            </div>*/}
                {/*            <div className='plasmatron__works-completed-item'>*/}
                {/*                <img*/}
                {/*                    className='plasmatron__works-completed-cubes'*/}
                {/*                    src='/images/plasmatron/cubes.svg'*/}
                {/*                />*/}
                {/*                <p>Компания</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className='plasmatron__craft' id='plasmatrons'>
                    <p className='plasmatron__number'>2</p>
                    <h1 className='plasmatron__title'>Разработка плазмотронов</h1>
                    <h2 className='plasmatron__subtitle'>Комплект анод/катод для плазмотронов F4</h2>
                    <div className='plasm-tech__container'>
                        <div className='plasm-tech__body'>
                            <div className='plasm-tech__item plasm-tech__item_1'>
                                <h2 className='plasmatron__subtitle'>Анод</h2>
                                <div className='plasm-tech__img-group'>
                                    <img className='plasm-tech__img' src='/images/plasmatron/1.png'/>
                                    <img className='plasm-tech__img' src='/images/plasmatron/2.png'/>
                                    <img className='plasm-tech__img' src='/images/plasmatron/3.png'/>
                                </div>
                            </div>
                            <div className='plasm-tech__item plasm-tech__item_2'>
                                <h2 className='plasmatron__subtitle'>Катод</h2>
                                <div className='plasm-tech__img-group'>
                                    <img className='plasm-tech__img' src='/images/plasmatron/4.png'/>
                                    <img className='plasm-tech__img' src='/images/plasmatron/5.png'/>
                                </div>
                            </div>
                        </div>
                        <div className='plasm-tech__item plasm-tech__item_cost'>
                            <h2 className='plasmatron__subtitle'>Стоимость комплекта:</h2>
                            <h2 className='plasmatron__subtitle'>35 000 руб</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};