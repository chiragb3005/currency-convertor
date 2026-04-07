import {useState, useEffect, useId} from "react";

// making a personal hook which will contain the json file i fetch using an api to get the relational amount of different currencis
function usecurrencyInfo(currency){
    const [data, setData] = useState({})
    // here an empty object inside the useState so i can put my data in the array

    // using of hook useEffect for fetching the data to keep it in cache
    // here is useEffect we give the dependency which can change or if its change we have to make change in UI or refresh of the cahche
    useEffect( () => {
        // using async so we can wait without any crash or fail
        const fetchData = async () => {
            try {
                const res = fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
                const result = await res.json()
                setData(result[currency]) 
            }
             catch (error) {
                alert(`ERROR: problem faced during fetching of currecny ${currency}`)
                setData({});
            }
        }
        fetchData();

    } , [currency])
    return data;

}

export default usecurrencyInfo;