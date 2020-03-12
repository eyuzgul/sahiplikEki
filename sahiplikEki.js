function sahiplikEki(str) {
    if(!str) return "";
    let kes = str ? str.slice(-5) : "";
    kes = kes.split("").reverse().join("");
    let bul = kes.match(/[aeıiİoöuü]/i);
    if(bul === null) return str + "'in"; // son 5 karakterde sesli harf yoksa default ( 'in )

    let ekler = !bul.index ? ["nın", "nin", "nun", "nün"] : ["ın", "in", "un", "ün"];
    let ek = '';
    switch (bul[0].toLocaleLowerCase()) {
        case "e": case "i": case "İ":
            ek = ekler[1];
            break;
        case "o": case "u":
            ek = ekler[2];
            break;
        case "ö": case "ü":
            ek = ekler[3];
            break;
        default:
            ek = ekler[0];
    }

    ek = str === str.toLocaleUpperCase() ? ek.toLocaleUpperCase() : ek;

    return `${str}'${ek}`;
}





