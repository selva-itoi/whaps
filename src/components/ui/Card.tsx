import React from "react";

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <div className={`bg-white shadow-lg rounded-2xl p-5 ${className}`}>
            {title && <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>}
            <div>{children}</div>
        </div>
    );
};

export default Card;

// Add CardContent as a named export
export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="p-4">{children}</div>;
};
