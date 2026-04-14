let nama = document.getElementById("nama");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("Keterangan");

console.log(nama.value);
console.log(jumlah.value);
console.log(keterangan.value);

function simpan() {

    console.log(nama.value);
    console.log(jumlah.value);
    console.log(keterangan.value);

    if (localStorage.getItem("belanja") === null) {
        localStorage.setItem("belanja", "[]")
    }

    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data);


    data.push({
        nama: nama.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })

    console.log(data);

    localStorage.setItem("belanja", JSON.stringify(data))

    tampil();
}

function tampil() {
    let hasil = JSON.parse(localStorage.getItem("belanja"))

    document.getElementById("list-belanja").innerHTML = ""

    hasil.forEach(element => {
        console.log(element);
        
        document.getElementById("list-belanja").innerHTML += `
        <div  class="col-lg-4 col-md-6 mb-5"> 
            <div class="card p-2 mt-4">
                <div class="card-body">
                    <h4 class="text-primary">${element.nama}</h4> 
                    <h6 class="text-danger">${element.jumlah}</h6>
                    <h6 class="text-secondary">${element.keterangan}</h6>
                </div>
            </div>
        </div>
        
        `

    });
}

tampil();

