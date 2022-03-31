import React from 'react'

export const AddProduct = () => {
  return (
        <form className=" flex justify-center align-center gap-3 form-control border bg-base-300 ">
          <label className="label">
           </label>
          <label className="input-group">
             <span>Name</span>
            <input type="email" placeholder="@Name" className="input input-bordered border w-full"/>
          </label>

          <label className="label">
          </label>
          <label className="input-group">
             <span>Price</span>
            <input type="number" placeholder="Product Price" className="input input-bordered w-full"/>
          </label>

          <label className="label">
          </label>
          <label className="input-group">
             <span>Description</span>
            <input type="text" placeholder="Product Description" className="input input-bordered w-full pb-0"/>
          </label>
          <button class="btn btn-outline ">Submit</button>
        </form>
  )
}
