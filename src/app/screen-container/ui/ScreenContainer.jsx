import './ScreenContainer.scss';
import isMobile from '../../../shared/lib/isMobile';
import { useEffect } from 'react';

const ScreenContainer = ({children}) => {

  const device_type = isMobile.any()?.[0] ? 'phone' : 'pc';

  useEffect(() => {
    console.log(isMobile.any()?.[0]);
  }, [])

  return (
    <div className={`screen-container ${device_type}`}>
      <div className="content">
        {children}
      </div>
    </div>
  );
}
 
export default ScreenContainer;