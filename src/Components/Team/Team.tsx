import "./team.scss"
// @ts-ignore
import {teamPersons} from "../../Models/team.ts";

export const Team: React.FC = () => {
    return (
        <div className='team'>
            <div className='team__container'>
                <h1 className='team__title'>Наша команда</h1>
                <div className='team__body'>
                    {teamPersons.map((teamPerson: { photo: string; name: string; jobTitle: string}) =>
                        <div key={teamPerson.photo} className='team__item'>
                            <img className='team__photo' src={teamPerson.photo}/>
                            <p className='team__name'>{teamPerson.name}</p>
                            <p className='team__job-title'>{teamPerson.jobTitle}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};