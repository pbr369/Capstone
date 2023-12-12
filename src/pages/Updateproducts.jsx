import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Updateproducts({ match }) {
  //get the product id from url
  const { id } = useParams();
  //get the single product base on the id
  const [formData, setFormData] = useState({
    brand: "",
    product_name: "",
    price: 0,
    stock_quantity: 0,
    rate: 0,
    reviews_num: 0,
    sold: 0,
    category: "Men",
    description: "",
    image_urls: ["", "", "", "", ""],
  });

  useEffect(() => {
    // Fetch the product data using the ID from the URL
    axios
      .get(`http://127.0.0.1:8000/api/product/${id}`)
      .then((response) => {
       const {
         brand,
         product_name,
         price,
         stock_quantity,
         rate,
         reviews_num,
         sold,
         category,
         description,
         image_url_1,
         image_url_2,
         image_url_3,
         image_url_4,
         image_url_5,
        } = response.data;
        const imageUrls = [
          image_url_1,
          image_url_2,
          image_url_3,
          image_url_4,
          image_url_5,
        ];

       setFormData((prevData) => ({
         brand,
         product_name,
         price,
         stock_quantity,
         rate,
         reviews_num,
         sold,
         category,
         description,
         image_urls: imageUrls,
       }));
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (index, e) => {
    const newImageUrls = [...formData.image_urls];
    newImageUrls[index] = e.target.value;
    setFormData({ ...formData, image_urls: newImageUrls });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("FormData before update:", formData);
    axios
      .put(`http://127.0.0.1:8000/api/update-product/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Product updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating product:", error.response);
      });
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit} className="bg-gray-200 p-4">
        <h1 className="text-xl">Edit Product</h1>
        <br />
        <br />
        {/* Brand */}
        <input
          type="text"
          name="brand"
          id="brand"
          size="100"
          placeholder="Brand"
          className="w-full p-2 mb-4"
          value={formData.brand}
          onChange={handleInputChange}
        />
        <br />

        {/* Product Name */}
        <input
          type="text"
          name="product_name"
          id="product_name"
          size="100"
          placeholder="Product Name"
          className="w-full p-2 mb-4"
          value={formData.product_name}
          onChange={handleInputChange}
        />
        <br />

        {/* Price */}
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          step=".01"
          className="w-full p-2 mb-4"
          value={formData.price}
          onChange={handleInputChange}
        />
        <br />

        {/* Stock Quantity */}
        <input
          type="number"
          name="stock_quantity"
          id="stock_quantity"
          placeholder="Stock"
          className="w-full p-2 mb-4"
          value={formData.stock_quantity}
          onChange={handleInputChange}
        />
        <br />

        {/* Rate */}
        <input
          type="number"
          name="rate"
          id="rate"
          placeholder="Rate"
          step=".01"
          className="w-full p-2 mb-4"
          value={formData.rate}
          onChange={handleInputChange}
        />
        <br />

        {/* Reviews Number */}
        <input
          type="number"
          name="reviews_num"
          id="reviews_num"
          placeholder="# of Reviews"
          className="w-full p-2 mb-4"
          value={formData.reviews_num}
          onChange={handleInputChange}
        />
        <br />

        {/* Sold */}
        <input
          type="number"
          name="sold"
          id="sold"
          placeholder="Sold"
          className="w-full p-2 mb-4"
          value={formData.sold}
          onChange={handleInputChange}
        />
        <br />

        {/* Category */}
        <label htmlFor="category" className="block mb-2">
          Category:
        </label>
        <select
          name="category"
          id="category"
          className="w-full p-2 mb-4"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Luxury">Luxury</option>
          <option value="Sports">Sports</option>
          <option value="Shoes">Shoes</option>
          <option value="Bag">Bag</option>
        </select>
        <br />

        {/* Description */}
        <p>Description: </p>
        <textarea
          name="description"
          id="description"
          cols="50"
          rows="15"
          className="w-full p-2 mb-4"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
        <br />
        {/* Image URL inputs with previews */}
        {formData.image_urls.map((url, index) => (
          <div key={index}>
            <p className="text-md">Image URL {index + 1}:</p>
            <textarea
              type="text"
              cols="50"
              rows="5"
              value={url || ""} // Ensure the value is not null
              onChange={(e) =>
                setFormData((prevData) => {
                  const newImageUrls = [...prevData.image_urls];
                  newImageUrls[index] = e.target.value;
                  return { ...prevData, image_urls: newImageUrls };
                })
              }
            ></textarea>
            {url && (
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-96 h-96 object-cover rounded mt-2"
              />
            )}
            <br />
            <br />
          </div>
        ))}
        <br />
        <br />
        <br />
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
