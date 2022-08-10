import React from 'react';
import './datatable.scss'
import me from '../../image/photo_2022-07-18_20-36-51-transformed.png'
const customer = [
    { img:me, name:"Neil Sims",email:'email@example.com',amount:'$367' },
    { img:me, name:"Neil Sims",email:'email@example.com',amount:'$367' },
    { img:me, name:"Neil Sims",email:'email@example.com',amount:'$367' }
]
function Datatable() {
    return (
        <div className={'datatable'}>
            <h4 className={'title'}> Latest Customer</h4>
            {
                customer.map(item=>
                    <div className={'customer'}>
                        <div className="info">
                            <div className="image">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="text-info">
                                <h4 className={'text-title'}>{item.name}</h4>
                                <p>{item.email}</p>
                            </div>
                        </div>
                        <div className="amount">{item.amount}</div>
                    </div>)
            }


        </div>
    );
}

export default Datatable;