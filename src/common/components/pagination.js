import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types'

const paginationSettings = {
    visibleRange: 3,
    delta: 2
};

const getVisibleRange = (numberOfPages, currentPage) => {
    let pageValues = [];
    const visibleRange = paginationSettings.visibleRange;
    const delta = paginationSettings.delta;
    if (numberOfPages <= 1) {
        return [];
    }
    if (numberOfPages < visibleRange + (2 * delta) + 2) {
        pageValues = _.range(1, numberOfPages + 1);
    }
    else {
        if (currentPage < visibleRange) {
            pageValues = _.range(1, visibleRange + 1);
            pageValues.push("...");
            for (let i = 0; i < delta; i++) {
                pageValues.push(numberOfPages - delta + (i + 1));
            }
        }
        else if (numberOfPages - currentPage < visibleRange) {
            for (let i = 0; i < delta; i++) {
                pageValues.push(i + 1);
            }
            pageValues.push("..");
            pageValues = pageValues.concat(_.range(numberOfPages - visibleRange, numberOfPages + 1));
        }
        else {
            for (let i = 0; i < delta; i++) {
                pageValues.push(i + 1);
            }
            pageValues.push("..");
            pageValues = pageValues.concat(_.range(Math.ceil(currentPage - visibleRange / 2), currentPage));
            pageValues = pageValues.concat(_.range(currentPage, Math.ceil(currentPage + visibleRange / 2)));
            pageValues.push("..");
            for (let i = 0; i < delta; i++) {
                pageValues.push(numberOfPages - delta + (i + 1));
            }
        }
    }
    return pageValues;
}
const Pagination = (props) => {
    const numberOfPages = Math.ceil(props.listSize / props.showSize);
    let pageValues = getVisibleRange(numberOfPages, props.page);
    let pages = undefined;
    if (pageValues) {
        if (pageValues.length > 0) {
            pages = _.map(pageValues, (pageValue, index) => {
                return (
                    <li key={index} className={(pageValue === props.page ? "active" : "") + (isNaN(pageValue) ? " unavailable" : "") + " page-item"}>
                        <button className="page-link" data-id={pageValue.toString()} onClick={isNaN(pageValue.toString()) || (pageValue === props.page) ? null : (e) => props.onPageClick(pageValue)}>{isNaN(pageValue) ? (<span className="gap">{pageValue.toString()}</span>) : (<span>{pageValue}</span>)}</button>
                    </li>
                )
            });
        }
        if (props.listSize === 0) { return null; }
        return (
            <nav aria-label="card-footer-pagination Page navigation example">
                <ul className="pagination d-flex flex-wrap">
                    {
                        pageValues.length > 0 &&
                        <li className="page-item">
                            <button className="page-link" onClick={props.onPrevClick} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </button>
                        </li>
                    }
                    {pages}
                    {
                        pageValues.length > 0 &&
                        <li className="page-item">
                            <button className="page-link" onClick={props.onNextClick} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </button>
                        </li>
                    }
                </ul>
            </nav>
        )
    }
    return "";
}

Pagination.propTypes = {
    listSize: PropTypes.number.isRequired,
    showSize: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleSizeChange: PropTypes.func.isRequired,
    onPageClick: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired
}

Pagination.defaultProps = {
    pageSizeOptions: [10, 50, 100]
}

export default Pagination;
