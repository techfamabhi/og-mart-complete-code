import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Upload() {
  const [imagedata, setImagedata] = useState('');
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

  const handleChange = (file)=>{
    setImagedata(file[0]);
    setDes(des);
    setHsn(hsn);
    setGst(gst);

    setfeatures(features);
    setPricesale(price_sale);
    setPricepurchase(price_purchase);
    setMargin(margin);
    setSafetyinformation(safety_information);
    setIngredients(ingredients);
    setDirections(directions);
    setLegaldisclaimer(legal_disclaimer);
    setStatus(pstatus);
    setCategory(category);
    setBrands(brands);
    setDiscount(discount);
    setPacking(packing);
  
    
  };

  const submitData = (e) =>{
    e.preventDefault();
    const fData = new FormData();
    fData.append("image",imagedata);
    fData.append("pname",pname);
    fData.append("des",des);
    fData.append("hsn",hsn);
    fData.append("gst",gst);
   fData.append("features",features);
    fData.append("price_sale",price_sale);
    fData.append("price_purchase",price_purchase);
    fData.append("margin",margin);
    fData.append("safety_information",safety_information);
    fData.append("ingredients",ingredients);
    fData.append("directions",directions);
    fData.append("legal_disclaimer",legal_disclaimer);
    fData.append("pstatus",pstatus);
    fData.append("category",category);
    fData.append("brands",brands);
    fData.append("pcode",pcode);
    fData.append("discount",discount);
    fData.append("packing",packing);
    
    axios.post('http://127.0.0.1:8000/api/upload',fData)
    .then((res)=>{
      console.log('response',res);
    })
    .catch((e)=>{
        console.log('fail',e);
    });
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
    <form onSubmit={submitData}>






<div class="form-body">

<div class="col-md-12 justify-content-center">
    <div class="form-group">
        <label>	pname</label>

          <input type="text" class="form-control" placeholder="" name="pname" onChange={(pname) => {
            setPname(pname.target.value)
            
            }} value={pname} />
            
    </div>
</div>


<div class="col-md-12 justify-content-center">
    <div class="form-group">
        <label>	des</label>

        <input type="text" class="form-control" placeholder="" name="des"
        onChange={(des)=>{
            setDes(des.target.value)
           
            }} value={des} />
         

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
        
        }} value={price_sale}/>
         

    </div>
</div>




<div class="col-md-12 justify-content-center">
    <div class="form-group">
        <label>	price Purchase</label>
        <input type="text" class="form-control" placeholder="" name="price_purchase"
        onChange={(price_purchase)=>{
        setPricepurchase(price_purchase.target.value)
        
        }} value={price_purchase}/>
          

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
           
            }} value={brands} />
         

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







<input type="file" name="" onChange={e=>handleChange(e.target.files)}/>
<button type="submit" onClick={submitData}> submit </button>

    </form>
  );
}

export default Upload;
