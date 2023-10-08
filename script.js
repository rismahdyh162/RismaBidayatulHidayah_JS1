//if else statement
function testNum(a) {
  let result;
  if (a > 0) {
    // jika a lebih dari 0 maka hasilnya positif jika minus maka tidak positif
    result = "pintar";
  } else {
    result = "tidak pintar";
  }
  return result;
}
//disini diisi dengan (1) dan hasil outputnya adalah pintar
//jika diisi minus maka hasilnya tidak pintar
document.getElementById("demo").innerHTML = testNum(1);

//nested if
function testAge(age) {
  if (age < 18) {
    result = "Seorang pencari kerja <br> kamu sudah cukup umur"; // jika umurnya kurang dari 18
  } else {
    if (age >= 18 && age <= 30) {
      result = "kamu cukup umur dan cekatan <br> kamu diterima kerja"; //jika umurnya lebih dari 18 dan kurang dari 30
    } else {
      result = "kamu belum cukup umur <br> kamu bisa coba lagi tahun depan!"; //jika umurnya kurang dari 18
    }
  }
  return result;
}
document.getElementById("demo2").innerHTML = testAge(20); // hasilnya jika umurnya 20 tahun

//switchcase
function yourHead(selamat) {
  switch (selamat) {
    case "ulangtahun":
      result = "selamat hari kelahiran"; //case kesatu
      break;
    case "berlibur":
      result = "selamat berlibur"; // case kedua
      break;
    default:
      result = "Anda tidak sedang ulang tahun dan berlibur"; // case jika tidak terisi maka mengembalikan deafult
      break;
  }
  return result;
}
document.getElementById("demo3").innerHTML = yourHead("pacar"); // hasilnya jika saya memilih pacar

// for statement (loop)

const buah = ["apel", "pir", "anggur", "jeruk"];
let i = 2; //mengambil buah dari nilai 2 yaitu jeruk
let len = buah.length;
let makan = "";
for (; i < len; ) {
  makan += buah[i + ""] + "<br>";
  i++; // i akan start dari 2 dan akhir dari buah
}
document.getElementById("demo4").innerHTML = makan; //result dari statement

//while
const siswa = ["bagus", "adi", "setyo", "dodi"];
let text = "";
let j = 0; // j dimulai dari 0
while (j < siswa.length) {
  text += siswa[j] + "<br>";
  j++; //j akan bertambah hingga siswa selesai
}
document.getElementById("demo5").innerHTML = text; // result dari while

//do while
let clas = "";
let b = 0; //b dimulai dari 0 hingga loop while sampai angka 5
do {
  clas += b + "<br>";
  b++;
} while (b < 16); //ini adalah yang di loop oleh f
document.getElementById("demo6").innerHTML = clas;

//function
const myFunction = new Function("a", "b", "return a - b"); // function merubah objek a & b kemudian mereturn dalam bentuk yang telah ditentukan
document.getElementById("demo7").innerHTML = myFunction(16, 7); // hasil dari 16-7