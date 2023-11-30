import React,{useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getSearchData } from "../../API/searchApi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from '../../components/Loading/Loading';
import Paging from '../../components/Paging/Paging';
import ProductCard from '../../components/ProductCard/ProductCard';
import * as S from '../SearchResultPage/_style'

const SearchResult = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    const queryParams = new URLSearchParams(location.search);
    const searchValue = queryParams.get('search');
    const page = queryParams.get('page');

    const [ searchData, setSearchData ] = useState({});
    const [ searchResults, setSearchResults ] = useState([]);
    const [ activePage, setActivePage ] = useState(parseInt(page) || 1);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=>{
        setLoading(true);
        if (searchValue){
            try {
                getSearchData(activePage, searchValue).then(res => {
                    setSearchData(res.data);
                    setSearchResults(res.data.results);
                    setLoading(false);
                });
            } catch (error) {
                console.error(error);
            }
        }else{
            setSearchData({});
            setSearchResults([]);
            setLoading(false);
        }
    },[searchValue, activePage]);

    const handlePageChange = (e) => {
        setActivePage(e);
        navigate(`/search?page=${e}&search=${searchValue}`);
    };

    const searchCount = searchData && searchData.count;

    return (
        <>
            <Header/>
            <S.Main>
            {loading && <Loading/>}
                <S.SearchCount>
                    <S.SearchTxt>
                        {searchValue}
                    </S.SearchTxt>
                    <S.SearchResultTxt>
                        {searchCount ? 
                            `총 ${searchCount}개의 상품이 검색되었습니다.` 
                            : 
                            '앗! 찾으시는 상품이 없네요.'
                        }
                    </S.SearchResultTxt>
                </S.SearchCount>
                {!searchCount || !searchValue? 
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
            {searchCount > 15 &&
                <Paging
                    page={activePage}
                    count={searchCount}
                    setPage={handlePageChange}
                />
            }
            <Footer/>
        </>
    )
};

export default SearchResult;
