import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'

const Billtable = () => {

    const [Showdata, setShowdata] = useState([""])

    function fetchData()
    {
        axios.get('http://127.0.0.1:8000/api/ShopeeBill')
         .then((res)=>{
        const data=res.data;
        console.log(data);
                    
        setShowdata(data)
                    })
    }

    useEffect(()=>{
        fetchData()
    },[])


    function deletedata(id){
    
        axios.delete('http://127.0.0.1:8000/api/ShopeeBill/'+id)
         .then((res)=>{
        const data=res.data;
        console.log(data);
        if(data)
        {
            console.log("Data Deleted")
            alert('Data Deleted!!!');
            window.location.href='/Billtable';
        }
        else
        {
            console.log("Sorry")
        }
       
         })          
    }

  return (
    <React.Fragment>
    <Index/>
    <Header/>
    
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

        <div class="page-wrapper">
            <div class="container-fluid">
            <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Bill Table</h4>
                                
                                <div class="table-responsive">
                                    <table id="zero_config" class="table table-striped table-bordered no-wrap">
                                        <thead>
                                            <tr>
                                                <th>Cid</th>
                                                <th>Amount</th>
                                                <th>Discount</th>
                                                <th>Date</th>
                                                <th>Pay Made</th>
                                                <th>Delivery Status</th>
                                                <th>Bill Status</th>
                                                <th>Exh Status</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { Showdata.map((row)=>{
                                            return(
                                            <tr>
                                                <td>{row.cid}</td>
                                                <td>{row.bill_amount}</td>
                                                <td>{row.bill_discount}</td>
                                                <td>{row.bill_date}</td>
                                                <td>{row.pay_made}</td>
                                                <td>{row.delivery_status}</td>
                                                <td>{row.bill_status}</td>
                                                <td>{row.exh_status}</td>
                                                <td>
                                                    <button className='btn btn-danger ml-2' onClick={()=>deletedata(row.id)}>Delete</button>
                                                </td>
                                            </tr>
                                            )
                                         })
                                        }
                                        </tbody>
                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Billtable
