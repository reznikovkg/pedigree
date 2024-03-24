import CryptoJS from 'crypto-js';

export function decryptPersons(persons, token) {
  return persons.map((person) => {
      try {
        if (person.data){
          return JSON.parse(CryptoJS.AES.decrypt(person.data, token).toString(CryptoJS.enc.Utf8));
        }
        else return person
      }
      catch(e){
        return null
      }
    }).filter((i) => {
      return i != null
    });
}
