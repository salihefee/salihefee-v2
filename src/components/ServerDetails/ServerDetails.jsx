import "./ServerDetails.css";

const ServerDetailCard = ({ label, value }) => {
  return (
    <div className="mc-info-card">
      <span className="mc-info-label">{label}</span>
      <span className="mc-info-value">{value}</span>
    </div>
  );
};

const ServerDetails = ({ serverDetailsArray }) => {
  return (
    <div className="mc-info-grid">
      {serverDetailsArray.map((detail) => (
        <ServerDetailCard key={detail.label} {...detail} />
      ))}
    </div>
  );
};

export default ServerDetails;
