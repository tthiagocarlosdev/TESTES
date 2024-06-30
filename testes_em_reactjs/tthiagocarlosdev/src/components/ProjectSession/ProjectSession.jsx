import './ProjectSession.css';

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import LineWithArrow from '../LineWithArrow/LineWithArrow';
import Card from '../Card/Card';
import projects from '../ProjectPaths/ProjectPaths';

function ProjectSession () {
    return ( 
        <section id="projects-section" className="display-flex-center-center">
            <div className="projects-section page-width display-flex-center-center">
                <SectionSubtitle subtitle="Projetos" />
                <LineWithArrow/>
                <div className="cards-container display-flex-center-center">
                    {projects.length > 0 ? (
                        projects.map((projeto, index) => (
                            <Card
                            key={index}
                            projectImage={projeto.projectImage}
                            projectText={projeto.projectText}
                            projectAddress={projeto.projectAddress}
                            />
                        ))
                    ) : (
                        <p className="paragraph-no-project display-flex-center-center">Nenhum projeto disponível no momento.</p>
                    )}
                </div>
            </div>
        </section>
     );
};

export default ProjectSession;