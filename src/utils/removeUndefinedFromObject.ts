
export const removeUndefinedFromObject = (obj: { [key: string]: any }) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === undefined) {
          delete obj[key];
        }
    });
    return obj;
}


