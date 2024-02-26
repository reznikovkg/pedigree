
enum Gender {
    Male = "male",
    Female = "female"
}

interface Person {
    id: string;
    secondName: string;
    firstName: string;
    patronymic: string;
    birth_date: string;
    die_date: string;
    gender: Gender;
    children: string[];
    biography: string;
    activity: string;
    photo: string;
}

interface EducationPerson extends Person {
    type: string;
    level: string;
    startDate: string;
    endDate: string;
    institutionName: string;
    institutionCity: string;
}

interface WeddingPerson extends Person {
    partner: string;
    date_start: string;
    date_end: string;
}

interface WorkPerson extends Person {
    country_city: string;
    organization: string;
    date_start: string;
    data_end: string;
    job_title: string;
    description: string;
}

interface MilitaryPerson extends Person {
    type: string;
    rank: string;
    date_start: string;
    data_end: string;
    description: string;
}