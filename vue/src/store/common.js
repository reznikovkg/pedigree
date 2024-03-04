export const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
    
export const genHash = (length = 32) => {
    let hash = "";
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      hash += chars[randomInteger(0, chars.length-1)]
    }
    return hash + Date.now();
}
  
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
  
export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
    