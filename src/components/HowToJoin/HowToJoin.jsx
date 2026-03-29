import "./HowToJoin.css";

const JoinStep = ({ num, title, desc }) => {
  return (
    <div className="mc-step">
      <span className="mc-step-num">{num}</span>
      <div className="mc-step-content">
        <div className="mc-step-title">{title}</div>
        <div className="mc-step-desc">{desc}</div>
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
