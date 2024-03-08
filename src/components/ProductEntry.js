import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {useState} from 'react'
import axios from "axios";
import NavBar from "./NavBar";
import TitleBarDim from "./TilteBarDim";

function ProductEntry() {
  //see FORMS-HOOKS project for notes on useForm use!
  const form = useForm({
    defaultValues: {
      id: "",
      title: "",
      category: "",
      price: '',
      description: "",
      image: "",
    },
  });
 
  const [catVal, setCatVal]= useState()
  const { register, control, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/products", data)

      .catch((error) => {
        console.log(error);
      });
    
    reset();
  };
 const fireValState=(newVal)=>{
  console.log(catVal)
  console.log(newVal)
    setCatVal(newVal)
    console.log(catVal)
 }

  return (
    <div className="Home">
    <div className="assetForm">
      <TitleBarDim/>
      <NavBar/>
      <h3>Inventory Asset Entry</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          {...register("id", {
            required: {
              value: true,
              message: "category is required",
            },
          })}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: {
              value: true,
              message: "title required",
            },
          })}
        />
        <p className="errorss">{errors.title?.message}</p>

        <label htmlFor="category">Category</label>


        <select id="category" value={catVal} onChange={(e)=>setCatVal(e.target.value)}{...register("category")}>


            <option > </option>
            <option type="text" value="specials">
              Clearance
            </option>
            <option type="text" value="gardening">
              Gardening
            </option>

            <option type="text" value="books">
              Books
            </option>

            <option type="text" value="pet">
              Pets and Accessories
            </option>

            <option type="text" value="electronics">
              Electronics
            </option>
            <option type="text" value="communications">
              Communication
            </option>

            <option type="text" value="kitchen">
              Kitchen
            </option>
            <option type="text" value="furniture">
              Furniture
            </option>
            <option type="text" value="office">
              Office
            </option>
            <option type="text" value="accessories">
              Beauty
            </option>
            <option type="text" value="games">
              Games
            </option>
            <option type="text" value="gun">
              Guns and Shooting
            </option>
            <option type="text" value="camping">
              Camping
            </option>
            <option type="text" value="fitness">
              Health and Fitness
            </option>
            <option type="text" value="kite">
              Kites
            </option>
            <option type="text" value="art">
              Artwork
            </option>
          </select>
        <p className="errorss">{errors.category?.message}</p>

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          {...register("price", {
            required: {
              value: true,
              message: "please enter price",
            },
          })}
        />
        <p className="errorss">{errors.price?.message}</p>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          {...register("description", {
            required: {
              value: true,
              message: "Please enter a description",
            },
          })}
        />
        <p className="errorss">{errors.description?.message}</p>
        <label htmlFor="description">Image URL</label>
        <input type="text" id="image" {...register("image")} />

        <button>Enter Item</button>
      </form>
      <DevTool control={control} />
    </div>
    </div>
  );
}

export default ProductEntry;