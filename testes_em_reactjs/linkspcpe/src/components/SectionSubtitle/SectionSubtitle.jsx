import './SectionSubtitle.css'

const SectionSubtitle = ( { sectionSubtitle } ) => {
    return ( 
        <div className="section-subtitle display-flex-center-center">
            <h2 className="subtitle">{sectionSubtitle}</h2>
        </div>
     );
}

export default SectionSubtitle;