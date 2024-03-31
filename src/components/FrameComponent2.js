import { useCallback } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const onLatestAnimeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGenresTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='exploreTheRealm']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className="frame-group">
      <div className="sign-up-button-parent">
        <div className="sign-up-button" />
        <div className="animego">Anime.GO</div>
      </div>
      <nav className="frame-wrapper">
        <nav className="explore-anime-parent">
          <h3 className="explore-anime">Explore Anime</h3>
          <h3 className="latest-anime" onClick={onLatestAnimeTextClick}>
            Latest Anime
          </h3>
          <div className="pricing-parent">
            <h3 className="pricing" onClick={onPricingTextClick}>
              Pricing
            </h3>
            <h3 className="genres" onClick={onGenresTextClick}>
              Genres
            </h3>
          </div>
        </nav>
      </nav>
      <div className="explore-button-wrapper">
        <div className="explore-button">
          <div className="wrapper-rectangle-2">
            <img
              className="wrapper-rectangle-2-child"
              loading="lazy"
              alt=""
              src="/rectangle-2.svg"
            />
          </div>
          <div className="sign-up">Sign Up</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
