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

        <ProgressBar done={5} />
      </div>
    </div>
  );
}

export default Dashboard;
