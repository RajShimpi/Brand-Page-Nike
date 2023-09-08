const Hero = () => {
  return (
    <main className="hero container">
      <div className="herocontent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="herobtn">
          <button>Shop Now</button>
          <button className="secbtn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brandicon">
            <img src="/img/amazon.png" alt="amazon-logo"/>
            <img src="/img/flipkart.png" alt="flipkart-logo"/>
          </div>
        </div>
      </div>
      <div className="heroimg">
            <img src="/img/shoe_image.png" alt="shoe_image-logo"/>
        
      </div>
    </main>
  );
};
export default Hero;
