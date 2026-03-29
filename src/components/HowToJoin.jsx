import "./HowToJoin.css";

const HowToJoin = ({ steps }) => {
  return (
    <div className="mc-steps">
      {steps.map((step) => (
        <div className="mc-step" key={step.num}>
          <span className="mc-step-num">{step.num}</span>
          <div className="mc-step-content">
            <p className="mc-step-title">{step.title}</p>
            <p className="mc-step-desc">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowToJoin;
