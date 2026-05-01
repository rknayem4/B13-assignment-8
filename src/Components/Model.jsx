import { authClient } from "@/app/lib/auth-client";
import React from "react";
import { BiEdit } from "react-icons/bi";

const Model = () => {
  const handleUpdated = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    await authClient.updateUser({
      image: photo,
      name: name,
    });
  };
  return (
    <div>
      <label htmlFor="my_modal_6" className="btn">
        <BiEdit></BiEdit>
        Change Profile
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form onSubmit={handleUpdated} className="card-body max-w-md">
            <h2 className="font-bold text-3xl text-center mb-12">
              Change account Info
            </h2>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name "
              />
              <label className="label">Profile </label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Photo URL"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Change
              </button>
            </fieldset>
          </form>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
