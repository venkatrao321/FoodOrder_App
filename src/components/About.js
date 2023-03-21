const About = () => {
  return (
    <>
      <div className="position-relative text-center ">
        <div className="about-image">
          <h1 className="position-absolute top-50 start-50 translate-middle ">ABOUT US</h1>
          <img
            src="https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-italian-blue-scaled.jpg"
            alt="About_img"
          />
        </div>
        <div className=" container about-us">
          <p>"Bringing good food into your everyday. That's our mission.</p>
          <p>
            That means we don't just deliver--we bring it, always going the
            extra mile to make your experience memorable.
          </p>
          <p>
            And it means this is delicious food you can enjoy everyday: from
            vibrant salads for healthy office lunches, to indulgent family-sized
            pizzas, to fresh sushi for a romantic night in. Whatever you crave,
            we can help."
          </p>
          <p>
            We build innovative products & solutions that deliver unparalleled
            convenience to urban consumers. The best part? Every bit of your
            work at Foode will help elevate the lives of our users across India.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
