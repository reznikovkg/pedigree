import { Person } from '@/types/person'

export const emptyPerson = (): Person => ({
  id: '', // id
  secondName: '', // Фамилия
  firstName: '', // Имя
  patronymicName: '', // Отчество
  birthDate: '', // Дата рождения
  dieDate: '', // Дата смерти
  gender: null, // Пол
  biography: '', // Биография
  activity: '', // Род деятельности
  photo: '', // Ссылка на фото
  children: [], // Массив id детей
  educations: [], // Образования
  weddings: [], // Брачные союзы
  works: [], // Работы
  militaries: [], // Служба,
  access: null
})
