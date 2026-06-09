import { useContext, useEffect } from "react";
import { FaqContext } from "../context/FaqContext";
import { getAllFaqWithAnswer } from "../services/faqService";

const useFaq = () => {
  const { faqs, setFaqs, loading, setLoading, error, setError } = useContext(FaqContext);

  useEffect(() => {
    const getFaqs = async () => {
      setLoading(true);
      try {
        const data = await getAllFaqWithAnswer();
        setFaqs(data);
      } catch (err) {
        setError(err.message || "FAQs load nahi hue.");
      } finally {
        setLoading(false);
      }
    };

    if (faqs.length === 0) getFaqs();
  }, [faqs.length]); // ← fix

  return { faqs, loading, error };
};

export default useFaq;