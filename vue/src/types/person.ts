enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

type PersonId = string;
type DateString = string;

interface Person {
  id: PersonId; // id
  secondName: string; // Фамилия
  firstName: string; // Имя
  patronymicName: string; // Отчество
  birthDate: DateString; // Дата рождения
  dieDate: DateString; // Дата смерти
  gender: GENDER; // Пол
  biography: string; // Биография
  activity: string; // Род деятельности
  photo: string; // Ссылка на фото
  children: PersonId[]; // Массив id детей
  educations: Education[]; // Образования
  weddings: Wedding[]; // Брачные союзы
  works: Work[]; // Работы
  militaryServices: MilitaryService[]; // Служба
}

interface Education {
  type: string; // Тип образования
  level: string; // Уровень образования
  startDate: DateString; // Дата начала обучения
  endDate: DateString; // Дата завершения обучения
  name: string; // Полное название образовательного учреждения
  city: string; // Город
}

interface Wedding {
  partnerId: PersonId; // id партнера
  startDate: DateString; // Дата заключения договора
  endDate: DateString; // Дата расторжения брака
}

interface Work {
  place: string; // Страна, город
  organization: string; // Полное название организации
  startDate: DateString; // Дата начала работы
  endDate: DateString; // Дата увольнения
  position: string; // Должность
  description: string; // Описание
}

interface MilitaryService {
  type: string; // Тип службы
  rank: string; // Звание, должность
  startDate: DateString; // Дата начала службы
  endDate: DateString; // Дата завершения службы
  description: string; // Описание
}
