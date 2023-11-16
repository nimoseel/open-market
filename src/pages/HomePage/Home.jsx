import React,{ useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../API/productApi';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import Paging from '../../components/Paging/Paging';
import * as S from '../HomePage/_style';

const Home = () => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(null);
    const [ activePage, setActivePage ] = useState(1);
    const [ itemcount, setItemCount ] = useState(null);
    
    useEffect(()=>{
        setLoading(true);
        getData(activePage).then(res => {
            setItemCount(res.count);
            setProducts(res.results);
            setLoading(false)
        });
    },[activePage])

    const handlePageChange = (e) => {
        setActivePage(e);
    }

    return (
        <>
            <Header/>
            <Carousel/>
            <S.Main>
            {loading && <Loading/>}
                <S.ProductUl>
                    {products.map((item) => 
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
            </S.Main>

            {itemcount > 15 &&
                <Paging
                    page={activePage}
                    count={itemcount}
                    setPage={handlePageChange}
                />
            }

            <Footer/>
        </>
    )
};

export default Home;