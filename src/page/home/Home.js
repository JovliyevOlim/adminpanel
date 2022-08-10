import React from 'react';
import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tables from '../../components/table/Table'
import Datatable from "../../components/datatable/datatable";


function Home(props) {
    return (
        <div className={'header-home'}>
            <Navbar/>
            <div className={'home'}>
                <Sidebar/>
                <div className={'homeContainer'}>

                    <div className="charts">
                        <Chart/>
                    </div>

                    <div className="datatables">
                        <div className="left">  <Datatable/>
                        </div>
                        <div className="right"> <Datatable/>
                        </div>
                    </div>
                    <div className="listContainer">
                        <div className="listTitle">
                            <h4>Transactions</h4>
                                <p>This is a list of latest transactions</p>
                        </div>
                        <Tables/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;