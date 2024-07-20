import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'
const Category = () => {

    const [sub_name, setSubname] = useState('');
    const [img, setImg] = useState('');
    const [status, setStatus] = useState('');
    const [margin, setMargin] = useState('');
    const [description, setDescription] = useState('');
    const [cname, setCategory] = useState('');
    const [categoryget, setCategoryget] = useState([]);




    const [subnameError, setSubnameError] = useState(false);
    const [subnameErrormsg, setSubnameErrormsg] = useState('');

    const [marginError, setMarginError] = useState(false);
    const [marginErrormsg, setMarginmsg] = useState();

    const [descriptionError, setDescError] = useState(false);
    const [descriptionErrormsg, setDescmsg] = useState();




    function handleSubmit() {
        const regExp = /[A-Za-z]/;


        if (!sub_name) {

            setSubnameErrormsg('Required');
            setSubnameError(true)

        }
        else if (!regExp.test(sub_name)) {
            setSubnameErrormsg('Only Characters');
            setSubnameError(true)
        }
        if (!margin) {

            setMarginmsg('Required');
            setMarginError(true)

        }
        else if (!regExp.test(margin)) {
            setMarginmsg('Only Characters');
            setMarginError(true)
        }
        if (!description) {

            setDescmsg('Required');
            setDescError(true)

        }
        else if (!regExp.test(description)) {
            setDescmsg('Only Characters');
            setDescError(true)
        }



        else {
            const data = {
                "cname": cname,
                'sub_name': sub_name,
                "img": img,
                "status": status,
                "margin": margin,
                "description": description,

            };

            console.log(data);
            axios.post('http://127.0.0.1:8000/api/SubCategory', data)
                .then((resp) => {
                    const data = resp.data;
                    console.log(resp);
                    if (data[0].status === "success") {
                        console.log("Data Added");
                        alert('Data Added!!!');
                        window.location.href = '/Subcategorytable';
                    }
                    else {
                        console.log("Error");
                    }
                });
        }
    }



    function fetchcategory() {
        axios.get('http://127.0.0.1:8000/api/Categoryget')
            .then((resp) => {
                const data = resp.data;
                setCategoryget(data);

            });

    }

    useEffect(() => {
        fetchcategory();
    }, []);



    return (

        <React.Fragment>
            <Index />
            <Header />
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
                                        <h4 class="card-title">Add Subcategory Details</h4>
                                        <form action="" method="post">
                                            <div class="form-body">
                                                <div class="col-md-12 justify-content-center">
                                                    <div class="form-group">
                                                        <label for="">Select Category </label>
                                                        <select class="form-control" name="cname" id="" value={cname} onChange={(cname) => {
                                                            setCategory(cname.target.value)
                                                        }}>
                                                            {
                                                                categoryget.map((obj) => {
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
                                                        <label>Sub Name</label>

                                                        <input type="text" class="form-control" placeholder="" name="sub_name" onChange={(sub_name) => {
                                                            setSubname(sub_name.target.value)
                                                            setSubnameError(false)
                                                        }} value={sub_name} />

                                                        {subnameError && <p className="error">{subnameErrormsg}</p>}

                                                    </div>
                                                </div>



                                                <div class="col-md-12 justify-content-center">
                                                    <div class="form-group">
                                                      
                                                        <input type="hidden" class="form-control" placeholder="" name="img" onChange={img => setImg(img.target.value)} value={img} />

                                                    </div>
                                                </div>

                                                <div class="col-md-12 justify-content-center">

                                                <div class="form-group">
                                                    <label for="">Select Status</label>
                                                    <select class="form-control" name="status" onChange={status => setStatus(status.target.value)} value={status}>
                                                        <option value="active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                </div>

                                                </div>


                                                <div class="col-md-12 justify-content-center">
                                                    <div class="form-group">
                                                        <label>Margin</label>

                                                        <input type="text" class="form-control" placeholder="" name="margin" onChange={(margin) => {
                                                            setMargin(margin.target.value)
                                                            setMarginError(false)
                                                        }} value={margin} />

                                                        {marginError && <p className="error">{marginErrormsg}</p>}

                                                    </div>
                                                </div>


                                                <div class="col-md-12 justify-content-center">
                                                    <div class="form-group">
                                                        <label>Description</label>

                                                        <input type="text" class="form-control" placeholder="" name="description" onChange={(description) => {
                                                            setDescription(description.target.value)
                                                            setDescError(false)
                                                        }} value={description} />


                                                        {descriptionError && <p className="error">{descriptionErrormsg}</p>}

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
