document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    // Mengambil nilai suhu dan satuan dari input
    const temp = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    // Variabel untuk menyimpan hasil konversi
    let celsius, fahrenheit, reaumur, kelvin;

    // Menghitung nilai berdasarkan satuan yang dipilih
    if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        reaumur = temp * 4/5;
        kelvin = temp + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        reaumur = (temp - 32) * 4/9;
        kelvin = (temp - 32) * 5/9 + 273.15;
    } else if (unit === "reamur") {
        celsius = temp * 5/4;
        fahrenheit = (temp * 9/4) + 32;
        reaumur = temp;
        kelvin = (temp * 5/4) + 273.15;
    } else if (unit === "kelvin") {
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        reaumur = (temp - 273.15) * 4/5;
        kelvin = temp;
    }

    // Menampilkan hasil konversi di halaman
    document.getElementById("resultCelsius").textContent = celsius.toFixed(2);
    document.getElementById("resultFahrenheit").textContent = fahrenheit.toFixed(2);
    document.getElementById("resultReaumur").textContent = reaumur.toFixed(2);
    document.getElementById("resultKelvin").textContent = kelvin.toFixed(2);
}
