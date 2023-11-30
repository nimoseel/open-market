import axios from 'axios';
import { API_URL } from '../constants/API_URL';

// 장바구니 목록 보기 
export const getCart = async(token) => {
    try{
        const res = await axios(API_URL + '/cart/', {
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

// 장바구니에 물건 넣기
export const postCart = async(reqData,token) => {
    try{
        const res = await axios(API_URL + '/cart/', {
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`,
            },
            data: reqData,
        });
        return res;
    }catch(error){
        return error;
    }
};

// 장바구니 수정하기
export const editCartItem = async(reqData, cart_item_id, token) => {
    try{
        const res = await axios(API_URL + `/cart/${cart_item_id}/`,{
            method: 'PUT',
            headers:{
                Authorization: `JWT ${token}`,
            },
            data: reqData,
        });
        return res;
    }catch(error){
        return error.response;
    }
}

// 장바구니 개별 삭제
export const deleteCartItem = async(cart_item_id, token) => {
    try{
        const res = await axios(API_URL + `/cart/${cart_item_id}/`,{
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