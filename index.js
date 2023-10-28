
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

//? Örnek:7 Dizideki her bir fiyatikonsola bastiriniz.
const prices = [250, 150, 300, 500]

//? for of
for (let price of prices) {
    console.log(price);
}

//? for Each (tek parametreli)
prices.forEach((p) => console.log(p * 1.1))

//? 3 parametreli forEach

prices.forEach((price, index) => console.log("DEGER:", price, "SIRA:", index))

//? prices'ın toplamını hesaplayiniz
let sum = 0
prices.forEach((price) => (sum += price))
console.log("SUM:", sum);

//? 3 parametreli forEach
//? callback func'da satir sayisi birden fazla olduğu için suslu kullandik.
//? foreEach metodu void function'dir yani bir sey dondurmez.

prices.forEach((p, i, arr) => {
    if (p < 270) {
        arr[i] = p * 1.1
    }
})
console.log(prices);

//? Örnek: 8 Bir dizideki tüm isimleri büyük harfe dönüştüren uygulamayı yaziniz.

const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const upperCasedNames = names.map((n) => n.toLocaleUpperCase())
console.log(upperCasedNames);
console.log(names);

//? Örnek 9: tlPrices dizisindeki rakamların Euro ve dolar kariliklarini hesaplatarak yeni dizelere kaydediniz.

const euro = 29.8
const dolar = 27.97

const tlPrices = [100, 150, 100, 50, 80]
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)))
console.log(dolarPrices);

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)))
console.log(euroPrices);

//? Örnek: 10 tlFiyatlar dizisindeki urunlere zam yapılmak isteniyor.Fiyatı 100 TL'den fazla olanlara %10 zam, 100 TL'den az olanlara ise %15 zam yapılmak isteniyor.Ayrıca zamlı olan yeni değerleri örnekteki gibi saklamak istiyoruz. Ürünlerin zamlı fiyatını gösteren uygulamayı yazınız.

const tlFiyatlar = [100, 70, 50, 120, 200]

const değerler = tlFiyatlar.map(function (d, i) {
    if (d > 100) {
        return `${i + 1}.Ürün Fiyatı:${(d * 1.1).toFixed(2)}`;
    } else {
        return `${i + 1}.Ürün Fiyatı:${(d * 1.15).toFixed(2)}`;
    }

});

console.log(değerler);

//? Örnek:10 Koorinatlar dizisindeki negatif koordinatları alıp yeni bir diziye saklayan uygulamayı .filter() ile yapınız.

const koordinatlar = [-100, 150, -32, 43, -20]

const eksiKoordinatlar = koordinatlar.filter((k) => k < 0);
console.log(eksiKoordinatlar);
console.log(koordinatlar);

//? Örnek:11 Maasi 10000'den büyük olanları  ayrı bir diziye saklayın.

const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const buyukOnbin = maaslar.filter((maas) => maas > 10000);

console.log(buyukOnbin, maaslar);

//? Örnek:12 Maasi 8000-10000 arasında olanları ayrı bir diziye saklayın.

const aradakiMaaslar = maaslar.filter((m) => m >= 8000 && m < 10000);
console.log(aradakiMaaslar);

//? Maasi 9000'den az olanlara %50 zam yaparak değerleri yeni diziye saklayalım.

const dokuzBindenAz = maaslar.filter((m) => m < 9000).map((m) => m * 1.5);
console.log(dokuzBindenAz);



