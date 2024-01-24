import { API_URL } from '../constants/API_URL';
import axios from 'axios';

export const login = async (reqData) => {
    try {
        const res = await axios(API_URL + '/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            data: reqData,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const joinIdValid = async (reqData) => {
    try {
        const res = await axios(API_URL + '/accounts/signup/valid/username/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            data: reqData,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const join = async (reqData) => {
    try {
        const res = await axios(API_URL + '/accounts/signup/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            data: reqData,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const companyNumVaild = async (reqData) => {
    try {
        const res = await axios(
            API_URL + '/accounts/signup/valid/company_registration_number/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                data: reqData,
            },
        );
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const sellerJoin = async (reqData) => {
    try {
        const res = await axios(API_URL + '/accounts/signup_seller/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            data: reqData,
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
};
