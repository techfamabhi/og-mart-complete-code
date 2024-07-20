import React, { useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'
const Register = () => {

    const[fname,setFname]=useState('');
    const[email,setEmail] = useState(''); 
    const[address,setAddress] = useState(''); 
    const[landmark,setLandmark] = useState('');
    const[city,setCity] = useState('');
    const[state,setState] = useState('');
    const[tehsil,setTehsil] = useState('');
    const[pin,setPin] = useState('');
    const[mobile,setMobile] = useState('');
    const[pan,setPan] = useState('');
    const[upi,setUpi] = useState('');
    const[ref,setRef] = useState('');
    const[password,setPassword] = useState('');
    const[status,setStatus] = useState('');
    const[underref,setUnderref] = useState('');
    const[pstatus,setPstatus] = useState('');

    
    const [fnameError, setFnameError] = useState(false);
    const [fnameErrormsg, setFnameErrormsg] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrormsg, setEmailErrormsg] = useState('');
    const [addressError, setAddressError] = useState(false);
    const [addressErrormsg, setAddressErrormsg] = useState('');
    const [mobileError, setMobileError] = useState(false);
    const [mobileErrormsg, setMobileErrormsg] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrormsg, setPasswordErrormsg] = useState('');
    
    function handleSubmit()
    {
        const regExp = /[A-Za-z]/;
        const regnumExp =  /[0-9]/;
        const regmailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

       
        if (!fname) {
            setFnameErrormsg('Required');
            setFnameError(true)
        }
        else if (!regExp.test(fname)) {
            setFnameErrormsg('Only Characters');
            setFnameError(true)
        }
        if (!email) {
            setEmailErrormsg('Required');
            setEmailError(true)
        }
        else if (!regmailExp.test(email)) {
            setEmailErrormsg('Only Characters');
            setEmailError(true)
        }
        if (!address) {
            setAddressErrormsg('Required');
            setAddressError(true)
        }
        if (!mobile) {
            setMobileErrormsg('Required');
            setMobileError(true)
        }
        else if (!regnumExp.test(mobile)) {
            setMobileErrormsg('Only Numbers');
            setMobileError(true)
        }
        if (!password) {
            setPasswordErrormsg('Required');
            setPasswordError(true)
        }



        else {
        const data={
            "full_name":fname,
            "email":email,
            "address":address,
            "landmark":landmark,
            "city":city,
            "state":state,
            "tehsil":tehsil,
            "pin":pin,
            "mobile":mobile,
            "pan":pan,
            "upi":upi,
            "ref":ref,
            "password":password,
            "status":status,
            "under_ref":underref,
            "pstatus":pstatus,
        };

        console.log(data);
        axios.post('http://127.0.0.1:8000/api/Register',data)
        .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status === "success")
            {
                console.log("Data Added"); 
                alert('Data Added!!!');
                window.location.href='/Registertable';
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
    {/* <Index/>
    <Header/> */}
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
                                <h4 class="card-title">Add Register Details</h4>
                                <form action="" method="post">
                                    <div class="form-body">
                                           
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Full Name</label>
                                                    <input type="text" class="form-control" placeholder="" name="fname" onChange={(fname)=>{setFname(fname.target.value)
                                                    setFnameError(false)}} value={fname} />
                                                    {fnameError && <p className="error">{fnameErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input type="email" class="form-control" placeholder="" name="email" onChange={(email)=>{setEmail(email.target.value)
                                                    setEmailError(false)}} value={email} />
                                                    {emailError && <p className="error">{emailErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Address</label>
                                                    <input type="text" class="form-control" placeholder="" name="address" onChange={(address)=>{setAddress(address.target.value)
                                                    setAddressError(false)}} value={address} />
                                                    {addressError && <p className="error">{addressErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Landmark</label>
                                                    <input type="text" class="form-control" placeholder="" name="landmark" onChange={landmark=>setLandmark(landmark.target.value)} value={landmark} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>City</label>
                                                    <input type="text" class="form-control" placeholder="" name="city" onChange={city=>setCity(city.target.value)} value={city} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>State</label>
                                                    <input type="text" class="form-control" placeholder="" name="state" onChange={state=>setState(state.target.value)} value={state} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Tehsil</label>
                                                    <input type="text" class="form-control" placeholder="" name="tehsil" onChange={tehsil=>setTehsil(tehsil.target.value)} value={tehsil} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Pin</label>
                                                    <input type="text" class="form-control" placeholder="" name="pin" onChange={pin=>setPin(pin.target.value)} value={pin} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Mobile</label>
                                                    <input type="text" class="form-control" placeholder="" name="mobile" onChange={(mobile)=>{setMobile(mobile.target.value)
                                                    setMobileError(false)}} value={mobile} />
                                                    {mobileError && <p className="error">{mobileErrormsg}</p>}
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Pan</label>
                                                    <input type="text" class="form-control" placeholder="" name="pan" onChange={pan=>setPan(pan.target.value)} value={pan} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Upi</label>
                                                    <input type="text" class="form-control" placeholder="" name="upi" onChange={upi=>setUpi(upi.target.value)} value={upi} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Ref</label>
                                                    <input type="text" class="form-control" placeholder="" name="ref" onChange={ref=>setRef(ref.target.value)} value={ref} />
                                                </div>
                                            </div>                                           
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Password</label>
                                                    <input type="text" class="form-control" placeholder="" name="password" onChange={(password)=>{setPassword(password.target.value)
                                                    setPasswordError(false)}} value={password} />
                                                    {passwordError && <p className="error">{passwordErrormsg}</p>}
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
                                                    <label>Under Ref</label>
                                                    <input type="text" class="form-control" placeholder="" name="underref" onChange={underref=>setUnderref(underref.target.value)} value={underref} />
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label for="">Select P Status</label>
                                                    <select class="form-control" name="pstatus" onChange={pstatus => setPstatus(pstatus.target.value)} value={pstatus}>
                                                        <option value="active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
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

export default Register
