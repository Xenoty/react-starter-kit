import { useCallback, useEffect, useState } from "react";

const useTheme = () => {
    const setTheme = (isLight: boolean) => document.body.setAttribute('data-bs-theme', isLight ? 'light' : 'dark');
    const getTheme = useCallback(() => document.body.getAttribute('data-bs-theme') as "light" | "dark" || 'light', []);
    
    const [isLight, setIsLight] = useState(getTheme() === 'light');
    const [isDark, setIsDark] = useState(getTheme() === 'dark');

    useEffect(() => {
        const handleThemeChange = () => {
            const newTheme = getTheme();
            setIsLight(newTheme === 'light');
            setIsDark(newTheme === 'dark');

            // Optionally, dispatch a custom event here (as discussed previously)
            // window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
        };

        // Use MutationObserver to watch for attribute changes
        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-bs-theme') {
                    handleThemeChange();
                }
            }
        });

        observer.observe(document.body, { attributes: true });

        return () => {
            observer.disconnect(); // Cleanup on unmount
        };
    }, [getTheme]); // Add getTheme as a dependency

    return { setTheme, isLight, isDark };
}

export default useTheme;