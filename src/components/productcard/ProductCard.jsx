const ProductCard = () => {
  return (
    <div>
      <div class="card card-compact  bg-base-100 shadow-xl w-fit">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Running shoes</h2>
          <h3 className=" text-2xl font-bold text-accent">CAD 59.99</h3>
          <p>Good for running</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary max-w-fit">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
