import { API_URL } from '../constants/API_URL';
import axios from 'axios';

// 상품 불러오기
export const getData = async() => {
    try{
        const res = await axios.get(API_URL + '/products/')
        return res.data.results;
    }catch(error){
        return error;
    }
};

// 상품 디테일
export const getDetail = async(product_id) => {
    try{
        const res = await axios.get(API_URL + `/products/${product_id}/`)
        return res.data;
    }catch(error){
        return error;
    }
}

// 상품 검색
export const getSearchResult = async(입력값) => {
    try{
        const res = await axios.get(API_URL + `/products/?search=${입력값}`)
        return res.data;
    }catch(error){
        return error;
    }
};