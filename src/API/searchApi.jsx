import axios from 'axios';
import { API_URL } from '../constants/API_URL';

export const getSearchData = async(search) => {
    try{
        const res = await axios.get(API_URL + `/products/?search=${search}`)
        return res;
    }catch(error){
        return error;
    }
};