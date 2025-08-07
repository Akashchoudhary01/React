import { useState , useEffect } from "react";

//custom hook
function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.table(data);
        
    } , [currency])

    return data ;


}
export default useCurrencyInfo;