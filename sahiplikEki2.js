function sahiplikEki2(str) {
    if(!str || typeof str !== "string") return "";
    let kes = str ? str.slice(-5) : "";
    kes = kes.split("").reverse().join("").toLocaleLowerCase();
    let bul = kes.match(/[aeıiİoöuü]/i);
    if(bul === null) return "";
    
    let ekler = {"a":"ın","e":"in","ı":"ın","i":"in","o":"un","u":"un","ö":"ün","ü":"ün","İ":"in"}
    let ek = ekler[bul[0]];
    ek = bul.index ? ek : "n" + ek;
    ek = str === str.toLocaleUpperCase() ? ek.toLocaleUpperCase() : ek;

    return `${str}'${ek}`;
}
