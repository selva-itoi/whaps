import { useEffect } from "react";

declare global {
    interface Window {
        Tawk_API?: any;
        Tawk_LoadStart?: Date;
    }
}

const TawkTo = () => {
    useEffect(() => {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/67c436e6a64185190fe282f8/1ilb7cu2t";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup when component unmounts
        };
    }, []);

    return null;
};

export default TawkTo;
