import { useState, useEffect } from "react";

// Custom hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // ✅ Correct key
      })
      .catch((error) => {
        console.error("Failed to fetch exchange rates:", error);
        setData({});
        
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
