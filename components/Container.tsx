import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`max-w-350 mx-auto px-16 w-full ${className}`}>
            {children}
        </div>
    );
}