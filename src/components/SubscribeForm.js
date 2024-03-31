import "./SubscribeForm.css";

const SubscribeForm = () => {
  return (
    <div className="subscribe-form">
      <div className="join-our-community-parent">
        <div className="join-our-community">
          <div className="anime-go-logo">
            <div className="explore-top-anime-movies">
              <div className="explore-the-top-anime-movies-a-parent">
                <h1 className="explore-the-top">
                  Explore the Top Anime Movies Available for Purchase
                </h1>
                <h3 className="explore-the-top1">
                  Explore the Top Anime Movies Available for Purchase
                </h3>
              </div>
            </div>
            <div className="subscribe-command">
              <div className="privacy-policy-link-wrapper">
                <div className="privacy-policy-link">
                  <img
                    className="privacy-policy-link-child"
                    alt=""
                    src="/rectangle-4.svg"
                  />
                  <div className="explore">Explore</div>
                </div>
              </div>
              <div className="shop-parent">
                <h1 className="shop">Shop</h1>
                <img className="frame-child" alt="" src="/rectangle-5.svg" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/rectangle-3@2x.png"
        />
      </div>
    </div>
  );
};

export default SubscribeForm;
