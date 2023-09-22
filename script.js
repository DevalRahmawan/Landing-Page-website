// Function untuk membaca isi input dari form
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return { name, city, email, zipCode, status };
}

// Function untuk memeriksa apakah input zip-code berisi hanya angka
function isNumber(str) {
    return !isNaN(str);
}

// Function untuk melakukan validasi data form
function validateFormData(data) {
    if (
        data &&
        data.name.trim() !== "" &&
        data.city.trim() !== "" &&
        data.email.trim() !== "" &&
        isNumber(data.zipCode) &&
        data.status
    ) {
        return true;
    }
    return false;
}

// Function untuk menampilkan pesan peringatan jika validasi gagal
function submit(event) {
    event.preventDefault(); // Mencegah refresh halaman saat form disubmit
    const formData = handleGetFormData();

    if (!validateFormData(formData)) {
        document.getElementById("warning").textContent = "Periksa form Anda sekali lagi.";
    } else {
        document.getElementById("warning").textContent = ""; // Menghapus pesan peringatan jika valid
        // Lakukan tindakan lainnya jika form valid
        alert("Form berhasil disubmit!");
    }
}

// Menambahkan event listener untuk form submission
const form = document.getElementById("myForm");
form.addEventListener("submit", submit);
