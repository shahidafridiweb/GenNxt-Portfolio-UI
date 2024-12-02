// components/Button.tsx
import { FC } from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full text-xl hover:bg-blue-700 transition duration-200"
            onClick={onClick}
        >
            {label}
        </button>
    );
};
