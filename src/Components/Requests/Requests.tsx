import './requests.scss'

export const Requests: React.FC = () => {
    return (
        <div className='requests' id='requests'>
            <div className='requests__container'>
                <h1 className='requests__title'>Наши предложения</h1>
                <div className='requests__body'>
                    <div className='requests__item'>
                        <div className='requests__number'>1</div>
                        <h2 className='requests__item-title'>Плазменное напыление</h2>
                        <p className='requests__item-subtitle'>Плазменное напыление - это метод нанесения функционального покрытия на поверхность изделия. Такой способ повышает эксплуатационные характеристики деталей и улучшает их физико-химические характеристики: износостойкость, жаропрочность, теплопроводность, коррозионностойкость.
                        </p>
                    </div>
                    <div className='requests__item'>
                        <div className='requests__number'>2</div>
                        <h2 className='requests__item-title'>Продажа  комплектующих для плазмотронов</h2>
                        <p className='requests__item-subtitle'>Осуществляется продажа комплектующих
                            и расходных материалов для плазмотрона:
                            сопла, катоды, насадки, вихревые кольца  и другое.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};