export default function objectToFormData(obj, form, namespace) {
    const formData = form || new FormData();
    let formKey;
  
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (namespace) {
          formKey = namespace + '[' + property + ']';
        } else {
          formKey = property;
        }
        if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          objectToFormData(obj[property], formData, formKey);
        } else if (obj[property] instanceof File) {
            formData.append(formKey, obj[property]);
          } else {
            formData.append(formKey, obj[property]);
          }
      }
    }
    return formData;
  }