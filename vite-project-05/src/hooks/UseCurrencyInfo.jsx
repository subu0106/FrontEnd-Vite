import { useState, useEffect } from "react";

function UseCurrencyInfo(currency, date) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`);
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [currency, date]);

  return data;
}

export default UseCurrencyInfo;
