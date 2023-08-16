"use strict";

// temperature converter
const inputFahrenheit = document.getElementById("inputFahrenheit");
const inputCelsius = document.getElementById("inputCelsius");
const inputKelvin = document.getElementById("inputKelvin");

function fahrenheitConverter(value) {
    inputCelsius.value = ((value - 32) / 1.8).toFixed(2); // ℃=(℉-32)/1.8
    inputKelvin.value = ((value - 32) / 1.8 + 273.15).toFixed(2); // K=((℉-32)/1.8)+273.15
}

function celsiusConverter(value) {
    inputFahrenheit.value = (value * 1.8 + 32).toFixed(2); // ℉=(℃*1.8)+32
    inputKelvin.value = (Number(value) + 273.15).toFixed(2); // K=℃+273.15
}

function kelvinConverter(value) {
    inputFahrenheit.value = ((value - 273.15) * 1.8 + 32).toFixed(2); // ℉=((K-273.15)*1.8)+32
    inputCelsius.value = (value - 273.15).toFixed(2); // ℃=K-273.15
}

// loader
$(window).on("load", () => {
    $("body").css(
        "overflow",
        "hidden",
        setTimeout(() => {
            $("body").css("overflow-y", "visible");
        }, 1000)
    );
    setTimeout(removeLoader, 1000);
});

function removeLoader() {
    $("#loadingDiv").fadeOut(1000, () => {
        $("#loadingDiv").remove();
    });
}