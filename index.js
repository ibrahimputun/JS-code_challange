
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






