import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1 className="text-xl">All Products</h1>
      <div>
        Search by title:{""}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      <div className="cards">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.images[0].url} />
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <button>
                <a href={`/products/${product.id}`}>More Info</a>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
