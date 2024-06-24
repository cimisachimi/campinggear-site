import React, { useState, useRef } from "react";
import upload_place from "../assets/uploadimage.svg";

const AddProduct = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const fileInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [productDetails, setProductDetails] = useState({
    name: "",
    images: [], // Changed from image to images (array)
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

    // Collect all selected files from input refs
    const selectedFiles = fileInputRefs.reduce((files, ref) => {
      if (ref.current && ref.current.files.length > 0) {
        files.push(ref.current.files[0]);
      }
      return files;
    }, []);

    if (selectedFiles.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("product", file);
    });

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      responseData = await response.json();

      if (responseData.success) {
        product.images = responseData.image_urls;

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
            images: [],
            category: "",
            new_price: "",
            old_price: "",
          });
          setImagePreviews([]);
          // Clear all file inputs after successful submission
          fileInputRefs.forEach((ref) => {
            if (ref.current) {
              ref.current.value = "";
            }
          });
        } else {
          alert("Failed to add product. Please try again.");
        }
      } else {
        alert("Failed to upload images. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading images. Please try again.");
    }
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const previews = [...imagePreviews];
        previews[index] = reader.result;
        setImagePreviews(previews);

        const updatedImages = [...productDetails.images];
        updatedImages[index] = file;
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          images: updatedImages,
        }));
      };
      reader.readAsDataURL(file);
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
              <option value="fashion">Baju</option>
              <option value="grocery">Peralatan</option>
              <option value="home">Home</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <div className="mb-3">
            <h4 className="bold-18 pb-2">Upload Gambar:</h4>
            <div className="flex flex-wrap gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-sm"
                  />
                </div>
              ))}
              {fileInputRefs.map((fileInputRef, index) => (
                <div key={index} className="flex flex-col items-center">
                  <label
                    htmlFor={`file-input-${index}`}
                    className="mb-1 cursor-pointer"
                  >
                    <img
                      src={upload_place}
                      alt="Upload"
                      className="w-20 rounded-sm"
                    />
                  </label>
                  <input
                    type="file"
                    id={`file-input-${index}`}
                    onChange={(e) => handleImageChange(index, e)}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/*"
                  />
                  <span>
                    {productDetails.images[index]
                      ? productDetails.images[index].name
                      : "Pilih Gambar"}
                  </span>
                </div>
              ))}
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
