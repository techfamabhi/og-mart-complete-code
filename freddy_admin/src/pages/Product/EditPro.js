import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Index from '../Index';
import Header from '../Header';
const EditPro = () => {

    const {id} = useParams();

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
    const[status,setStatus] = useState('');
    const[category,setCategory] = useState('');
    const[brands,setBrands] = useState('');

    const[pcode,setPcode] = useState('');
    const[discount,setDiscount] = useState('');
    const[packing,setPacking] = useState('');
    
    const[categoryget,setCategoryget] = useState([]);


    function updatedata(){
        axios.get('http://127.0.0.1:8000/api/Product/'+ id)
        .then((res)=>{
       const data=res.data;
       console.log(data);

       setPname(data.pname);
       setDes(data.des);
       setImg(data.img);
       setHsn(data.hsn);
       setGst(data.gst);
       setfeatures(data.features);
       setPricesale(data.price_sale);
       setPricepurchase(data.price_purchase);
       setMargin(data.margin);

       setSafetyinformation(data.safety_information);
       setIngredients(data.ingredients);
       setDirections(data.directions);
       setLegaldisclaimer(data.legal_disclaimer);
       setStatus(data.status);
       setCategory(data.category);

       setBrands(data.brands);
       setPcode(data.pcode);
       setDiscount(data.discount);
       setPacking(data.packing);
        })
    }

    function updateProduct()
    {
      //  setId(id);
        const datacode = {
           
            pname:pname,
            des:des,
            img:img,
            hsn:hsn,
            gst:gst,
            features:features,
            price_sale:price_sale,
            price_purchase:price_purchase,
            margin:margin,
            safety_information:safety_information,
            ingredients:ingredients,
            directions:directions,
            legal_disclaimer:legal_disclaimer,
            status:status,        
            category:category,
            brands:brands,
            pcode:pcode,
            discount:discount,
            packing:packing,
        }; 
        console.log(id);
       // console.log(datacode);
        axios.put('http://127.0.0.1:8000/api/Product/'+id,datacode)
          .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status==="success")
            {
                console.log("update")
                alert('Data Updated!!!');
                window.location.href='/IndexPro';
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
                                <h4 class="card-title">Update Faculty Details</h4>
                                <form onSubmit={updateProduct}>
                                    <div class="form-body">
                                            {/* <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Faculty Name</label>
                                                    <input type="text" class="form-control" placeholder="" name="fname" onChange={fname=>setFname(fname.target.value)} value={fname}/>
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>Image</label>
                                                    <input type="text" class="form-control" placeholder="" name="fimage" onChange={fimage=>setFimage(fimage.target.value)} value={fimage} />
                                                </div>
                                            </div> */}





                                            <div class="form-body">
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	pname</label>
                                                    <input type="text" class="form-control" placeholder="" name="pname" onChange={pname=>setPname(pname.target.value)} value={pname}/>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	des</label>
                                                    <input type="text" class="form-control" placeholder="" name="des" onChange={des=>setDes(des.target.value)} value={des}/>
                                                   
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	img</label>
                                                    <input type="text" class="form-control" placeholder="" name="img" onChange={img=>setImg(img.target.value)} value={img}/>
                                               
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
                                                    <input type="text" class="form-control" placeholder="" name="price_sale" onChange={price_sale=>setPricesale(price_sale.target.value)} value={price_sale}/>
                                                   
                                                </div>
                                            </div>
                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	price_purchase</label>
                                                    <input type="text" class="form-control" placeholder="" name="price_purchase" onChange={price_purchase=>setPricepurchase(price_purchase.target.value)} value={price_purchase}/>
                                                   
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
                                                    <label>	status</label>
                                                    <input type="text" class="form-control" placeholder="" name="status" onChange={status=>setStatus(status.target.value)} value={status}/>
                                                    <p className="error">{formerrors.status}</p>
                                                </div>
                                            </div> */}


                                         <div class="form-group">
                                           <label for="">Select Status</label>
                                           <select class="form-control" name="status" onChange={status=>setStatus(status.target.value)} value={status}>
                                             <option value="active">Active</option>
                                             <option value="Inactive">Inactive</option>
                                           </select>
                                         </div>


                                            {/* <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	category</label>
                                                    <input type="text" class="form-control" placeholder="" name="category" onChange={category=>setCategory(category.target.value)} value={category}/>
                                                </div>
                                            </div> */}

                                            
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



                                            <div class="col-md-12 justify-content-center">
                                                <div class="form-group">
                                                    <label>	brands</label>
                                                    <input type="text" class="form-control" placeholder="" name="brands" onChange={brands=>setBrands(brands.target.value)} value={brands}/>
                                
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

export default EditPro;