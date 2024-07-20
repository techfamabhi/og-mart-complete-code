import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'
const InsertProduct = () => {
 
    const[pname,setPname]=useState('');
    const[des,setDes] = useState('');
    const[img,setImg] = useState('');
    const[hsn,setHsn] = useState('');
    const[gst,setGst] = useState('');
    const[features,setfeatures] = useState('');
    const[price_sale,setPricesale] = useState('');
    const[price_purchase,setPricepurchase] = useState('');
    const[margin,setMargin] = useState('');
    const[safety_information,setSafetyinformation] = useState('');
    const[ingredients,setIngredients] = useState('');
    const[directions,setDirections] = useState('');
    const[legal_disclaimer,setLegaldisclaimer] = useState('');
    const[pstatus,setStatus] = useState('');
    const[category,setCategory] = useState('');
    const[brands,setBrands] = useState('');

    const[pcode,setPcode] = useState('');
    const[discount,setDiscount] = useState('');
    const[packing,setPacking] = useState('');
    const[categoryget,setCategoryget] = useState([]);
    const [isFileError,setFileError] = useState(false);
    const warn = {borderWidth:1,borderColor:'#f44336'}
    const nowarn = {borderWidth:1,borderColor:'#d9dee3'}
    const [imagedata, setImagedata] = useState('');


    const [pnameError, setPnameError] = useState(false);
    const [pnameErrormsg,setPnameErrormsg] = useState('');

    const [desError, setDescError] = useState(false);
    const [desErrormsg,setDescErrormsg] = useState('');

    const [price_saleError, setPrice_salecError] = useState(false);
    const [price_saleErrormsg,setPrice_salecErrormsg] = useState('');
    const [price_purchaseError, setPrice_purchasecError] = useState(false);
    const [price_purchaseErrormsg,setPrice_purchasecErrormsg] = useState('');

    const [brandErrors, setBrandscError] = useState(false);
    const [brandErrorsmsg,setBrandscErrormsg] = useState('');



    // const handleChange = (file)=>{
    //     setImagedata(file[0]);
    //   };


      



function handleChange(e){
  setImg(e.target.files[0]);
};



    function handleSubmit(e) {
        const regExp = /[A-Za-z]/;
        const regnumExp =  /[0-9]/;
        if (!pname) {

            setPnameErrormsg('Required');
            setPnameError(true)

        }
        else if (!regExp.test(pname)) {
            setPnameErrormsg('Only Characters');
            setPnameError(true);
        }
        if (!des) {

            setDescErrormsg('Required');
            setDescError(true)

        }
        else if (!regExp.test(des)) {
            setDescErrormsg('Only Characters');
            setDescError(true);
        }
        if (!price_sale) {

            setPrice_salecErrormsg('Required');
            setPrice_salecError(true)

        }
        else if (!regnumExp.test(price_sale)) {
            setPrice_salecErrormsg('Only Numbers');
            setPrice_salecError(true);
        }
        if (!price_purchase) {

            setPrice_purchasecErrormsg('Required');
            setPrice_purchasecError(true)

        }
        else if (!regnumExp.test(price_purchase)) {
            setPrice_purchasecErrormsg('Only Numbers');
            setPrice_purchasecError(true);
        }
        if (!brands) {

            setBrandscErrormsg('Required');
            setBrandscError(true)

        }
        else if (!regExp.test(brands)) {
            setBrandscErrormsg('Only Characters');
            setBrandscError(true);
        }





        else {

            const data={
                "pname":pname,
                "des":des,
                "img":img,
                "hsn":hsn,
                "gst":gst,
                "features":features,
                "price_sale":price_sale,
                "price_purchase":price_purchase,
                "margin":margin,
                "safety_information":safety_information,
                "ingredients":ingredients,
                "directions":directions,
                "legal_disclaimer":legal_disclaimer,
                "pstatus":pstatus,
                "category":category,
                "brands":brands,
                "pcode":pcode,
                "discount":discount,
                "packing":packing,

            };

           
            e.preventDefault();
            // const fData = new FormData();
            // fData.append("image",imagedata);
            const config = {
                headers:{'X-Requested-With':'XMLHttpRequest'}
            }

            console.log(data);

            axios.post('http://127.0.0.1:8000/api/Product',data,config)
                             .then((res) =>{
                               console.log(res);
                               //alert("Subject added successfully");
                               const data = res.data;
                               if(data.status==="success")
                               window.location.href = "/IndexPro";
                               else{
                                console.log("Error");
                                window.location.href = "/IndexPro";

                               }

                             })





        }
        // setFormErrors(validate(data));
        // setIsSubmit(true);
    }




    function fetchcategory()
    {
        axios.get('http://127.0.0.1:8000/api/Categoryget')
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
                                <h4 class="card-title">Add Product Details</h4>
                               <form onSubmit={handleSubmit}>
                                    <div class="form-body">

                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	pname</label>

                                                      <input type="text" class="form-control" placeholder="" name="pname" onChange={(pname) => {
                                                        setPname(pname.target.value)
                                                        setPnameError(false)
                                                        }} value={pname} />
                                                        {pnameError && <p className="error">{pnameErrormsg}</p>}
                                                </div>
                                            </div>


                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	des</label>

                                                    <input type="text" class="form-control" placeholder="" name="des"
                                                    onChange={(des)=>{
                                                        setDes(des.target.value)
                                                        setDescError(false)
                                                        }} value={des} />
                                                     {desError && <p className="error">{desErrormsg}</p>}

                                                </div>
                                            </div>


                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	img</label>
                                                    <input type="file" name="" onChange={handleChange}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	hsn</label>
                                                    <input type="text" class="form-control" placeholder="" name="hsn" onChange={hsn=>setHsn(hsn.target.value)} value={hsn}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	gst</label>
                                                    <input type="text" class="form-control" placeholder="" name="gst" onChange={gst=>setGst(gst.target.value)} value={gst}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	features</label>
                                                    <input type="text" class="form-control" placeholder="" name="features" onChange={features=>setfeatures(features.target.value)} value={features}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	price_sale</label>
                                                    <input type="text" class="form-control" placeholder="" name="price_sale"
                                                    onChange={(price_sale)=>{
                                                    setPricesale(price_sale.target.value)
                                                    setPrice_salecError(false)
                                                    }} value={price_sale}/>
                                                      {price_saleError && <p className="error">{price_saleErrormsg}</p>}

                                                </div>
                                            </div>




                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	price Purchase</label>
                                                    <input type="text" class="form-control" placeholder="" name="price_purchase"
                                                    onChange={(price_purchase)=>{
                                                    setPricepurchase(price_purchase.target.value)
                                                    setPrice_purchasecError(false)
                                                    }} value={price_purchase}/>
                                                      {price_purchaseError && <p className="error">{price_purchaseErrormsg}</p>}

                                                </div>
                                            </div>

                                           <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	margin</label>
                                                    <input type="text" class="form-control" placeholder="" name="margin" onChange={margin=>setMargin(margin.target.value)} value={margin}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	safety_information</label>
                                                    <input type="text" class="form-control" placeholder="" name="safety_information" onChange={safety_information=>setSafetyinformation(safety_information.target.value)} value={safety_information}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	ingredients</label>
                                                    <input type="text" class="form-control" placeholder="" name="ingredients" onChange={ingredients=>setIngredients(ingredients.target.value)} value={ingredients}/>

                                                </div>
                                            </div>

                                           <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	directions</label>
                                                    <input type="text" class="form-control" placeholder="" name="directions" onChange={directions=>setDirections(directions.target.value)} value={directions}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	legal_disclaimer</label>
                                                    <input type="text" class="form-control" placeholder="" name="legal_disclaimer" onChange={legal_disclaimer=>setLegaldisclaimer(legal_disclaimer.target.value)} value={legal_disclaimer}/>

                                                </div>
                                            </div>
                                            {/* <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>

                                                    </label>
                                                    <input type="text" class="form-control" placeholder="" name="status" onChange={status=>setStatus(status.target.value)} value={status}/>
                                                    <p className="error">{formerrors.status}</p>
                                                </div>
                                            </div> */}

                                        <div class="col-md-12 justify-content-center">

                                         <div class="form-group">
                                           <label for="">Select Status</label>
                                           <select class="form-control" name="pstatus" onChange={pstatus=>setStatus(pstatus.target.value)} value={pstatus}>
                                             <option value="active">Active</option>
                                             <option value="Inactive">Inactive</option>
                                           </select>
                                         </div>

                                        </div>

                                         <div class="col-md-12 justify-content-center">

                                           <div class="form-group">
                                             <label for="">Select Category </label>
                                             <select class="form-control" name="category" id="" value={category} onChange={(category)=>{
                                                setCategory(category.target.value)
                                             }}>
                                                {
                                                    categoryget.map((obj)=>{
                                                       return (
                                                        <option value={obj.id}>{obj.cname}</option>
                                                       )
                                                    })
                                                }

                                             </select>
                                           </div>
                                        </div>


                                           <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	brands</label>

                                                    <input type="text" class="form-control" placeholder="" name="brands"
                                                    onChange={(brands)=>{
                                                        setBrands(brands.target.value)
                                                        setBrandscError(false)
                                                        }} value={brands} />
                                                     {brandErrors && <p className="error">{brandErrorsmsg}</p>}

                                                </div>
                                            </div>


                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	pcode</label>
                                                    <input type="text" class="form-control" placeholder="" name="pcode" onChange={pcode=>setPcode(pcode.target.value)} value={pcode}/>

                                                </div>
                                            </div>

                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	discount</label>
                                                    <input type="text" class="form-control" placeholder="" name="discount" onChange={discount=>setDiscount(discount.target.value)} value={discount}/>

                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	packing</label>
                                                    <input type="text" class="form-control" placeholder="" name="packing" onChange={packing=>setPacking(packing.target.value)} value={packing}/>

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

export default InsertProduct;
