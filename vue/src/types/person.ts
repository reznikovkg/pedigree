enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

type PersonId = string;
type Date = string;

interface Person {
  id: PersonId;
  secondName: string;
  firstName: string;
  patronymic: string;
  birth_date: Date;
  die_date: Date;
  gender: Gender;
  biography: string;
  activity: string;
  photo: string;
  children: PersonId[];
  educations: Education[]; 
  weddings: Wedding[];
  works: Work[]; 
  militaryServices: MilitaryService[];
}

interface Education {
  type: string;
  level: string;
  startDate: Date;
  endDate: Date;
  institutionName: string;
  institutionCity: string;
}

interface Wedding {
  partnerId: PersonId;
  date_start: Date;
  date_end: Date;
}

interface Work {
  countryCity: string;
  organization: string;
  dateStart: Date;
  dataEnd: Date;
  jobTitle: string;
  description: string;
}

interface MilitaryService {
  type: string;
  rank: string;
  date_start: Date;
  data_end: Date;
  description: string;
}
