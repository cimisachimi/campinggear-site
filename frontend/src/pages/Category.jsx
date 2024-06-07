import React from "react";

const Category = ({ category, banner }) => {
  return (
    <section>
      <div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Category;
