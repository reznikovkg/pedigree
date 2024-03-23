import { Person } from '@/types/person';

export function formatPersonName(person: Person, config: { access?: boolean; short?: boolean } = {}): string {
  const { access, short } = config;
  const parts = [];
  const { secondName, firstName, patronymicName } = person;

  // Добавление фамилии
  if (secondName) {
    if (access && person.access || short) {
      parts.push(secondName[0] + '.');
    } else {
      parts.push(secondName);
    }
  }

  // Добавление имени
  if (firstName) {
    if (access && person.access || short) {
      parts.push(firstName[0] + '.');
    } else {
      parts.push(firstName);
    }
  }

  // Добавление отчества
  if (patronymicName) {
    if (access && person.access || short) {
      parts.push(patronymicName[0] + '.');
    } else {
      parts.push(patronymicName);
    }
  }

  if (parts.length == 0) {
    return '-';
  }
  return parts.join(' ');
}
