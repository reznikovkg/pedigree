export function maskDatetime(str){
    if (!str){
      return str
    }
    const splitted = str.split('.')
    if (splitted.length == 3){
        return str.split('.')[2];
    }
    else {
        return str
    }
}

export const defaultImage = require('@/assets/photo-default.jpg')
