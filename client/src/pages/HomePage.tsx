import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl text-orange-600 fot-bold tracking-tight">
          Get some delicious takeout today
        </h1>
        <span className="text-xl">Food is just a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5 ">
        <img src={landingImage} alt="landing image" />
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <span className="text-3xl font-bold tracking-tighter">
            So what are you waiting for today?
          </span>
          <span>
            Download the EatRite App for faster ordering and personalized
            recomendations
          </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
