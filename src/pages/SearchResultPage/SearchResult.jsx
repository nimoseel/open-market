import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from '../../components/ProductCard/ProductCard';
import * as S from '../SearchResultPage/_style'


const SearchResult = () => {
    const location = useLocation();
    const searchData = location.state.searchData;
    const searchValue = location.state.searchWord;
    const searchResults = searchData.results;
    console.log(searchResults);

    return (
        <>
            <Header/>
            <S.Main>
                <S.SearchCount>
                    <S.SearchTxt>
                        {searchValue}
                    </S.SearchTxt>
                    <S.SearchResultTxt>
                        {searchData && searchData.count ? 
                            `총 ${searchData.count}개의 상품이 검색되었습니다.` 
                            : 
                            '앗! 찾으시는 상품이 없네요.'
                        }
                    </S.SearchResultTxt>
                </S.SearchCount>
                { !searchData.count ? 
                    <S.NoResult/>
                    :
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
                }
            </S.Main>
            <Footer/>
        </>
    )
};

export default SearchResult;
