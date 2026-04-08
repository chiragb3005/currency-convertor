import {useState, useEffect, useId} from "react";

// making a personal hook which will contain the json file i fetch using an api to get the relational amount of different currencis
function usecurrencyInfo(currency){
    const [data, setData] = useState({})
    // here an empty object inside the useState so i can put my data in the array
    // later setData will update the value of data so we can return data at end

    // using of hook useEffect for fetching the data to keep it in cache
    // here is useEffect we give the dependency which can change or if its change we have to make change in UI or refresh of the cahche
    useEffect( () => {
        // using async so we can wait without any crash or fail
        const fetchData = async () => {
            // using of try/catch makes the project more optimise
            try {
                const res = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
                const result = await res.json()
                setData(result[currency]) 
            }
             catch (error) {
                alert(`ERROR: problem faced during fetching of currecny ${currency}`)
                // setting setData as an empty object so it doesnt crash
                setData({});
            }
        }
        fetchData();

    } , [currency])
    return data;
    // make sure to return the data for which we created the hook

}

export default usecurrencyInfo;