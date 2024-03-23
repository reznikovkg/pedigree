import { Person } from '@/types/person';

export function maskFio(str: string): string {
  if (!str || str.length === 0) {
    return str;
  }
  return str[0] + '.';
}

export function formatPersonName(person: Person, config: { access?: boolean; short?: boolean; mask?: boolean } = {}): string {
  const { access, short, mask } = config;
  const parts = [];
  const { secondName, firstName, patronymicName } = person;

  // Добавление фамилии
  if (secondName) {
    if (access && person.access || short) {
      parts.push(mask ? maskFio(secondName) : secondName[0] + '.');
    } else {
      parts.push(secondName);
    }
  }

  // Добавление имени
  if (firstName) {
    if (access && person.access || short) {
      parts.push(mask ? maskFio(firstName) : firstName[0] + '.');
    } else {
      parts.push(firstName);
    }
  }

  // Добавление отчества
  if (patronymicName) {
    if (access && person.access || short) {
      parts.push(mask ? maskFio(patronymicName) : patronymicName[0] + '.');
    } else {
      parts.push(patronymicName);
    }
  }

  if (parts.length == 0) {
    return '-';
  }
  return parts.join(' ');
}