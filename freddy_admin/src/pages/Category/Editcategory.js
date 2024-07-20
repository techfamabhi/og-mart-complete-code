import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Index from '../Index';
import Header from '../Header';
const Editcategory = () => {

    const {id} = useParams();

    const[cname,setCname]=useState('');
    const[img,setImg] = useState('');
    const[under_id,setUnderid] = useState('');
    const[status,setStatus] = useState('');
    const[margin,setMargin] = useState('');
    const[description,setDescription] = useState('');

    function updatedata(){
        axios.get('http://127.0.0.1:8000/api/Category/'+ id)
        .then((res)=>{
       const data=res.data;
       console.log(data);

       setCname(data.cname);
       setImg(data.img);
       setUnderid(data.under_id);
       setStatus(data.status);
       setMargin(data.margin);
       setDescription(data.description);
        })
    }

    function updateCategory()
    {
      //  setId(id);
        const datacode = {
            
            "cname":cname,
            "img":img,
            "under_id":under_id,
            "status":status,
            "margin":margin,
            "description":description
        }; 
        console.log(id);
       // console.log(datacode);
        axios.put('http://127.0.0.1:8000/api/Category/'+id,datacode)
          .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status==="success")
            {
                console.log("update")
                alert('Data Updated!!!');
                window.location.href='/Categorytable';
            }
            else{
                console.log("Error");
            }
          })
    }

    useEffect(()=>{
      updatedata();
    },[])

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
                                                    <label>Category Name</label>
                                                    <input type="text" class="form-control" placeholder="" name="cname" onChange={cname=>setCname(cname.target.value)} value={cname}/>
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
                                                    <label>Under_id</label>
                                                    <input type="text" class="form-control" placeholder="" name="under_id" onChange={under_id=>setUnderid(under_id.target.value)} value={under_id} />
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
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Margin</label>
                                                    <input type="text" class="form-control" placeholder="" name="margin" onChange={margin=>setMargin(margin.target.value)} value={margin} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Description</label>
                                                    <input type="text" class="form-control" placeholder="" name="description" onChange={description=>setDescription(description.target.value)} value={description} />
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