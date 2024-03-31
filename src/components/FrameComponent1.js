import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="home-child">
      <div className="media-placeholder-parent">
        <div className="media-placeholder">
          <h1 className="at-anime-movies">{`At Anime Movies for Sales, we are passionate about bringing you the best selection of Anime movies. Whether you're a fan of action-packed adventures or heartwarming stories, we have something for everyone. Explore our collection today and start your Anime movie journey!    `}</h1>
        </div>
        <h1 className="explore-the-realm" data-scroll-to="exploreTheRealm">
          Explore the realm of Anime films and uncover your top picks.
        </h1>
        <div className="rectangle-parent1">
          <div className="frame-child4" />
          <div className="image-1-parent">
            <img
              className="image-1-icon"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <img
              className="frame-child5"
              loading="lazy"
              alt=""
              src="/rectangle-12@2x.png"
            />
          </div>
          <img
            className="image-2-icon"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
