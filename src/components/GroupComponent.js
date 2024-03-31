import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <div className="rectangle-parent3">
      <div className="frame-child7" />
      <h2 className="terms">{`Terms        `}</h2>
      <div className="frame-wrapper1">
        <div className="privacy-parent">
          <div className="privacy">Privacy</div>
          <div className="shipping-wrapper">
            <div className="shipping">Shipping</div>
          </div>
          <div className="pricing-categories">
            <div className="returns">Returns</div>
          </div>
          <div className="return-policy">
            <div className="blog">Blog</div>
          </div>
          <div className="careers-wrapper">
            <div className="careers">{`Careers `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
