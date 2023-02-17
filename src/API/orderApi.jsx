import axios from 'axios';
import { API_URL } from '../constants/API_URL';

// 주문내역 보기
export const getOrder = async(token) => {
    try{
        const res = await axios(API_URL + '/order/', {
            method: 'GET',
            headers: {
                Authorization: `JWT ${token}`,
            },
        });
        return res;
    }catch(error){
        return error.response.data;
    }
};

// 주문 생성하기 
export const postOrder = async(reqData, token) => {
    try{
        const res = await axios(API_URL + '/order/', {
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`,
            },
            data: reqData,
        });
        return res;
    }catch(error){
        return error.response.data;
    }
};