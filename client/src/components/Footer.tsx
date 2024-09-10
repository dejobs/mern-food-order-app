const Footer = () => {
  return (
    <div className="bg-red-500 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="font-semibold text-2xl tracking-tight text-white">
          EatRite.com
        </span>
        <span className="flex gap-4 font-semibold text-white tracking-tight">
          <span>Privacy Policy</span>
          <span>Terms of services</span>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
