function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Wynik: Błąd (podaj poprawne liczby)";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = "Wynik: Błąd (dzielenie przez zero)";
                return;
            }
            result = num1 / num2;
            break;
    }

    resultElement.textContent = "Wynik: " + result;
}


// --- NOWE FUNKCJE DO ZMIANY TEMATU ---

/**
 * Przełącza motyw strony (jasny/ciemny) i zapisuje preferencje.
 */
function toggleTheme() {
    // Odwołujemy się do elementu <body>, który ma ID 'theme-root' lub po prostu do body
    const bodyElement = document.body; 
    
    // Przełącza klasę 'dark-mode'
    bodyElement.classList.toggle('dark-mode');

    // Zapisuje preferencje użytkownika w pamięci przeglądarki
    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

/**
 * Ładuje preferowany motyw użytkownika przy starcie strony.
 */
function loadTheme() {
    const bodyElement = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        // Jeśli zapisano 'dark', dodaj klasę
        bodyElement.classList.add('dark-mode');
    } 
    // W przeciwnym razie pozostaje domyślny (jasny)
}

// Wywołaj funkcję ładowania motywu, gdy dokument HTML zostanie w pełni załadowany.
// Dzięki temu strona od razu załaduje się z poprawnym motywem.
document.addEventListener('DOMContentLoaded', loadTheme);
