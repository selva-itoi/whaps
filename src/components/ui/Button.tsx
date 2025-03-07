// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant = "primary" }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold transition duration-300";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
