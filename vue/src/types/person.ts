enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
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
  educations: Education[]; 
  weddings: Wedding[];
  works: Work[]; 
  militaryServices: MilitaryService[];
}

interface Education {
  type: string;
  level: string;
  startDate: string;
  endDate: string;
  institutionName: string;
  institutionCity: string;
}

interface Wedding {
  partner: string;
  date_start: string;
  date_end: string;
}

interface Work {
  countryCity: string;
  organization: string;
  dateStart: string;
  dataEnd: string;
  jobTitle: string;
  description: string;
}

interface MilitaryService {
  type: string;
  rank: string;
  date_start: string;
  data_end: string;
  description: string;
}