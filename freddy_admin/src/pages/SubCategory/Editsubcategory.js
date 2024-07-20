import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Index from '../Index';
import Header from '../Header';
const Editcategory = () => {

    const {id} = useParams();

    const[cname,setCname]=useState('');
    const[sub_name,setSubname]=useState('');
    const[img,setImg] = useState('');
    const[description,setDescription] = useState('');
    const[margin,setMargin] = useState('');
    const[status,setStatus] = useState('');
    const[categoryget,setCategoryget] = useState([]);


    function updatedata(){
        axios.get('http://127.0.0.1:8000/api/SubCategory/'+ id)
        .then((res)=>{
       const data=res.data;
       console.log(data);

       setCname(data.cname);
       setSubname(data.sub_name);
       setImg(data.img);
       setDescription(data.description);
       setMargin(data.margin);
       setStatus(data.status);
        })
    }

    function updateCategory()
    {
      //  setId(id);
        const datacode = {
            
            "cname":cname,
            "sub_name":sub_name,
            "img":img,
            "description":description,
            "margin":margin,
            "status":status
        }; 
        console.log(id);
       // console.log(datacode);
        axios.put('http://127.0.0.1:8000/api/SubCategory/'+id,datacode)
          .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status==="success")
            {
                console.log("update")
                alert('Data Updated!!!');
                window.location.href='/Subcategorytable';
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
        axios.get('http://127.0.0.1:8000/api/Categoryname')
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
                                <h4 class="card-title">Update Category Details</h4>
                                <form onSubmit={updateCategory}>
                                <div class="form-body">
                                     <div class="col-md-12 justify-content-center">
                                        <div class="form-group">
                                             <label for="">Select Category </label>
                                             <select class="form-control" name="cname" id="" value={cname} onChange={(cname)=>{
                                                setCname(cname.target.value)
                                             }}>
                                                {
                                                    categoryget.map((obj)=>{
                                                       return (
                                                        <option value={obj.cname}>{obj.cname}</option>
                                                       )
                                                    })
                                                }
                                               
                                             </select>
                                           </div>
                                      </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>SubCategory Name</label>
                                                    <input type="text" class="form-control" placeholder="" name="sub_name" onChange={sub_name=>setSubname(sub_name.target.value)} value={sub_name}/>
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Image</label>
                                                    <input type="text" class="form-control" placeholder="" name="img" onChange={img=>setImg(img.target.value)} value={img} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Description</label>
                                                    <input type="text" class="form-control" placeholder="" name="description" onChange={description=>setDescription(description.target.value)} value={description} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Margin</label>
                                                    <input type="text" class="form-control" placeholder="" name="margin" onChange={margin=>setMargin(margin.target.value)} value={margin} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                            <div class="form-group">
                                                <label for="">Select Status</label>
                                                <select class="form-control" name="status" onChange={status=>setStatus(status.target.value)} value={status}>
                                                    <option value="active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                            </div>
                                            </div>
                                            
                                            
                                          
                                    </div>
                                    <div class="form-actions">
                                        <div class="text-center">
                                            <button type="button" class="btn btn-info" onClick={updateCategory}>Update</button>
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

export default Editcategory