import {ICoating} from "../../Models/coating";
import {useEffect, useState} from "react";
import './plasmatron.scss';
import { isMobile } from 'react-device-detect';

interface ICoatingItem {
    coating: ICoating
}

export const CoatingItem: React.FC<ICoatingItem> = ({coating}: ICoatingItem) => {
    const [description, setDescription] = useState(false)
    useEffect(() => {
        if(window.screen.width < 1024) {

        }
    }, [])

    if(isMobile) {
        return (
            <>
                {!description &&
					<div className='plasmatron__coating-container'
						 onClick={() => setDescription(prev => !prev)}>
						<h3 className='plasmatron__coating-title'>{coating.title}</h3>
						<img
							className='plasmatron__coating-img'
							src={'/images/plasmatron/' + coating.img + '.svg'}
						/>
					</div>
                }
                {description &&
					<div className='plasmatron__coating-on-container'
						 onClick={() => setDescription(prev => !prev)}>
                    <h3 className='plasmatron__coating-title'>{coating.title}</h3>
						<span className='plasmatron__coating-desc'>{coating.desc}</span>
					</div>
                }
            </>

        );
    } else {
        return (
            <>
                {!description &&
					<div className='plasmatron__coating-container'
						 onMouseEnter={() => setDescription(true)}
						 onMouseLeave={() => setDescription(false)}>
						<h3 className='plasmatron__coating-title'>{coating.title}</h3>
						<img
							className='plasmatron__coating-img'
							src={'/images/plasmatron/' + coating.img + '.svg'}
						/>
					</div>
                }
                {description &&
					<div className='plasmatron__coating-on-container'
						 onMouseEnter={() => setDescription(true)}
						 onMouseLeave={() => setDescription(false)}>
						<h3 className='plasmatron__coating-title'>{coating.title}</h3>
						<span className='plasmatron__coating-desc'>{coating.desc}</span>
					</div>
                }
            </>

        );
    }
};