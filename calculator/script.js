
const display = document.querySelector(".tampilan-kalkulator");
const buttons = document.querySelectorAll("button");

let expression = "";
let resultShown = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;

        // =========================
        // AC
        // =========================
        if (value === "AC") {
            expression = "";
            display.value = "0";
            resultShown = false;
            return;
        }

        // =========================
        // SAMA DENGAN
        // =========================
        if (value === "=") {
            if (expression === "") return;

            try {
                const calculation = expression
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                const result = Function(`"use strict"; return (${calculation})`)();

                display.value = result;
                expression = result.toString();
                resultShown = true;

            } catch {
                display.value = "Error";
                expression = "";
            }

            return;
        }

        // =========================
        // PLUS / MINUS
        // =========================
        if (value === "±") {
            if (expression === "") return;

            if (expression.startsWith("-")) {
                expression = expression.slice(1);
            } else {
                expression = "-" + expression;
            }

            display.value = expression;
            return;
        }

        // =========================
        // PERCENT
        // =========================
        if (value === "%") {
            if (expression === "") return;

            try {
                const calculation = expression
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                const result = Function(`"use strict"; return (${calculation})`)();

                expression = (result / 100).toString();
                display.value = expression;

            } catch {
                display.value = "Error";
                expression = "";
            }

            return;
        }

        // =========================
        // ANGKA / OPERATOR
        // =========================

        // Kalau sebelumnya sudah menghasilkan result
        // dan user menekan angka, mulai angka baru
        if (resultShown && !isNaN(value)) {
            expression = "";
            resultShown = false;
        }

        expression += value;

        // Ubah operator ASCII menjadi simbol
        display.value = expression
            .replace(/\*/g, "×")
            .replace(/\//g, "÷")
            .replace(/-/g, "−");
    });
});

