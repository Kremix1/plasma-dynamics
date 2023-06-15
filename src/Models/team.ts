export interface ITeam {
    photo: string,
    name: string,
    jobTitle: string
}

export const teamPersons: ITeam[] = [
    {
        photo: '/images/team/ilya.jpg',
        name: 'Илья Куклин',
        jobTitle: 'Ген. директор, Маркетинг, PR, GR'
    },
    {
        photo: '/images/team/aleksey.jpg',
        name: 'Алексей Идиятулин',
        jobTitle: 'Управление финансами, привлечение инвестиций, отчетность'
    },
    {
        photo: '/images/team/nikolay.jpg',
        name: 'Николай Барашев',
        jobTitle: 'Разработка продукта, модернизация продукта'
    },
]