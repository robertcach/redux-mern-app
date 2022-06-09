import { useState } from "react";
import { useForm } from "react-hook-form";
import InputGroup from "../../../components/InputGroup/InputGroup";
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../../redux/actions/productsActions'
import { useDispatch } from 'react-redux';
import "./NewProduct.scss";
import { createProduct } from "../../../services/ProductsService";

const NewProduct = () => {
  const [errors, setErrors] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    const bodyFormData = new FormData()
  
    const { image, ...rest } = data
  
    Object.keys(rest).forEach(key => {
      bodyFormData.append(key, rest[key])
    })
  
    if (image[0]) {
      bodyFormData.append("image", image[0])
    }


    if (!rest) {
      setErrors(true)
    } else {
      createProduct(bodyFormData)
        .then(product => dispatch(addProduct(product)))
        .then(() => navigate("/"))
        .catch(err => setErrors(err?.response?.data?.errors))
    }
  }

  return (
    <div className="new-product wrapper">
      <h1>New Product</h1>

      {errors && <div>Check all fields!</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          label="Title"
          id="title"
          register={register}
          type="text"
          placeholder="Title (required)"
        />

        <InputGroup
          label="Description"
          id="description"
          register={register}
          type="text"
          placeholder="Description (required)"
        />

        <InputGroup
          label="Price"
          id="price"
          register={register}
          type="number"
          placeholder="Price (required)"
        />  

        <InputGroup
          label="Product image"
          id="image"
          register={register}
          type="file"
          placeholder="Image (required)"
        />

        <button className="new-product__btn">Create Product</button>
      </form>
    </div>
  )
}

export default NewProduct;
