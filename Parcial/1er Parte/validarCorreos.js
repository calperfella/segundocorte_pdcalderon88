// Función arrow para validar correos
const validarCorreos = () => {
    const emailInput = document.getElementById('emailInput').value;
    const validEmails = [];
    const invalidEmails = [];

    // Dividir la cadena por cualquier combinación de delimitadores
    const correos = emailInput.split(/[\s,;<>]+/);

    // Expresión regular para validar correos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar cada correo
    correos.forEach(correo => {
        if (emailRegex.test(correo.trim())) {
            validEmails.push(correo.trim());
        } else {
            invalidEmails.push(correo.trim());
        }
    });

    // Mostrar los resultados
    document.getElementById('validEmails').value = validEmails.join('; ');
    document.getElementById('invalidEmails').value = invalidEmails.join('; ');
};

// Evento del botón "Enviar"
document.getElementById('submitButton').addEventListener('click', validarCorreos);
