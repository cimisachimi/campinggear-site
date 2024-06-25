import React, { useState, useRef } from "react";
import upload_place from "../assets/uploadimage.svg";

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = { ...productDetails };

    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("product", fileInput.files[0]);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      responseData = await response.json();

      if (responseData.success) {
        product.image = responseData.image_url;

        const productResponse = await fetch(
          "http://localhost:4000/addproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        const productData = await productResponse.json();

        if (productData.success) {
          alert("Product added successfully!");
          setProductDetails({
            name: "",
            image: "",
            category: "",
            new_price: "",
            old_price: "",
          });
          setImagePreview(null);
        } else {
          alert("Failed to add product. Please try again.");
        }
      } else {
        alert("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading image. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          image: file,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white p-8 rounded-sm mt-4 lg:mt-7 w-full max-w-md">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            Add_Product();
          }}
        >
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Nama Produk</h4>
            <input
              value={productDetails.name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Masukkan nama produk"
              className="bg-creamBase outline-none w-full py-3 px-4 rounded-md border border-darkGreen"
            />
          </div>
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Harga Produk</h4>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="number"
              name="old_price"
              placeholder="Masukkan harga produk"
              className="bg-creamBase outline-none w-full py-3 px-4 rounded-md"
            />
          </div>
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Harga Promo</h4>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="number"
              name="new_price"
              placeholder="Masukkan harga promo"
              className="bg-creamBase outline-none w-full py-3 px-4 rounded-md"
            />
          </div>
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Kategori Produk</h4>
            <select
              value={productDetails.category}
              onChange={changeHandler}
              name="category"
              className="bg-creamBase outline-none w-full py-3 px-4 rounded-md"
            >
              <option value="">Pilih Kategori</option>
              <option value="Tenda">Tenda</option>
              <option value="Tas">Tas</option>
              <option value="Memasak">Memasak</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Aksesories">Aksesories</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="file"
              name="image"
              id="file-input"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            <h4 className="bold-18 pb-2">Upload Gambar:</h4>
            <div className="flex items-center">
              {!imagePreview ? (
                <>
                  <label htmlFor="file-input" className="mr-2 cursor-pointer">
                    <img
                      src={upload_place}
                      alt="Upload"
                      className="w-20 rounded-sm"
                    />
                  </label>
                </>
              ) : (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-sm"
                  />
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-darkCream text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
          >
            Tambahkan Produk
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
