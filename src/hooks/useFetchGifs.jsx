import { useEffect, useState } from "react"
import { getGiphy } from "../helpers/getGifs";
export const UseFetchGifs = (list) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    useEffect(() =>{
        getGiphy(list)
        .then( imgs => {     
            setstate({
                data: imgs,
                loading: false
            })
    })
    },[list])


    return state
}

