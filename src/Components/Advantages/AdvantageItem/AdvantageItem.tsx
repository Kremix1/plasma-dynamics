import {useState} from "react";
import {IAdvantages} from "../../../Models/advantages";
import { isMobile } from 'react-device-detect';

interface IAdvantageItem {
    advantage: IAdvantages
}

export const AdvantageItem: React.FC<IAdvantageItem> = ({advantage}: IAdvantageItem) => {
    const [description, setDescription] = useState(false)

    if(isMobile) {
        return (
            <div className='advantages__item'
                 onClick={() => setDescription(prev => !prev)}>
                {!description &&
					<div className='advantages__item-wrapper'>
						<img className='advantages__img' src={'/images/advantages/' + advantage.img + '.svg'}/>
						<p className='advantages__text'>{advantage.title}</p>
					</div>
                }
                {description &&
					<div className='advantages__item-on-wrapper'>
						<p className='advantages__desc'>{advantage.desc}</p>
					</div>
                }
            </div>
        );
    } else {
        return (
            <div className='advantages__item'
                 onMouseEnter={() => setDescription(true)}
                 onMouseLeave={() => setDescription(false)}>
                {!description &&
					<div className='advantages__item-wrapper'>
						<img className='advantages__img' src={'/images/advantages/' + advantage.img + '.svg'}/>
						<p className='advantages__text'>{advantage.title}</p>
					</div>
                }
                {description &&
					<div className='advantages__item-on-wrapper'>
						<p className='advantages__desc'>{advantage.desc}</p>
					</div>
                }
            </div>
        );
    }
};