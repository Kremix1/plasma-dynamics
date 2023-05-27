import "./customers.scss"
// @ts-ignore
import {customers} from "../../Models/customers.ts";
import { Key } from "react";

export const Customers: React.FC = () => {
    return (
        <div className='customers'>
            <div className='customers__container'>
                <h1 className='customers__title'>Наши заказчики</h1>
                <div className='customers__body'>
                    {customers.map((customer: string) =>
                        <img  key={customer} className='customers__img' src={customer}/>
                    )}
                </div>
            </div>
        </div>
    );
};