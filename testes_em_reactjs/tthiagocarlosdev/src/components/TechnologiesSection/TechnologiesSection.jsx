import './TechnologiesSection.css';

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import LineWithArrow from '../LineWithArrow/LineWithArrow';

function TechnologiesSection(){
    return (
        <section id="section-tecnologias" className="display-flex-center-center">
            <div className="section-tecnologias page-width">
                <SectionSubtitle subtitle="Tecnologias" />
                <LineWithArrow/>
                <div className="container-technology-icons display-flex-center-center">
                    <div className="box-technologies-icons display-flex-center-center"> <i className="fa-brands fa-html5"></i> </div>
                    <div className="box-technologies-icons display-flex-center-center"> <i className="fa-brands fa-css3-alt"></i> </div>
                    <div className="box-technologies-icons display-flex-center-center"> <i className="fa-brands fa-js"></i> </div>
                    <div className="box-technologies-icons display-flex-center-center"> <i className="fa-brands fa-react"></i> </div>
                    <div className="box-technologies-icons display-flex-center-center"> <i className="fa-brands fa-git-alt"></i> </div>
                    <div className="box-technologies-icons display-flex-center-center"> <i className="fa-brands fa-github"></i> </div>
                    <div className="box-technologies-icons display-flex-center-center"> <i className="fa-brands fa-node-js"></i> </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;