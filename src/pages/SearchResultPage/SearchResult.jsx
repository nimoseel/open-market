import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import * as S from '../HomePage/_style';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';


const SearchResult = () => {
    const location = useLocation();
    const searchData = location.state.searchData;

    const searchResults = searchData.results;
    console.log(searchResults);

    return (
        <>
            <Header/>
            <p>총 {searchData.count}개의 상품이 검색되었습니다.</p>
            <S.ProductUl>
                    {searchResults.map((item) => 
                        <Link 
                            key={item.product_id} 
                            to={`/product/${item.product_id}`}
                        >
                            <ProductCard
                                {...item}
                                key={item.product_id}
                            />
                        </Link>
                    )}
                </S.ProductUl>
            <Footer/>
        </>
    )
};

export default SearchResult;
