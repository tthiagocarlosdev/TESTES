import "./SectionSubtitle.css"

const SectionSubtitle = ({ subtitle }) => {
  return (
    <div className="sectionTitle displayFlexCenterCenter">
      <h3>{subtitle}</h3>
    </div>
  );
};

export default SectionSubtitle;