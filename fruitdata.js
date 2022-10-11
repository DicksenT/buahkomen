const main = document.querySelector(".main");
let fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];
// fungsi untuk menyamaratakan string
const kap = (elem) => elem.map((fruit) =>{
    let buah = fruit.fruitName
    return buah.charAt(0).toUpperCase() + buah.slice(1).toLowerCase()
})
// Fungsi untuk mengeleminasi Value yang sama didalam Array
const dup = (elem) =>{
    return [...new Set(elem)]
}

let namaBuah = kap(fruits)
namaBuah = dup(namaBuah).join(', ')


// Wadah dan Isi
let impor = fruits.filter(fruit => fruit.fruitType === 'IMPORT')
let lokal = fruits.filter(fruit => fruit.fruitType === 'LOCAL')

let buahimpor = kap(impor)
buahimpor = dup(buahimpor).join(', ')

let buahlokal = kap(lokal)
buahlokal =dup(buahlokal).join(', ')

//Stock
const stok = (elem) => elem.map(stok => stok.stock).reduce((acc, val) => acc + val) 
const imporStock = stok(impor)
const localStock = stok(lokal)

//text
main.innerHTML = `<ol class="list">
    <li>Buah apa saja yang dimiliki Andi?
    <p>= ${namaBuah}</p></li>
    <br>
    <li>Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
    (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
    masing-masing wadah?
    <p>=Import(${buahimpor}), Local(${buahlokal})</p></li>
    <br>
    <li>Berapa total stock buah yang ada di masing-masing wadah?
    <p>=Import(${imporStock}), Local(${localStock})</p></li>
    <br>
    <li>Apakah ada komentar terkait kasus di atas?
    <p>1. terdapat 3 userID yang sama, bisa terjadi error</p>
    <p>2. terdapat nama buah yang sama</p>
    </li>
    </ol>`;

