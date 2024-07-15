const nama = "payuh";
let usia = 3;
// console.log('nama saya adalah', nama, 'usia saya adalah', usia);
// console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    } else if (usia >= 30) {
        generasi = "generasi setelah dewasa";
    } else if (usia > 2 && usia < 10)  {
        generasi = "generasi anak-anak";
    } else {
        generasi = "generasi bayi";
    }

    return biodata.innerHTML = generasi;
    
}

console.log(nama);
console.log(usia);

generateBiodata();