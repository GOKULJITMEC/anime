import FrameComponent2 from "../components/FrameComponent2";
import SubscribeForm from "../components/SubscribeForm";
import SupportButton from "../components/SupportButton";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="main-content">
        <FrameComponent2 />
        <SubscribeForm />
      </section>
      <SupportButton />
      <FrameComponent1 />
      <section className="home-inner">
        <div className="frame-parent">
          <GroupComponent1 />
          <GroupComponent />
          <FrameComponent />
        </div>
      </section>
      <div className="image-3" />
      <div className="privacy-policy">
        <div className="animego-all">{`© 2024 Anime.Go . All rights reserved  Privacy Policy  Terms of Service  Cookies Settings                                                             `}</div>
      </div>
    </div>
  );
};

export default Home;
