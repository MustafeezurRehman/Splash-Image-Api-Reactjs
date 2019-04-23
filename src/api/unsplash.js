import Axios from "axios";

export default  Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID b32c57acf986c8267cab072ed2ab9853272c893b24013c55f48ea97695953c27' }
})