import fyloLogo from '../../assets/logo.svg';
import fyloDocument from '../../assets/icon-document.svg';
import fyloFolder from '../../assets/icon-folder.svg';
import fyloUpload from '../../assets/icon-upload.svg';

import './styles.scss';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="fylo-content">
        <div className="fylo-upload-card">
          <div className="fylo-card-logo">
            <img src={fyloLogo} alt="fylo-logo" />
          </div>

          <div className="fylo-btns">
            <div className="fylo-btn">
              <img src={fyloDocument} alt="fylo-document" />
            </div>

            <div className="fylo-btn">
              <img src={fyloFolder} alt="fylo-folder" />
            </div>

            <div className="fylo-btn">
              <img src={fyloUpload} alt="fylo-upload" />
            </div>
          </div>
        </div>

        <div className="fylo-upload-progress_bar">
          <div className="fylo-upload-progress_bar-content">
            <div className="fylo-progress_bar-title">
              <span>You&#39;ve used 815 GB of your storage</span>
            </div>

            <div className="fylo-progress_bar">
              <span />
            </div>

            <div className="fylo-progress_bar-space">
              <strong>0 GB</strong>

              <strong>1000 GB</strong>
            </div>
          </div>

          <div className="fylo-upload-tooltip">
            <strong>185</strong>

            <span>gb left</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
