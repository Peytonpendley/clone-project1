import { useState, useEffect } from 'react';
import API_KEY from "./Keys.js";

const CONTEXT_KEY = '05d65b3b4ff2141ab'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                /*pass in the key with `key=${API_KEY}
                  then you pass in the context with cx=${CONTEXT_KEY}
                  and finally you pass in the term and the `q` means query*/
                `https://www.googleapis.com/customsearch/v1?key=
                ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData()

    }, [term])

    return { data }
/* when you type something in the search bar that will be the term then you dispatch it into the data layer
and when the term changes is when you want the useEffect to change. The useEffect then goes through all the results from the `term`
and then puts then on the screen*/
}

export default useGoogleSearch;