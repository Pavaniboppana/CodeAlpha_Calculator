document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    let string = "";
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerHTML;

            if (value === "=") {
                try {
                    string = eval(string) || "";
                } catch {
                    string = "Error";
                }
                input.value = string;
            } else if (value === "AC") {
                string = "";
                input.value = "0";
            } else if (value === "DEL") {
                string = string.slice(0, -1);
                input.value = string || "0";
            } else {
                if (input.value === "0" || input.value === "Error") {
                    string = value;
                } else {
                    string += value;
                }
                input.value = string;
            }
        });
    });
});
