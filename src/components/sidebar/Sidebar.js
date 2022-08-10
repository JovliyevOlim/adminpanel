import React from 'react';
import './sidebar.scss'
import {HiChartPie} from "react-icons/hi"
import {GiShoppingBag} from 'react-icons/gi'
import {FaLock} from 'react-icons/fa'
import {SiReadthedocs} from 'react-icons/si'
import {IoMdHelpBuoy} from "react-icons/io"
import {BsFillFileEarmarkBarGraphFill} from "react-icons/bs"
import {RiMessage2Fill} from "react-icons/ri"
import {BsCollectionFill} from "react-icons/bs"
import {MdOutlineArrowBackIos} from "react-icons/md"
function Sidebar(props) {
    return (
        <div className={'sidebar'}>

        <div className={'center'}>
            <ul>
                <li>
                    <div  className={'li-item'}>
                        <HiChartPie className={'icon'}/>
                        <span>Overview</span>
                    </div>

                </li>
                <li>
                    <div className={'li-item'}>
                        <BsFillFileEarmarkBarGraphFill className={'icon'}/>
                        <span>Pages</span>
                    </div>
                    <MdOutlineArrowBackIos className={'arrow'}/>
                </li>
                <li>
                    <div className={'li-item'}>
                        <GiShoppingBag className={'icon'}/>
                        <span>Sales</span>
                    </div>
                    <MdOutlineArrowBackIos className={'arrow'}/>
                </li>
                <li>
                    <div className={'li-item'}>
                        <RiMessage2Fill className={'icon'}/>
                        <span>Messages</span>
                    </div>

                </li>
                <li>
                    <div className={'li-item'}>
                        <FaLock className={'icon'}/>
                        <span>Authentication</span>
                    </div>
                    <MdOutlineArrowBackIos className={'arrow'}/>
                </li>
                <li>
                    <div className={'li-item'}>
                        <SiReadthedocs className={'icon'}/>
                        <span>Docs</span>
                    </div>

                </li>
                <li>
                    <div className={'li-item'}>

                        <BsCollectionFill className={'icon'}/>
                        <span>Components</span>
                    </div>
                </li>

                <li>
                    <div className={'li-item'}>

                        <IoMdHelpBuoy className={'icon'}/>
                        <span>Help</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Sidebar;