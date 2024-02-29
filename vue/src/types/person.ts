enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

type PersonId = string;
type Date = string;

interface Person {
  id: PersonId;
  secondName: string;                  // Фамилия
  firstName: string;                   // Имя
  patronymic: string;                  // Отчество
  birth_date: Date;                    // Дата рождения
  die_date: Date;                      // Дата смерти
  gender: Gender;                      // Пол
  biography: string;                   // Биография
  activity: string;                    // Род деятельности
  photo: string;                       // Ссылка на фото
  children: PersonId[];                // Массив id детей
  educations: Education[];             // Образования
  weddings: Wedding[];                 // Брачные союзы
  works: Work[];                       // Работы
  militaryServices: MilitaryService[]; // Служба
}

interface Education {
  type: string;            // Тип образования
  level: string;           // Уровень образования
  startDate: Date;         // Дата начала обучения
  endDate: Date;           // Дата завершения обучения
  institutionName: string; // Полное название образовательного учреждения
  institutionCity: string; // Город
}

interface Wedding {
  partnerId: PersonId; // Ссылка на партнера
  date_start: Date;    // Дата заключения договора
  date_end: Date;      // Дата расторжения брака
}

interface Work {
  countryCity: string;  // Город
  organization: string; // Полное название организации
  dateStart: Date;      // Дата начала работы
  dataEnd: Date;        // Дата увольнения
  jobTitle: string;     // Должность
  description: string;  // Описание
}

interface MilitaryService {
  type: string;        // Тип службы
  rank: string;        // Звание, должность
  date_start: Date;    // Дата начала службы
  data_end: Date;      // Дата завершения службы
  description: string; // Описание
}
