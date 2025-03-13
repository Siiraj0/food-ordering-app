const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10) // Show 10 shimmer placeholders
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text small"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text small"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
