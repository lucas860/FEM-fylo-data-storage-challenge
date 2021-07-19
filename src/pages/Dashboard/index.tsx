import ProgressBar from '../../components/ProgressBar';

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
            <button type="button" className="fylo-btn">
              <img src={fyloDocument} alt="fylo-document" />
            </button>

            <button type="button" className="fylo-btn">
              <img src={fyloFolder} alt="fylo-folder" />
            </button>

            <button type="button" className="fylo-btn">
              <img src={fyloUpload} alt="fylo-upload" />
            </button>
          </div>
        </div>

        <ProgressBar progressBarPercentageDone={81.5} maxSpace={1000} />
      </div>
    </div>
  );
}

export default Dashboard;
