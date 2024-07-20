import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'
const Category = () => {

    const[cname,setCname]=useState('');
    const[img,setImg] = useState('');
    const[under_id,setUnderid] = useState('');
    const[status,setStatus] = useState('');
    const[margin,setMargin] = useState('');
    const[description,setDescription] = useState('');
    const [cnameError, setCnameError] = useState(false);
    const [marginError, setMarginError] = useState(false);
    const [DescError, setDescError] = useState(false);
    const [cnameErrormsg, setCnameErrormsg] = useState('');
    const [marginErrormsg, setMarginErrormsg] = useState('');
    const [descErrormsg, setDescErrormsg] = useState('');
    function handleSubmit()
    { 
        
        const regExp = /[A-Za-z]/;
        const regnumExp =  /[0-9]/;
        if (!cname) {
            setCnameErrormsg('Required');
            setCnameError(true)
        }
        else if (!regExp.test(cname)) {
            setCnameErrormsg('Only Characters');
            setCnameError(true);
        }
        if (!margin) {
            setMarginErrormsg('Required');
            setMarginError(true)
        }
        else if (!regnumExp.test(margin)) {
            setMarginErrormsg('Only Numbers');
            setMarginError(true);
        }
        if (!description) {
            setDescErrormsg('Required');
            setDescError(true)
        }
        else if (!regExp.test(description)) {
            setDescErrormsg('Only Characters');
            setDescError(true);
        }
        else {
        const data={
            "cname":cname,
            "img":img,
            "under_id":under_id,
            "status":status,
            "margin":margin,
            "description":description
        };

        console.log(data);
        axios.post('http://127.0.0.1:8000/api/Category',data)
        .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status === "success")
            {
                console.log("Data Added");
                alert('Data Added!!!');
                window.location.href='/Categorytable';
            }
            else
            {
                console.log("Error");
            }
        });
        }
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
                    <div class="col-8">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Add Category Details</h4>
                                <form action="/Category" method="post" enctype="multipart/form-data">
                                    <div class="form-body">
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Category Name</label>
                                                    <input type="text" class="form-control" placeholder="" name="cname" onChange={(cname)=>{setCname(cname.target.value)
                                                    setCnameError(false)}} value={cname} />
                                                    {cnameError &&   <p className="error">*{cnameErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Image</label>
                                                    <input type="file" class="form-control" placeholder="" name="img" onChange={img=>setImg(img.target.value)} value={img} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    
                                                    <input type="hidden" class="form-control" placeholder="" name="under_id" onChange={under_id=>setUnderid(under_id.target.value)} value={under_id} />
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
                                                    <input type="text" class="form-control" placeholder="" name="margin" onChange={(margin)=>{setMargin(margin.target.value)
                                                    setMarginError(false)}} value={margin} />
                                                    {marginError &&   <p className="error">*{marginErrormsg}</p>}
                                                   
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Description</label>
                                                    <input type="text" class="form-control" placeholder="" name="description" onChange={(description)=>{setDescription(description.target.value)
                                                    setDescError(false)}} value={description} />
                                                    {DescError &&   <p className="error">*{descErrormsg}</p>}

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

export default Category
