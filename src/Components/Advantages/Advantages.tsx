import './advantages.scss'
import {advantages} from "../../Models/advantages";
import {useState} from "react";
import {AdvantageItem} from "./AdvantageItem/AdvantageItem";

export const Advantages: React.FC = () => {

    return (
        <div className='advantages' id='advantages'>
            <div className='advantages__container'>
                <h1 className='advantages__title'>Наши преимущества</h1>
                <div className='advantages__body'>
                    {advantages.map(advantage =>
                        <AdvantageItem advantage={advantage} />
                    )}
                </div>
            </div>
        </div>
    );
};