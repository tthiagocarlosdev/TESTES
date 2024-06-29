import "./SectionSubtitle.css"

const SectionSubtitle = ({ subtitle }) => {
  return (
    <div className="subtitle-section display-flex-center-center">
      <h3>{subtitle}</h3>
    </div>
  );
};

export default SectionSubtitle;