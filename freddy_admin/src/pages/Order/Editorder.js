import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Index from '../Index';
import Header from '../Header';
const Editorder = () => {

    const {id} = useParams();

    const[bid,setBid]=useState('');
    const[bidget,setBidget]=useState([]);
    const[pid,setPid] = useState('');
    const[pidget,setPidget] = useState([]);
    const[price,setPrice] = useState('');
    const[disc,setDisc] = useState('');
    const[qty,setQty] = useState('');
    const[total,setTotal] = useState('');


    function updatedata(){
        axios.get('http://127.0.0.1:8000/api/Order/'+ id)
        .then((res)=>{
       const data=res.data;
       console.log(data);

       setBid(data.bid);
       setPid(data.pid);
       setPrice(data.price);
       setDisc(data.disc);
       setQty(data.qty);
       setTotal(data.total);
        })
    }

    function updateOrder()
    {
      //  setId(id);
        const datacode = {
            
            "bid":bid,
            "pid":pid,
            "price":price,
            "disc":disc,
            "qty":qty,
            "total":total
        }; 
        console.log(id);
       // console.log(datacode);
        axios.put('http://127.0.0.1:8000/api/Order/'+id,datacode)
          .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status==="success")
            {
                console.log("update")
                alert('Data Updated!!!');
                window.location.href='/Ordertable';
            }
            else{
                console.log("Error");
            }
          })
    }

    useEffect(()=>{
      updatedata();
    },[])

    function fetchbid()
    {
        axios.get('http://127.0.0.1:8000/api/Billget')
        .then((resp)=>{
            const data = resp.data;
            setBidget(data);
          
        });            

    }

    useEffect(()=>{
        fetchbid();
    },[]);

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
                                <h4 class="card-title">Update Order Details</h4>
                                <form onSubmit={updateOrder}>
                                <div class="form-body">
                                            
                                <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                <label for="">Select Bid </label>
                                                <select class="form-control" name="bid" id="" value={bid} onChange={(bid)=>{
                                                    setBid(bid.target.value)
                                                }}>
                                                    {
                                                        bidget.map((obj)=>{
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
                                                    <label>Price</label>
                                                    <input type="text" class="form-control" placeholder="" name="price" onChange={price=>setPrice(price.target.value)} value={price} />
                                                  
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Discount</label>
                                                    <input type="text" class="form-control" placeholder="" name="disc" onChange={disc=>setDisc(disc.target.value)} value={disc} />
                                                 
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Quantity</label>
                                                    <input type="text" class="form-control" placeholder="" name="qty" onChange={qty=>setQty(qty.target.value)} value={qty} />
                                                
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Total</label>
                                                    <input type="text" class="form-control" placeholder="" name="total" onChange={total=>setTotal(total.target.value)} value={total} />
                                                  
                                                </div>
                                            </div>

                                    </div>
                                    <div class="form-actions">
                                        <div class="text-center">
                                            <button type="button" class="btn btn-info" onClick={updateOrder}>Update</button>
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

export default Editorder