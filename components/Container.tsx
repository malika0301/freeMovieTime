import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`max-w-[1400px] mx-auto px-16 w-full ${className}`}>
            {children}
        </div>
    );
}