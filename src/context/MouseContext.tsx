import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MouseContextType {
  mousePosition: { x: number; y: number };
}

const MouseContext = createContext<MouseContextType>({
  mousePosition: { x: 0, y: 0 },
});

export const useMouseContext = () => useContext(MouseContext);

interface MouseProviderProps {
  children: ReactNode;
}

export const MouseProvider: React.FC<MouseProviderProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ mousePosition }}>
      {children}
    </MouseContext.Provider>
  );
};