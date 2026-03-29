import "./HowToJoin.css";

const JoinStep = ({ num, title, desc }) => {
  return (
    <div className="mc-step">
      <span className="mc-step-num">{num}</span>
      <div className="mc-step-content">
        <p className="mc-step-title">{title}</p>
        <p className="mc-step-desc">{desc}</p>
      </div>
    </div>
  );
};

const HowToJoin = ({ steps }) => {
  return (
    <div className="mc-steps">
      {steps.map((step) => (
        <JoinStep key={step.num} {...step} />
      ))}
    </div>
  );
};

export default HowToJoin;
