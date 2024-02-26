export const addPhoto = (e, setPhoto) => {
    if (e) {
      const image = e.target?.files?.[0];
      const reader = new FileReader();
  
      reader.addEventListener("load", () => {
        setPhoto(reader.result);
      });
  
      if (image) {
        reader.readAsDataURL(image);
      }
    }
  };
  
  export const formatDateStr = (dateStr) => {
    if (!dateStr) return "";
  
    return new Date(dateStr).toLocaleString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
  };