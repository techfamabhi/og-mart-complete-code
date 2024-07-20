import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'
const Contact = () => {

    const[name,setName]=useState('');
    const[email,setEmail] = useState('');
    const[mobile,setMobile] = useState('');
    const[message,setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [nameErrormsg, setNameErrormsg] = useState('');
    const [emailErrormsg, setEmailErrormsg] = useState('');
    const [mobileErrormsg, setMobileErrormsg] = useState('');
    const [messageErrormsg, setMessageErrormsg] = useState('');
    function handleSubmit()
    {
        const regExp = /[A-Za-z]/;
        const regnumExp =  /[0-9]/;
        const regmailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!name) {
            setNameErrormsg('Required');
            setNameError(true)
        }
        else if (!regExp.test(name)) {
            setNameErrormsg('Only Characters');
            setNameError(true);
        }
        if (!email) {
            setEmailErrormsg('Required');
            setEmailError(true)
        }
        else if (!regmailExp.test(email)) {
            setEmailErrormsg('email is not valid');
            setEmailError(true);
        }
        if (!mobile) {
            setMobileErrormsg('Required');
            setMobileError(true)
        }
        else if (!regnumExp.test(mobile)) {
            setMobileErrormsg('Only Numbers');
            setMobileError(true);
        }
        if (!message) {
            setMessageErrormsg('Required');
            setMessageError(true)
        }
        else if (!regExp.test(message)) {
            setMessageErrormsg('Only Characters');
            setMessageError(true);
        }
        else {
        const data={
            "name":name,
            "email":email,
            "mobile":mobile,
            "message":message
        };

        console.log(data);
        axios.post('http://127.0.0.1:8000/api/Contact',data)
        .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status === "success")
            {
                console.log("Data Added");
                alert('Data Added!!!');
                window.location.href='/Contacttable';
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
                                <h4 class="card-title">Add Contact Details</h4>
                                <form action="" method="post">
                                    <div class="form-body">
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label> Name</label>
                                                    <input type="text" class="form-control" placeholder="" name="name" onChange={(name)=>{setName(name.target.value) 
                                                    setNameError(false)}} value={name}/>
                                                    {nameError &&   <p className="error">*{nameErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input type="text" class="form-control" placeholder="" name="email" onChange={(email)=>{setEmail(email.target.value)
                                                    setEmailError(false)}} value={email} />
                                                    {emailError &&   <p className="error">*{emailErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Mobile</label>
                                                    <input type="text" class="form-control" placeholder="" name="mobile" onChange={(mobile)=>{setMobile(mobile.target.value)
                                                    setMobileError(false)}} value={mobile} />
                                                    {mobileError &&   <p className="error">*{mobileErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                              <div class="form-group">
                                                <label for="">Message</label>
                                                <textarea class="form-control" name="message" onChange={(message)=>{setMessage(message.target.value)
                                                setMessageError(false)}} value={message} rows="3"></textarea>
                                                {messageError &&   <p className="error">*{messageErrormsg}</p>}
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

export default Contact
