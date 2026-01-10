// union & intersection type
type WebDeveloper = {
    skills:string[],
    title:'Frontend Developer' | 'Backend Developer'| 'Fakibaz Developer', // used union
    certificate:string,

}

type SoftwareEngeenier = {
    skills: string[]
    title2: 'Frotend Engeenier' | 'Backend Engeenier',
    certificate: string
}

type Deveops = WebDeveloper & SoftwareEngeenier // intersection

const Tarikul: WebDeveloper= {
skills:['java'],
title:'Frontend Developer',
certificate:'helelo world'
}