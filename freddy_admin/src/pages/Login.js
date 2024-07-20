import React, { useEffect, useState } from 'react'
// import Index from '/Index';
// import Header from '/Header'
import axios from 'axios'
 function Login() {

    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    function handleSubmit()
    {
        const data = {
            'email':email,
            'password':password
        };
        console.log(data);
        axios.post('http://127.0.0.1:8000/api/Login',data)
        .then((resp)=>{
            const data = resp.data;
                    console.log(resp);
                    if (data[0].status === "success") {
                        console.log("Data Added");
                         alert('Login Successfully!!!');
                        localStorage.setItem("uid",JSON.stringify(data[0].user));
                        // localStorage.getItem("")
                        window.location.href="/"

                    }
                    else {
                        alert('Invalid Email and password ')
                        console.log("Error");
                    }
        })
    }




return (

    <React.Fragment>
    {/* <Index/> */}
    {/* <Header/> */}
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
                            <img src="/assets/images/ogmart.png" width="150" alt="homepage" class="dark-logo" style={{marginLeft:"220px"}} />
                                <h4 class="card-title">Add Login Details</h4>
                               <form method="post">
                               <div class="col-md-12 justify-content-center">
                                <div class="form-group">
                                <label for="">email</label>
                                <input type="text" name="email" onChange={email=>setEmail(email.target.value)} value={email} class="form-control" />
                                </div>
                                </div>
                                <div class="col-md-12 justify-content-center">
                                <div class="form-group">
                                <label for="">password</label>
                                <input type="password" name="password" onChange={password=>setPassword(password.target.value)} value={password} class="form-control" />
                                </div>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-info" onClick={handleSubmit}>Submit</button>
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
export default Login;
