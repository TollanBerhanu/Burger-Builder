import axios from "axios";

export default axios.create({
    baseURL: 'https://react-burger-builder-93afa-default-rtdb.europe-west1.firebasedatabase.app/'
})