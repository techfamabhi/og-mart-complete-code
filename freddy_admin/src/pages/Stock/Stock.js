import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'

function Stock() {

    const[pid,setPid] = useState('');
    const[qty,setQty] = useState('');
    const[pidget,setPidget] = useState([]);


    function handleSubmit()
    {
        const data={
           
            "pid":pid,            
            "qty":qty,
            
        };

        console.log(data);
        axios.post('http://127.0.0.1:8000/api/Stock',data)
        .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status === "success")
            {
                console.log("Data Added");
                alert('Data Added!!!');
                window.location.href='/Stock';
            }
            else
            {
                console.log("Error");
            }
        });
       
    }
    function fetchpid()
    {
        axios.get('http://127.0.0.1:8000/api/Productget')
        .then((resp)=>{
            const data = resp.data;
            setPidget(data);
          
        });            

    }

    useEffect(()=>{
        fetchpid();
    },[]);
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
                    <div class="col-8">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Add Category Details</h4>
                                <form action="" method="post" >
                                    <div class="form-body">

                                    <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                <label for="">Select Pid </label>
                                                <select class="form-control" name="pid" id="" value={pid} onChange={(pid)=>{
                                                    setPid(pid.target.value)
                                                }}>
                                                    {
                                                        pidget.map((obj)=>{
                                                        return (
                                                            <option value={obj.id}>{obj.id}</option>
                                                        )
                                                        })
                                                    }
                                                
                                                </select>
                                             </div>
                                           </div>
                                           <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Quantity</label>
                                                    <input type="text" class="form-control" placeholder="" name="qty" onChange={qty=>setQty(qty.target.value)} value={qty} />
                                                </div>
                                            </div>
                                            
                                           
                                            
                                           
                                            
                                          
                                    </div>
                                    <div class="form-actions">
                                        <div class="text-center">
                                            <button type="button" class="btn btn-info" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </form>
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

export default Stock