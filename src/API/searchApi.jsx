import axios from 'axios';
import { API_URL } from '../constants/API_URL';

export const getSearchData = async(activePage, searchValue) => {
    try{
        const res = await axios.get(API_URL + `/products/?page=${activePage}&search=${searchValue}`)
        return res;
    }catch(error){
        return error;
    }
};