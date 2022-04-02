import React, { useState } from "react";
import axios from "axios";

export const AddProoduct = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [desc, setDesc] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    if(!name.trim() || price === 0 || !desc.trim()) return

    const newProduct = {
      name, price, desc
    }
    axios.post('http://172.22.0.25:3005/',  newProduct)
          .then((res) => console.log(res))
          .catch((e) => console.log(e))
    
    setName('')
    setDesc('')
    setPrice(0)
  }

  return (
    <form onSubmit={event => submitHandler(event)} className="w-4/6 mx-auto p-10 rounded-lg shadow-md bg-base-200">
        <h1 className="text-4xl py-10">Tavar Qo'shish</h1>
      <div className="form-control mb-7">
        <label className="label ">
          <span className="label-text">Tavar Nomi</span>
        </label>
        <label className="input-group">
          <span>Nomi</span>
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="@Exemple"
            className="input input-bordered w-full input-lg"
          />
        </label>
      </div>
      <div className="form-control mb-7">
        <label className="label ">
          <span className="label-text">Tavar Narxi</span>
        </label>
        <label className="input-group">
          <span>Narxi</span>
          <input
            value={price}
            onChange={event => setPrice(Number(event.target.value))}
            type="number"
            placeholder="@Exemple"
            className="input input-bordered w-full input-lg"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label ">
          <span className="label-text">Tavar Haqida Ma'lumot</span>
        </label>
          <textarea value={desc} onChange={event => setDesc(event.target.value)} className="textarea textarea-lg" placeholder="Bio"></textarea>
      </div>
        <button className="btn mt-12 text-xl w-full btn-md btn-primary">Tavarni Qo'shish</button>
    </form>
  );
};
