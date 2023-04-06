import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const [status] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "Mobile",
    price: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      title: formData.title,
      description: formData.description,
      image: formData.image,
      category: formData.category,
      price: formData.price,
    };
    dispatch({
      type: "product/ADD_PRODUCT",
      payload: product,
    });
    navigate("/");
  };

  return (
    <>
      {status === "saving" && (
        <div className="alert alert-dismissible alert-info">
          <strong>Info ! </strong> Saving form data..
        </div>
      )}
      <form onSubmit={handleSubmit} className="m-4">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Product </label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={onFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Description </label>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={onFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Image URL </label>
          <input
            type="text"
            name="image"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={onFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select Category</label>
          <select
            value={formData.category}
            name="category"
            onChange={onFormChange}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Price </label>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Enter Product Price"
            onChange={onFormChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddNewProduct;
