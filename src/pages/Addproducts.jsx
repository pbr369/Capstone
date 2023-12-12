import React, { useState } from "react";

export default function Addproducts() {
    const [formData, setFormData] = useState({
      brand: "",
      product_name: "",
      price: "",
      stock_quantity: "",
      rate: "",
      reviews_num: "",
      sold: "",
      category: "Men",
      description: "",
      image_urls: ["", "", "", "", ""],
    });

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
      console.log("Form submitted:", formData);
    };
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-gray-200 p-4">
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
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <p>Image URL {index}:</p>
            <textarea
              name={`image_url_${index}`}
              id={`image_url_${index}`}
              cols="30"
              rows="12"
              value={formData.image_urls[index - 1]}
              onChange={(e) => handleImageChange(index - 1, e)}
            ></textarea>
            {formData.image_urls[index - 1] && (
              <img
                src={formData.image_urls[index - 1]}
                alt={`Preview ${index}`}
                className="w-full h-auto max-h-32 object-cover rounded mt-2"
              />
            )}
            <br />
            <br />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}
