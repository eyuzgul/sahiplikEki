# sahiplikEki() ve sahiplikEki2()
JavaScript ile sahiplik eki takısı ekleyen fonksiyonlarım

### Test sahiplikEki()
```javascript
const isimler = [
    "ALİ","HALI","HATİCE","ARZU","OSLO","ÖHÖ","ÜTÜ","YAYA","YANGIN","GELİR",
    "ayla","gülay","mart","hatice","senem","bülent","veli","selin","misk","halı","hatır","langırt",
    "alo","kol","host","öhö","göz","höst","rüzgargülü","gülengül","büst","tabu","marpuç","kulp"
];


for(let x of isimler) {
    console.log(sahiplikEki(x));
}

```


### Test sahiplikEki2()
```javascript
const isimler = [
    "ALİ","HALI","HATİCE","ARZU","OSLO","ÖHÖ","ÜTÜ","YAYA","YANGIN","GELİR",null,undefined,true,false,0,"0","",
    "ayla","gülay","mart","hatice","senem","bülent","veli","selin","misk","halı","hatır","langırt",
    "alo","kol","host","öhö","göz","höst","rüzgargülü","gülengül","büst","tabu","marpuç","kulp"
];


for(let x of isimler) {
    console.log(sahiplikEki2(x));
}
```
