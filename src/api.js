import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyD9ib3Aa5pRZu_Lc8jzyyN4_XaO_VcJzKU"
    }

})

export default request