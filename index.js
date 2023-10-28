
// //? Örnek:1

const numbers = [1, -4, 12, 0, -3, 30, 42, -150];

function pozitifToplam(numbers) {
    let toplam = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            toplam += numbers[i];
        }
    }

    return toplam;
}

const pozitifSayilarinToplami = pozitifToplam(numbers);
console.log("Pozitif Sayıların Toplamı: " + pozitifSayilarinToplami);



// //? Örnek:2

const personName = "John Ronald Reuel Tolkien";

// İsmi boşluk karakterlerine göre böleriz.
const nameParts = personName.split(" ");

// İlk harfi alarak kısaltmayı oluştururuz.
const abbreviation = nameParts.map(part => part[0]).join("");

// İsim baş harflerini alarak oluştururuz.
const initials = nameParts.map(part => part[0]).join(" ");

console.log("Kısaltma: " + abbreviation);
console.log("Baş Harfler: " + initials);

//? Örnek:3 Notlar dizisinin toplamını gösteren uygulamayı yazınız.

const notlar = [20, 55, 100, 89, 32]
let toplam = 0
for (let i = 0; i < notlar.length; i++) {

    toplam += notlar[i]

}
console.log("TOPLAM:", toplam)

//? Örnek:4 //? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

// const ellidenKucukler = []
// const ellidenBuyukler = []
// for (let i = 0; i < notlar.length; i++)
//     notlar[i] < 50 ? ellidenKucukler.push(notlar[i]) : ellidenBuyukler.push(notlar[i])

// console.log(ellidenKucukler);
// console.log(ellidenBuyukler);
// console.log(notlar);

// //? Örnek: 5  notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz. Sorusunun for in ile çözümü

// const ellidenKucukler = []
// const ellidenBuyukler = []
// for (let i in notlar) {
//     if (notlar[i] < 50) {
//         ellidenKucukler.push(notlar[i])
//     } else {
//         ellidenBuyukler.push(notlar[i])
//     }
// }

// console.log(ellidenBuyukler)
// console.log(ellidenKucukler)
// console.log(notlar)

//? Örnek: 5  notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz. Sorusunun for on ile çözümü

const ellidenKucukler = []
const ellidenBuyukler = []

for (let not of notlar) {
    not < 50 ? ellidenKucukler.push(not) : ellidenBuyukler.push(not)
}

console.log(ellidenBuyukler);
console.log(ellidenKucukler);
console.log(notlar);

//? Örnek:6

//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const ogrenciBul = (ad) => {
    let sayac = 0
    for (let ogrenci of ogrenciler) {
        ogrenci === ad && sayac++
    }
    return sayac === 0
        ? `${ad}bulunamamiştir`
        : `${ad},${sayac}adet bulunmustur.`

    //?Alternatif cozum
    // if (sayac === 0) {
    //     return `${ad}bulunamamistir.`
    // } else {
    //     return `${ad},${sayac} adet bulunmustur.`
    // }

}
console.log(ogrenciBul("ahmet"));
console.log(ogrenciBul("mehmet"));
console.log(ogrenciBul("canan"));







