import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'

const   IndexPro = () => {

    const [Showdata, setShowdata] = useState([""])

    function fetchData()
    {
        axios.get(' http://127.0.0.1:8000/api/Product')
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
    
        axios.delete('http://127.0.0.1:8000/api/Product/'+id)
         .then((res)=>{
        const data=res.data;
        console.log(data);
        if(data)
        {
            console.log("Data Deleted")
            alert('Data Deleted!!!');
            window.location.href='/IndexPro';
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
                                <div className='col-md-12 d-flex'>
                                    <div className='col-md-10'>
                                         <h4 class="card-title">Product Table</h4>
                                    </div>
                                    <div className='col-md-2 mb-2'>
                                        <a href={'/InsertProduct/'} className='btn btn-success'>Add Product</a>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table id="zero_config" class="table table-striped table-bordered no-wrap">
                                        <thead>
                                        <tr>
                                                <th>pname</th>
                                                <th>des</th>
                                                <th>Image</th>
                                                <th>hsn</th>
                                                <th>gst</th>
                                                <th>features</th>
                                                <th>price_sale</th>
                                                <th>price_purchase</th>
                                                <th>margin</th>
                                                <th>safety_information</th>
                                                <th>ingredients</th>
                                                <th>directions</th>
                                                <th>legal_disclaimer</th>
                                                <th>status</th>
                                                <th>category</th>
                                                <th>brands</th>
                                                <th>pcode</th>
                                                <th>discount</th>
                                                <th>packing</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { Showdata.map((row)=>{
                                            return(
                                            <tr>
                                                <td>{row.pname}</td>
                                                <td>{row.des}</td>
                                                <td>{row.img}</td>
                                                <td>{row.hsn}</td>
                                                <td>{row.gst}</td>
                                                <td>{row.features}</td>
                                                <td>{row.price_sale}</td>
                                                <td>{row.price_purchase}</td>
                                                <td>{row.margin}</td>
                                                <td>{row.safety_information}</td>
                                                <td>{row.ingredients}</td>
                                                <td>{row.directions}</td>
                                                <td>{row.legal_disclaimer}</td>
                                                <td>{row.status}</td>
                                                <td>{row.category}</td>
                                                <td>{row.brands}</td>
                                                <td>{row.pcode}</td>
                                                <td>{row.discount}</td>
                                                <td>{row.packing}</td>
                                                <td>
                                                    <a  className='btn btn-primary' href={'/EditPro/'+row.id}>Edit</a>
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

export default  IndexPro
