import React from 'react';
import Pagination from 'react-js-pagination';
import './_style.css';

export default function Paging({ page, count, setPage }) {
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={15}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={setPage}
        />
    );
}
