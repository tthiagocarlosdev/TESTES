
import GeneralLinksSection from '../GeneralLinksSection/GeneralLinksSection';
import QueriesLinksSection from '../QueriesLinksSection/QueriesLinksSection';
import OthersLinksSection from '../OthersLinksSection/OthersLinksSection';
// import DtiLinksSection from '../DtiLinksSection/DtiLinksSection';
// import DownloadLinksSection from '../DownloadLinksSection/DownloadLinksSection';


const Main = () => {
  return ( 
    <div className="main display-flex-center-center">
      <GeneralLinksSection/>
      <QueriesLinksSection/>
      <OthersLinksSection />
      {/* <DtiLinksSection />
      <DownloadLinksSection /> */}
    </div>
   );
}
 
export default Main;