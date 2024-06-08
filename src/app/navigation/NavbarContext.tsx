import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface NavbarContextType {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const NavbarContext = createContext<NavbarContextType>({
  isExpanded: false,
  toggleExpanded: () => {},
});

export const NavbarProvider: React.FC<PropsWithChildren> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <NavbarContext.Provider value={{ isExpanded, toggleExpanded }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};
