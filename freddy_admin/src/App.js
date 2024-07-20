import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./pages/Order/Order";
import Category from "./pages/Category/Category";
import Index from "./pages/Index";
import Ordertable from "./pages/Order/Ordertable";
import Categorytable from "./pages/Category/Categorytable";
import Billtable from "./pages/Bill/Billtable";
import Customertable from "./pages/Customer/Customertable";
import Editorder from "./pages/Order/Editorder";
import Editcategory from "./pages/Category/Editcategory";
import EditPro from "./pages/Product/EditPro";
import IndexPro from "./pages/Product/IndexPro";
import InsertProduct from "./pages/Product/InsertProduct";
import Registertable from "./pages/Register/Registertable";
import Contact from "./pages/Contact/Contact";
import Contacttable from "./pages/Contact/Contacttable";
import SubCategorytable from "./pages/SubCategory/SubCategorytable";
import SubCategory from "./pages/SubCategory/SubCategory";
import Editsubcategory from "./pages/SubCategory/Editsubcategory";
import Register from "./pages/Register/Register";
import Stock from "./pages/Stock/Stock";
import Login from "./pages/Login";
import StockTable from "./pages/Stock/StockTable";
import EditStock from "./pages/Stock/EditStock";
import Upload from "./pages/Product/Upload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/InsertProduct" element={<InsertProduct />} />
          <Route path="/IndexPro" element={<IndexPro />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Ordertable" element={<Ordertable />} />
          <Route path="/Categorytable" element={<Categorytable />} />
          <Route path="/SubCategorytable" element={<SubCategorytable />} />
          <Route path="/Editsubcategory/:id" element={<Editsubcategory />} />
          <Route path="/SubCategory" element={<SubCategory />} />
          <Route path="/Billtable" element={<Billtable />} />
          <Route path="/Customertable" element={<Customertable />} />
          <Route path="/Registertable" element={<Registertable />} />
          <Route path="/Contacttable" element={<Contacttable />} />
          <Route path="/Editorder/:id" element={<Editorder />} />
          <Route path="/Editcategory/:id" element={<Editcategory />} />
          <Route path="/EditPro/:id" element={<EditPro />} />
          <Route path="/Stock" element={<Stock />} />
          <Route path="/Stocktable" element={<StockTable />} />
          <Route path="/Editstock/:id" element={<EditStock />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
