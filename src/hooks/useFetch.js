import axios from "axios"
import { useState } from "react"

const useFetch = url => {
  const [state,setState] = useState ()
  const [haserror, sethaserror] = useState(false)
  const getData = () => {
    axios.get(url)
    .then(res => {
      setState(res.data)
      sethaserror(false)
    })
    .catch(err => {
      console.log(err)
      sethaserror(true)
    })

    
  }
  return [state, getData , haserror]
}


export default useFetch