import "./ServerDetails.css";

const ServerDetailCard = ({ label, value }) => {

  return (
    <div className="mc-info-card">
      <span className="mc-info-label">{label}</span>
      <span className="mc-info-value">{value}</span>
    </div>
  );
};

const ServerDetails = ({ serverDetails }) => {
  return (
    <div className="mc-info-grid">
      {serverDetails.map((serverDetails) => (
        <ServerDetailCard key={serverDetails.service} {...serverDetails} />
      ))}
    </div>
  );
};

export default ServerDetails;
