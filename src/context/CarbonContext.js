import React, { createContext, useContext, useState } from 'react'

const CarbonContext = createContext()

export const CarbonContextProvider = ({ children }) => {
    const [calculatedCarbonFootprint, setCalculatedCarbonFootprint] = useState()
    const [loading, setLoading] = useState(false)

    const calculateFootprint = async (data) => {
        setCalculatedCarbonFootprint(null)
        setLoading(true)
        const { travelType, distance, transportType, frequency } = data
        try {
            const response = await fetch('https://backend-cifr8ct6r-tushars-projects-7b786313.vercel.app/api/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ travelType, distance, transportType, frequency }),
            });
            const result = await response.json()
            setLoading(false)
            setCalculatedCarbonFootprint(result.footprint);

        } catch (error) {
            setLoading(false)
            console.error("Error calculating carbon footprint:", error);
        }
    };

    return (
        <CarbonContext.Provider
            value={{
                calculatedCarbonFootprint,
                calculateFootprint,
                loading
            }}
        >
            {children}
        </CarbonContext.Provider>
    )
}

export const useCarbonProvider = () => {
    return useContext(CarbonContext);
};

