import React from 'react';

const ShoppingCartImg = ({ color }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.889 28.4444C13.6254 28.4444 14.2223 27.8475 14.2223 27.1111C14.2223 26.3747 13.6254 25.7778 12.889 25.7778C12.1526 25.7778 11.5557 26.3747 11.5557 27.1111C11.5557 27.8475 12.1526 28.4444 12.889 28.4444Z"
                fill={color}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.3333 28.4444C26.0697 28.4444 26.6667 27.8475 26.6667 27.1111C26.6667 26.3747 26.0697 25.7778 25.3333 25.7778C24.597 25.7778 24 26.3747 24 27.1111C24 27.8475 24.597 28.4444 25.3333 28.4444Z"
                fill={color}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.66699 2.66669H7.51548L10.764 18.5359C10.8748 19.0816 11.1784 19.5717 11.6216 19.9205C12.0648 20.2694 12.6194 20.4547 13.1882 20.444H24.97C25.5389 20.4547 26.0934 20.2694 26.5366 19.9205C26.9798 19.5717 27.2834 19.0816 27.3943 18.5359L29.3337 8.59247H8.7276"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ShoppingCartImg;
