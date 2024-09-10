import hero from "../assets/hero3.jpg";

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        className="w-full max-h-[600px]  object-cover object-center"
      />
    </div>
  );
};

export default Hero;
