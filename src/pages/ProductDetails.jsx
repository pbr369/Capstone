import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Star from "../components/Star";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import styled from "styled-components";
import MyImage from "../components/MyImage";

export default function ProductDetails() {
  //get the product id from url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  //get the single product base on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  //if product is not found
  if (!product) {
    return (
      <section
        className="h-screen flex justify-center
  items-center"
      >
        Loading...
      </section>
    );
  }

  function formatPrice(price) {
    // Convert the price to a string
    const priceString = price.toString();

    // Split the string into whole and decimal parts
    const [wholePart, decimalPart] = priceString.split(".");

    // Add commas to the whole part for thousands
    const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Combine the whole and decimal parts, and add the PHP symbol
    const formattedPrice = `₱${formattedWholePart}${
      decimalPart ? `.${decimalPart}` : ""
    }`;

    return formattedPrice;
  }

  //destructure product
  const { product_name, brand, category, price, description, image_url_1, image_url_2, image_url_3, image_url_4, image_url_5, rate, reviews_num } =
    product;
  return (
    <Wrapper>
      <section className="pt-32 pb-12 lg:py-8 flex items-center">
        <div className="container mx-auto">
          {/* image and text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="grid grid-cols-2">
              {/* product Images  */}
              <div className="flex items-center">
                <MyImage
                  imgs={[
                    image_url_1,
                    image_url_2,
                    image_url_3,
                    image_url_4,
                    image_url_5,
                  ]}
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h1
                  className="text-[26px] font-medium
            max-w-[450px] mx-auto lg:mx-0 text-gray-700"
                >
                  {brand} / {category}
                </h1>
                <h1
                  className="text-[26px] font-medium mb-2 
            max-w-[450px] mx-auto lg:mx-0"
                >
                  {product_name}
                </h1>
                <div className="relative mb-5">
                  <div className="text-xl text-red-500 font-medium mb-1">
                    {formatPrice(price)}
                  </div>
                  <Star stars={rate} reviews={reviews_num}></Star>
                </div>
                <p className="mb-8 text-gray-700 mb-5">
                  <span className="block font-bold text-lg mb-2">
                    Description:
                  </span>
                  {description}
                </p>
                <div className="w-full flex flex-wrap justify-between items-stretch border-b-2 border-gray-300 mb-4 product-data-warranty">
                  <div className="text-center flex flex-col items-center product-warranty-data w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                    <TbTruckDelivery className="bg-gray-200 rounded-full w-16 h-16 p-2 warranty-icon" />
                    <p className="text-base md:text-lg lg:text-lg p-2 md:p-4">
                      Cash on Delivery
                    </p>
                  </div>

                  <div className="text-center flex flex-col items-center product-warranty-data w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                    <TbReplace className="bg-gray-200 rounded-full w-16 h-16 p-2 warranty-icon" />
                    <p className="text-base md:text-lg lg:text-lg p-2 md:p-4">
                      30 Days Free Returns
                    </p>
                  </div>

                  <div className="text-center flex flex-col items-center product-warranty-data w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                    <TbTruckDelivery className="bg-gray-200 rounded-full w-16 h-16 p-2 warranty-icon" />
                    <p className="text-base md:text-lg lg:text-lg p-2 md:p-4">
                      Fast Delivery
                    </p>
                  </div>

                  <div className="text-center flex flex-col items-center product-warranty-data w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                    <MdSecurity className="bg-gray-200 rounded-full w-16 h-16 p-2 warranty-icon" />
                    <p className="text-base md:text-lg lg:text-lg p-2 md:p-4">
                      100% Authentic
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="bg-primary py-4 px-8 text-white"
                >
                  Add to cart
                </button>
              </div>
            </div>
            {/* text */}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
