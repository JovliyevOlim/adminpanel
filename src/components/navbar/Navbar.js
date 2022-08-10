import React from 'react';
import './navbar.scss'
import avatar from '../../image/photo_2022-07-18_20-36-51-transformed.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {GrGoogle} from 'react-icons/gr'
import {RiNotification2Fill} from 'react-icons/ri'

function Navbar(props) {
    return (
        <div className={'navbar'}>
            <div className="wrapper">
                <div className="navbarleft">
                    <div className="logo">
                        <GrGoogle/>
                    </div>
                    <div className={'search'}>
                        <SearchOutlinedIcon className={'icon'}/>
                        <input type="text" placeholder={'Search...'} size={50}/>
                    </div>
                </div>
                <div className="items">
                    <div className="item">
                        <RiNotification2Fill className={'icon'}/>
                        <div className={'counter'}>1</div>
                    </div>
                    <div className="item">
                        <img src={avatar}
                             alt=""
                             className={'avatar'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;