import { useState, useEffect } from 'react';

import './styles.scss';

interface ProgressBarProps {
  done: number;
}

function ProgressBar({ done }: ProgressBarProps) {
  const [width, setWidth] = useState({});

  useEffect(() => {
    const newWidth = {
      width: `${done}%`,
    };

    setWidth(newWidth);
  }, [done]);

  return (
    <div className="fylo-upload-progress_bar">
      <div className="fylo-upload-progress_bar-content">
        <div className="fylo-progress_bar-title">
          <span>You&#39;ve used 815 GB of your storage</span>
        </div>

        <div className="fylo-progress_bar">
          <div className="fylo-progress_bar-done" style={width}>
            <span className="white_dot" />
          </div>
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
  );
}

export default ProgressBar;
