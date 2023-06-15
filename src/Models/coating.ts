export interface ICoating {
    title: string,
    img: string,
    desc: string,
}

export const coating: ICoating[] =[
    {
        title: 'Жаростойкое',
        img: 'temp',
        desc: 'Нанесение жаростойкого покрытия с целью увеличения срока службы детал при температуре свыше 1200 ° С.'
    },
    {
        title: 'Антифрикционное',
        img: 'friqc',
        desc: 'Нанесение покрытий, обладающих низким коэффициентом трения'
    },
    {
        title: 'Антикоррозионное',
        img: 'corrosive',
        desc: 'Широко применяется для защиты деталей от атмосферной коррозии и от разрушительного действия агрессивных сред',
    },
    // {
    //     title: 'Уплотнительное',
    //     img: 'sealant'
    // },
    // {
    //     title: 'Износостойкое',
    //     img: 'wearproof'
    // },
    {
        title: 'Электроизоляционное',
        img: 'electricalinsulating',
        desc: 'Используют для создания изоляционного покрытия на различных электропроводящих поверхностях'
    },
    {
        title: 'Термобарьерное',
        img: 'thermalbarrier',
        desc: 'Применяется для изолирования деталей, работающих при повышенных температурах'
    },
    // {
    //     title: 'Декоративное',
    //     img: 'decorative'
    // }
]