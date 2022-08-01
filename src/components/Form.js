import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div class="form-outline mb-4">
          <input
            type="text"
            placeholder="First Name"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-outline mb-4">
          <input
            type="text"
            placeholder="Middle Name"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-outline mb-4">
          <input
            type="text"
            placeholder="Last Name"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-outline mb-4">
          <input
            type="email"
            placeholder="Email"
            class="form-control form-control-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
