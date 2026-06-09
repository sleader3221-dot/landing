import { createContext, useState } from "react";

export const FaqContext = createContext();

export const FaqProvider = ({ children }) => {

    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    return (
        <FaqContext.Provider value={{ faqs, loading, error, setFaqs, setLoading, setError }}>
            {children}
        </FaqContext.Provider>
    );
};