import React, { useState } from 'react';
import BlankComponent from '../../common/components/blankComponent';
import Pagination from '../../common/components/pagination';
import Modal from '../../common/components/modal';
import BlankBankShow from './BlankBankShow';

const BlankBankList = props => {
    const pageSettings = {
        page: props.page ? props.page : 1,
        showSize: props.showSize ? props.showSize : 10
    }

    const [tab, setTab] = useState(0);
    const { page, showSize } = pageSettings;
    const { setPage } = props;
    const [showModal, setShowModal] = useState(false);
    const [selectedBank, setSelectedBank] = useState({});

    const { bankList } = props;

    let banks = bankList[tab];
    let startIndex = showSize*(page - 1);
    let pagedBanks = banks.slice(startIndex, startIndex + showSize)

    const favClassHelper = ifsc => {
        if (props.favouriteList[ifsc]) {
            return "fa-heart";
        }

        return "fa-heart-o";
    }

    const onBankClick = bank => {
        setSelectedBank(bank);
        setShowModal(true);
    }

    return <React.Fragment>
        <div className="row mt-3">
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-header bg-white">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item btn-sm">
                                <button onClick={() => setTab(0)} className={`nav-link ${tab === 0 ? 'active' : ''}`}>
                                    <i className="fa fa-globe mr-2"></i>ALL
                                </button>
                            </li>
                            <li className="nav-item btn-sm">
                                <button onClick={() => {setPage(1); setTab(1)}} className={`nav-link ${tab === 1 ? 'active' : ''}`}>
                                    <i className="fa fa-heart-o mr-2"></i>FAVOURITES
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        {banks.length > showSize && 
                            <div className="d-flex flex-row justify-content-between">
                                <h6 className="mt-3 m-none">Showing {showSize} of {banks.length}</h6>
                                <Pagination 
                                    listSize={banks.length}
                                    showSize={showSize}
                                    page={page}
                                    handleSizeChange={() => {}}
                                    onNextClick={() => {setPage(page + 1)}}
                                    onPrevClick={() => {setPage(page - 1)}}
                                    onPageClick={page => setPage(page)}
                                />
                            </div>
                        }
                        <div className="row mt-3">
                            {
                                pagedBanks.length > 0 ? pagedBanks.map(bank =>
                                    <div key={`bank-${bank.bank_id}-${bank.bank_name}-${bank.ifsc}`} className="col mb-3">
                                        <div onClick={() => onBankClick(bank)} className="card pointer">
                                            <div className="card-body">
                                                <h5 className="card-title">{bank.bank_name}</h5>
                                                <h6 className="card-subtitle mb-2 text-primary">{bank.ifsc}</h6>
                                                <small className="">{bank.branch}</small><br/>
                                                <small className="text-muted">{bank.state}</small>
                                                <div className="d-block text-right">
                                                    <button onClick={(e) => {e.stopPropagation(); props.onFavourite(bank.ifsc)}} className={`border-0 bg-transparent text-danger fa ${favClassHelper(bank.ifsc)}`}></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : <BlankComponent />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal 
            visible={showModal} 
            title={selectedBank.ifsc} 
            children={<BlankBankShow bank={selectedBank} />} 
            onClose={() => setShowModal(false)}
            footer={
                <div className="w-100 d-flex justify-content-between">
                    <small className="text-left text-muted">{`${selectedBank.city} | ${selectedBank.state}`}</small>
                    <i onClick={() => props.onFavourite(selectedBank.ifsc)} className={`text-danger fa ${favClassHelper(selectedBank.ifsc)}`}></i>
                </div>
            }
        />
    </React.Fragment>
}

export default BlankBankList;