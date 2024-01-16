import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../../API/productApi';
import Header from '../../../components/common/Header/Header';
import Carousel from '../../../components/common/Carousel/Carousel';
import ProductCard from '../../../components/common/ProductCard/ProductCard';
import Footer from '../../../components/common/Footer/Footer';
import Loading from '../../../components/common/Loading/Loading';
import Paging from '../../../components/common/Paging/Paging';
import * as S from './_style';

const Home = () => {
    const { page } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(null);
    const [activePage, setActivePage] = useState(parseInt(page) || 1);
    const [itemcount, setItemCount] = useState(null);

    useEffect(() => {
        setLoading(true);
        try {
            getData(activePage).then((res) => {
                setItemCount(res.count);
                setProducts(res.results);
                setLoading(false);
            });
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [activePage]);

    const handlePageChange = (e) => {
        setActivePage(e);
        navigate(`/page/${e}`);
    };

    return (
        <>
            {loading && <Loading />}
            <Header />
            <Carousel />
            <S.Main>
                {!loading && products && (
                    <S.ProductUl className={loading ? '' : 'show'}>
                        {products.map((item) => (
                            <Link
                                key={item.product_id}
                                to={`/product/${item.product_id}`}
                            >
                                <ProductCard {...item} key={item.product_id} />
                            </Link>
                        ))}
                    </S.ProductUl>
                )}
            </S.Main>

            {itemcount > 15 && (
                <Paging
                    page={activePage}
                    count={itemcount}
                    setPage={handlePageChange}
                />
            )}
            <Footer />
        </>
    );
};

export default Home;
