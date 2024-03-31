import "./SupportButton.css";

const SupportButton = () => {
  return (
    <section className="support-button">
      <div className="terms-of-service-link">
        <div
          className="discover-the-latest-anime-parent"
          data-scroll-to="groupContainer"
        >
          <h1 className="discover-the-latest">Discover the Latest Anime</h1>
          <div className="stay-updated-with-the-newest-a-parent">
            <h2 className="stay-updated-with">
              Stay updated with the newest anime releases and news
            </h2>
            <div className="frame-container">
              <div className="rectangle-parent">
                <div className="frame-inner" />
                <div className="frame-div">
                  <div className="rectangle-group">
                    <div className="rectangle-div" />
                    <div className="romance-wrapper">
                      <div className="romance">Romance</div>
                    </div>
                  </div>
                  <div className="min-read-wrapper">
                    <div className="min-read">5 min read</div>
                  </div>
                </div>
                <div className="frame-parent1">
                  <div className="frame-parent2">
                    <img className="group-icon" alt="" src="/group-3@2x.png" />
                    <h3 className="love-and-heartbreak">
                      Love and Heartbreak: The Most Romantic Anime Series
                    </h3>
                  </div>
                  <img
                    className="rectangle-icon"
                    loading="lazy"
                    alt=""
                    src="/rectangle-9@2x.png"
                  />
                </div>
                <div className="emotion-prompt">
                  <div className="a-sign-of-container">
                    <p className="a-sign-of">A SIGN OF AFFECTION</p>
                    <p className="experience-the-emotional">{`Experience the emotional rollercoaster of romance anime and its captivating stories   `}</p>
                  </div>
                  <div className="read-more-parent">
                    <div className="read-more">Read more</div>
                    <div className="vector-wrapper">
                      <img
                        className="vector-icon"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-navigation">
              <div className="rectangle-container">
                <div className="frame-child1" />
                <div className="view-all">View all</div>
              </div>
            </div>
          </div>
        </div>
        <div className="terms-of-service-link-inner">
          <div className="group-div">
            <div className="frame-parent3">
              <img
                className="frame-child2"
                loading="lazy"
                alt=""
                src="/group-9@2x.png"
              />
              <img
                className="frame-child3"
                alt=""
                src="/group-4@2x.png"
                data-scroll-to="groupImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportButton;
