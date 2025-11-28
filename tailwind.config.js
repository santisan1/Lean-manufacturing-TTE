/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Rutas de escaneo de Next.js para tus archivos
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // Asegúrate de incluir los plugins que ya tienes instalados
        require('tailwindcss-animate'),
        // Agrega otros plugins si es necesario
    ],
};