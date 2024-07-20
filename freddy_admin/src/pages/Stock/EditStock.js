import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Index from '../Index';
import Header from '../Header';
const EditStock = () => {

    const {id} = useParams();
    const[pid,setPid]=useState('');
    const[qty,setQty]=useState('');
   
    
    const[categoryget,setCategoryget] = useState([]);


    function updatedata(){
        axios.get('http://127.0.0.1:8000/api/Stock/'+ id)
        .then((res)=>{
       const data=res.data;
       console.log(data);

       setPid(data.pid);
       setQty(data.qty);

      
        })
    }

    function updateProduct()
    {
      //  setId(id);
        const datacode = {
           
            pid:pid,
            qty:qty         
        }; 
        
      
        axios.put('http://127.0.0.1:8000/api/Stock/'+id,datacode)
          .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status==="success")
            {
                console.log("update")
                alert('Data Updated!!!');
                window.location.href='/Stocktable';
            }
            else{
                console.log("Error");
            }
          })
    }

    useEffect(()=>{
      updatedata();
    },[])



    function fetchcategory()
    {
        axios.get('http://127.0.0.1:8000/api/Productget')
        .then((resp)=>{
            const data = resp.data;
            setCategoryget(data);
          
        });            

    }

    useEffect(()=>{
        fetchcategory();
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
                                <h4 class="card-title">Update Faculty Details</h4>
                                <form onSubmit={updateProduct}>
                                    <div class="form-body">
                                         


                                            <div class="form-body">
                                            
                                         

                                            
                                           <div class="form-group">
                                             <label for="">Select Category </label>
                                             <select class="form-control" name="pid" id="" value={pid} onChange={(pid)=>{
                                                setPid(pid.target.value)
                                             }}>
                                                {
                                                    categoryget.map((obj)=>{
                                                       return (
                                                        <option value={obj.id}>{obj.pname}</option>
                                                       )
                                                    })
                                                }
                                               
                                             </select>
                                           </div>



                                           <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	Qty</label>
                                                    <input type="text" class="form-control"  name="qty" onChange={qty=>setQty(qty.target.value)} value={qty}/>
                                                   
                                                </div>
                                            </div>

                                                      



                                    </div>










                                    </div>
                                    <div class="form-actions">
                                        <div class="text-center">
                                            <button type="button" class="btn btn-info" onClick={updateProduct}>Update</button>
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

export default EditStock;