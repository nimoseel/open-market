import React,{useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from '../../components/ProductCard/ProductCard';
import * as S from '../SearchResultPage/_style'
import { getSearchData } from "../../API/searchApi";
import Paging from '../../components/Paging/Paging';
import Loading from '../../components/Loading/Loading';



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
        const fetchData = async () => {
            setLoading(true);

            if (searchValue) {
                try {
                    getSearchData(activePage, searchValue).then(res => {
                        setSearchData(res.data);
                        setSearchResults(res.data.results);
                        setLoading(false);
                    });
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchData();
    },[searchValue, activePage]);

    const handlePageChange = (e) => {
        setActivePage(e);
        navigate(`/search?page=${e}&search=${searchValue}`);
    };

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
                        {searchData && searchData.count ? 
                            `총 ${searchData.count}개의 상품이 검색되었습니다.` 
                            : 
                            '앗! 찾으시는 상품이 없네요.'
                        }
                    </S.SearchResultTxt>
                </S.SearchCount>
                { searchData.count === 0 ? 
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
            {searchData && searchData.count > 15 &&
                <Paging
                    page={activePage}
                    count={searchData.count}
                    setPage={handlePageChange}
                />
            }

            <Footer/>
        </>
    )
};

export default SearchResult;
