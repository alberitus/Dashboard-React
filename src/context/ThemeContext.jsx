import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Ambil theme dari localStorage saat awal reload
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // Saat awal render → matikan transition
    useEffect(() => {
        document.body.classList.add("no-transition");

        // Terapkan tema sesuai localStorage
        document.body.classList.toggle("dark", theme === "dark");

        // Hapus no-transition setelah 50ms (memberi waktu browser render)
        setTimeout(() => {
            document.body.classList.remove("no-transition");
        }, 50);
    }, []); // hanya berjalan saat pertama kali load

    // Saat theme berubah, apply dan simpan
    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
