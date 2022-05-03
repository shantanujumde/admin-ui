import endPoint from "./backend"
import axios from 'axios'

const GetRecords = async () => {
    const URL = endPoint
    let result = []
    try {
        result = await axios.get(URL).then(res => res.data)
    } catch (e) {
        console.log(e)
    }
    return await result
}
export default GetRecords;