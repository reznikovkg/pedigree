export function mask_fio(str){
  if (!str || str.length === 0){
    return str
  }
  return str[0] + '.'
}

export function mask_datetime(str){
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

export const default_image = require('@/assets/photo-default.jpg')