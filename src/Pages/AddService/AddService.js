import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/services', data)
      .then(res => {
        // console.log(res);
        if (res.data.inserted) {
          alert('adde successfully');
          reset();
        }
      })
  }

  return (
    <div className="add-service">
      <h1>Add  service  page </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <input {...register("description")} placeholder="description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;