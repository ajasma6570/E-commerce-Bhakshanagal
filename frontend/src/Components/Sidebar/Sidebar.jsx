import React, { useState } from "react";

export default function Sidebar() {
  const [categoryList, setCategoryList] = useState(false);
  const [brandList, setBrandList] = useState(false);
  const [priceList, setPriceList] = useState(false);
  const [clickedIndexes, setClickedIndexes] = useState([]);
 
  const handleCheckboxChange = (index) => {
    // Check if the clicked index already exists in the array
    if (clickedIndexes.includes(index)) {
      // If it exists, remove it from the array
      setClickedIndexes(clickedIndexes.filter((i) => i !== index));
    } else {
      // If it doesn't exist, add it to the array
      setClickedIndexes([...clickedIndexes, index]);
    }
  };

  const ExpandCategory = () => {
    setCategoryList(!categoryList);
  };

  const ExpandBrand = () => {
    setBrandList(!brandList);
  };

  const ExpandPrice = () => {
    setPriceList(!priceList);
  };

  const category = [
    {
      id: 1,
      name: "Spicy",
      count: 15,
    },
    {
      id: 2,
      name: "Sweet",
      count: 45,
    },
    {
      id: 1,
      name: "Nuts & Dry",
      count: 1,
    },
    {
      id: 1,
      name: "Bakes",
      count: 4,
    },
    {
      id: 1,
      name: "Cakes",
      count: 6,
    },
  ];

  const brands = [
    {
      id: 1,
      name: "Kerala",
      count: 19,
    },
    {
      id: 2,
      name: "Bingo",
      count: 21,
    },
    {
      id: 1,
      name: "ChipZz",
      count: 9,
    },
    {
      id: 1,
      name: "Tiger",
      count: 6,
    },
    {
      id: 1,
      name: "Oreo",
      count: 3,
    },
  ];

  const prices =[ {
    id:1,
    name:"₹0.00 - ₹1,000.00",
    count:19
  },
  {
    id:2,
    name:"₹1,000.00 - ₹3000.00",
    count:21
  },
  {
    id:3,
    name:"₹3,000.00 - ₹5,000.00",
    count:9
  },
  {
    id:4,
    name:"₹5,000.00 - ₹7,000.00",
    count:6
  },{
    id:5,
    name:"₹7000.00 And Above ",
    count:3
  }]


  return (
    <div
      className="col-lg-2 col-md-3 col-5 mx-2 h-auto"
     
    >
      <h4 className="text-center">Filters</h4>
      <button className="btn btn-dark w-75 mx-4">Clear Filter</button>

      <section className="mt-4">
        <div class="box border-bottom">
          <div class="box-label text-uppercase d-flex justify-content-around align-items-center">
            <h6 onClick={ExpandCategory} style={{ cursor: "pointer" }}>
              Category{" "}
            </h6>
            <button
              class="btn ml-auto"
              type="button"
              aria-expanded="true"
              aria-controls="inner-box"
              id="out"
              onClick={ExpandCategory}
            >
              <span class="fas fa-plus"></span>
            </button>
          </div>

          {categoryList && (
            <div id="inner-box" className="mt-2 mr-1 mx-4">
              {category.map((category, index) => (
                <div
                  className="my-1 d-flex justify-content-between"
                  key={index}
                >
                  <label
                    className={`tick ${
                      clickedIndexes.includes(index) ? "text-danger" : ""
                    }`}
                  >
                    {category.name}
                    <input
                      type="checkbox"
                      hidden
                      onClick={() => handleCheckboxChange(index)}
                    />
                    <span className="check"></span>
                  </label>
                  <span
                    className={`tick ${
                      clickedIndexes.includes(index) ? "text-danger" : ""
                    }`}
                  >
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mt-4">
        <div class="box border-bottom">
          <div class="box-label text-uppercase d-flex justify-content-around align-items-center">
            <h6 onClick={ExpandBrand} style={{ cursor: "pointer" }}>
              Brand{" "}
            </h6>
            <button
              class="btn ml-auto"
              type="button"
              aria-expanded="true"
              aria-controls="inner-box"
              id="out"
              onClick={ExpandBrand}
            >
              <span class="fas fa-plus"></span>
            </button>
          </div>

          {brandList && (
            <div id="inner-box" className="mt-2 mr-1 mx-4">
              {brands.map((brand, index) => (
                <div
                  className="my-1 d-flex justify-content-between"
                  key={index}
                >
                    <input type="checkbox"  onClick={() => handleCheckboxChange(index)} />
                  <label onClick={() => handleCheckboxChange(index)} className={`tick ${clickedIndexes.includes(index) ? "text-danger" : ""}`}>
                    {brand.name}
                    
                    <span className="check" ></span>
                  </label>
                  <span
                    className={`tick ${
                      clickedIndexes.includes(index) ? "text-danger" : ""
                    }`}
                  >
                    {brand.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      <section className="mt-4">
        <div class="box border-bottom">
          <div class="box-label text-uppercase d-flex justify-content-around align-items-center">
            <h6 onClick={ExpandPrice} style={{ cursor: "pointer" }}>
              Price{" "}
            </h6>
            <button
              class="btn ml-auto"
              type="button"
              aria-expanded="true"
              aria-controls="inner-box"
              id="out"
              onClick={ExpandPrice}
            >
              <span class="fas fa-plus"></span>
            </button>
          </div>

          {priceList && (
            <div id="inner-box" className="mt-2 mr-1 mx-4">
              {prices.map((price, index) => (
                <div
                  className="my-1 d-flex justify-content-between"
                  key={index}
                >
                   
                  <label className={`tick ${clickedIndexes.includes(index) ? "text-danger" : ""}`}>
                    {price.name}
                    <input type="checkbox" hidden  onClick={() => handleCheckboxChange(index)} />
                    <span className="check" ></span>
                  </label>
                  <span
                    className={`tick ${
                      clickedIndexes.includes(index) ? "text-danger" : ""
                    }`}
                  >
                    {price.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
