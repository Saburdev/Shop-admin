import React from "react";

export const AddProoduct = () => {
  return (
    <form className="w-4/6 mx-auto p-10 rounded-lg shadow-md bg-base-200">
        <h1 className="text-4xl py-10">Tavar Qo'shish</h1>
      <div className="form-control mb-7">
        <label className="label ">
          <span className="label-text">Tavar Nomi</span>
        </label>
        <label className="input-group">
          <span>Nomi</span>
          <input
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
          <textarea class="textarea textarea-lg" placeholder="Bio"></textarea>
      </div>
        <button className="btn mt-12 text-xl w-full btn-md btn-primary">Tavarni Qo'shish</button>
    </form>
  );
};
