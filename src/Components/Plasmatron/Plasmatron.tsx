import './plasmatron.scss'
import 'swiper/css'
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectCoverflow, Navigation} from "swiper";
import {coating} from "../../Models/coating";
export const Plasmatron: React.FC = () => {
    SwiperCore.use([EffectCoverflow]);

    return (
        <div className='plasmatron' id='plasm'>
            <div className='plasmatron__container'>
                <div className='plasmatron__process'>
                    <p className='plasmatron__number'>1</p>
                    <h1 className='plasmatron__title'>Плазменное напыление</h1>
                    <h2 className='plasmatron__subtitle'>Описание процесса</h2>
                    <div className='plasmatron__body'>
                        <div className='plasmatron__text'>Плазменная наплавка –
                            это метод наложения износоустойчивого покрытия на рабочу поверхность.
                            Она повышает эксплуатационные характеристики поверхностей изделий,
                            придает деталям механизмов износостойкость, жаропрочность,
                            теплопроводность, кислотоупорность.
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
                            slidesPerView={3}
                        >
                            {coating.map((coat) =>
                                <SwiperSlide>
                                    <div className='plasmatron__coating-container'>
                                        <h3 className='plasmatron__coating-title'>{coat.title}</h3>
                                        <img
                                            className='plasmatron__coating-img'
                                            src={'/images/plasmatron/' + coat.img + '.svg'}
                                        />
                                    </div>
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
                        </Swiper>
                    </div>
                </div>


                <div className='plasmatron__works-completed'>
                    <h2 className='plasmatron__subtitle'>Акт выполненных работ</h2>
                    <div className='plasmatron__works-completed-body'>
                        <div className='plasmatron__works-completed-group'>
                            <div className='plasmatron__works-completed-item'>
                                <img
                                    className='plasmatron__works-completed-cubes'
                                    src='/images/plasmatron/cubes.svg'
                                />
                                <p>Компания</p>
                            </div>
                            <div className='plasmatron__works-completed-item'>
                                <img
                                    className='plasmatron__works-completed-cubes'
                                    src='/images/plasmatron/cubes.svg'
                                />
                                <p>Компания</p>
                            </div>
                        </div>
                        <div className='plasmatron__works-completed-group'>
                            <div className='plasmatron__works-completed-item'>
                                <img
                                    className='plasmatron__works-completed-cubes'
                                    src='/images/plasmatron/cubes.svg'
                                />
                                <p>Компания</p>
                            </div>
                            <div className='plasmatron__works-completed-item'>
                                <img
                                    className='plasmatron__works-completed-cubes'
                                    src='/images/plasmatron/cubes.svg'
                                />
                                <p>Компания</p>
                            </div>
                        </div>
                        <div className='plasmatron__works-completed-group'>
                            <div className='plasmatron__works-completed-item'>
                                <img
                                    className='plasmatron__works-completed-cubes'
                                    src='/images/plasmatron/cubes.svg'
                                />
                                <p>Компания</p>
                            </div>
                            <div className='plasmatron__works-completed-item'>
                                <img
                                    className='plasmatron__works-completed-cubes'
                                    src='/images/plasmatron/cubes.svg'
                                />
                                <p>Компания</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='plasmatron__craft' id='plasmatrons'>
                    <p className='plasmatron__number'>2</p>
                    <h1 className='plasmatron__title'>Разработка плазмотронов</h1>
                    {/* TODO: Сюда слайдер с плазматронами*/}
                    <div style={{color: "brown", fontWeight: 700, fontSize: '60px'}}> ЗДЕСЬ БУДЕТ СЛАЙДЕР</div>
                </div>

            </div>
        </div>
    );
};