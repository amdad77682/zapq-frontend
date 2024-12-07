export const objectToURL = (object: any) => {
    const str = [];
    for (const p in object)
        if (object.hasOwnProperty(p) && object[p]) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]));
        }

    return str.join("&");

    // return queryParam;
};