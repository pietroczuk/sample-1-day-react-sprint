import { createContext, FC, useState, } from "react";

const OverlayContext = createContext<{
    isFormActive: boolean;
    setIsFormActive: (isActive: boolean) => void;
}>(
    {
        isFormActive: false,
        setIsFormActive: () => { }
    }
);

export default OverlayContext;

interface OverlayContextProviderProps {
    children: React.ReactNode;
}
export const OverlayContextProvider: FC<OverlayContextProviderProps> = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const setIsVisibleHandler = (showOverlay: boolean) => {
        setIsVisible(showOverlay);
    }
    const contextValue = {
        isFormActive: isVisible,
        setIsFormActive: setIsVisibleHandler
    }
    return <OverlayContext.Provider value={contextValue}>{props.children}</OverlayContext.Provider>
}