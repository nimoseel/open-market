import axios from "axios";
import { API_URL } from '../constants/API_URL';

// 판매자 상품 불러오기 
export const getSellerProduct = async(token) => {
    try{
        const res = await axios(API_URL + '/seller/', {
            method: 'GET',
            headers: {
                Authorization: `JWT ${token}`,
            },
        });
        return res.data;
    }catch(error){
        return error.response.data;
    }
};

// 상품 등록하기 
export const postProduct = async(reqData, token) => {
    try{
        const res = await axios(API_URL + '/products/', {
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            data: reqData,
        });
        return res;
    }catch(error){
        return error.response.data;
    }
};

// 상품 수정하기 
export const editProduct = async(reqData, product_id, token) => {
    try{
        const res = await axios(API_URL + `/products/${product_id}/`,{
            method: 'PATCH',
            headers:{
                Authorization: `JWT ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            data: reqData,
        });
        return res;
    }catch(error){
        return error.response.data;
    }
}

// 상품 삭제하기
export const deleteProduct = async(product_id, token) => {
    try{
        const res = await axios(API_URL + `/products/${product_id}/`,{
            method: 'DELETE',
            headers: {
                Authorization: `JWT ${token}`,
            },
        });
        return res;
    }catch(error){
        return error.response;
    }
}