import { useState } from 'react'

export default function useFrom(initialState) {
 const [state,setstate] = useState(initialState)

 function fnUpdateState(event){
    setstate(prev => ({
        ...prev,
        [event.target.name] : event.target.value
    }))
 }
 return { state, fnUpdateState };
}
