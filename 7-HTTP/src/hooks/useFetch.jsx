import {useState, useEffect} from 'react'

//4 - Custom hooks
export const useFetch = (url) => {

    const [data, setData] = useState(null);

    //5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6 - Loading
    const [loading, setLoading] = useState(false)

    //8 - Desafio 6
    const [itemId, setItemId] = useState(null)

    //Recuperando os dados
    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)

            const res = await fetch(url);

            const json = await res.json();

            setData(json);

            setLoading(false)
        }

        fetchData();

    },[url, callFetch]);

    //5 - Refatorando post

    useEffect(() => {

        const httpRequest = async () =>{

            let json

            if (method === "POST") {

                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions)

                json = await res.json();

                setCallFetch(json);
            } else if (method ==="DELETE") {

                const deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl, config);

                json = await res.json()

                setCallFetch(json);
            }            
        };

        httpRequest();

    }, [config])


    const httpConfig = (data, method) => {

        if(method ==="POST"){
            setConfig({
                method,
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify(data)
            })

            setMethod(method)
        } else if(method ==="DELETE") {
            setConfig({
                method: "DELETE",
                headers:{"Content-Type" : "application/json"},
            });
            setMethod("DELETE")
            setItemId(data)
        }
    }

    return {data, httpConfig, loading};
};