import { Person } from '@/types/person';

export function maskFio(str: string): string {
  if (!str || str.length === 0) {
    return str;
  }
  return str[0] + '.';
}

export function formatPersonName(person: Person, config: { access?: boolean; short?: boolean;} = {}): string {
  const { access, short } = config;
  const parts = [];
  const { secondName, firstName, patronymicName } = person;

  // Добавление фамилии
  if (secondName) {
    if (access && person.access) {
      parts.push(access ? maskFio(secondName) : secondName[0] + '.');
    } else {
      parts.push(secondName);
    }
  }

  // Добавление имени
  if (firstName) {
    if (access && person.access || short) {
      parts.push(access ? maskFio(firstName) : firstName[0] + '.');
    } else {
      parts.push(firstName);
    }
  }

  // Добавление отчества
  if (patronymicName) {
    if (access && person.access || short) {
      parts.push(access ? maskFio(patronymicName) : patronymicName[0] + '.');
    } else {
      parts.push(patronymicName);
    }
  }

  if (parts.length == 0) {
    return '-';
  }
  return parts.join(' ');
}