import { useState, useEffect, useRef, CSSProperties } from 'react';

import './styles.scss';

interface ProgressBarProps {
  progressBarPercentageDone: number;
  maxSpace?: number;
}

let getProgressBarTotalWidthInPixels: number;
function ProgressBar({
  progressBarPercentageDone,
  maxSpace = 0,
}: ProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<CSSProperties>();
  const [maxUploadSpace, setMaxUploadSpace] = useState<number>(0);
  const [freeUploadSpace, setFreeUploadSpace] = useState<number>(0);
  const [usedUploadSpace, setUsedUploadSpace] = useState<number>(0);

  useEffect(() => {
    // Reset max space every time the maximum space is changed
    setMaxUploadSpace(maxSpace);
  }, [maxSpace]);

  useEffect(() => {
    // Transforms the progress bar percentage done value passed in the props in pixels to be based on the progress bar width
    if (progressBarRef.current) {
      getProgressBarTotalWidthInPixels =
        (progressBarPercentageDone / 100) * progressBarRef.current.offsetWidth;
    }

    // If the progress bar done value is less or equal than the start value(18px) the set to 18px in REMs
    if (getProgressBarTotalWidthInPixels <= 18) {
      const startWidth = {
        width: `1.125rem`,
      };

      setWidth(startWidth);
      return;
    }

    // If the progress bar done value is more than the start value(18px) then set the bar width percentage
    const newWidth = {
      width: `${progressBarPercentageDone}%`,
    };

    // Calculate the remaining free space
    const remainingFreeUploadSpace =
      maxUploadSpace - (progressBarPercentageDone / 100) * maxUploadSpace;

    // Calculate the used space
    const totalUsedUploadSpace =
      (progressBarPercentageDone / 100) * maxUploadSpace;

    // Set states
    setWidth(newWidth);
    setFreeUploadSpace(remainingFreeUploadSpace);
    setUsedUploadSpace(totalUsedUploadSpace);
  }, [maxSpace, progressBarPercentageDone, maxUploadSpace]);

  return (
    <div className="fylo-upload-progress_bar">
      <div className="fylo-upload-progress_bar-content">
        <div className="fylo-progress_bar-title">
          <span>
            You&#39;ve used <strong>{usedUploadSpace} GB</strong> of your
            storage
          </span>
        </div>

        <div ref={progressBarRef} className="fylo-progress_bar">
          <div className="fylo-progress_bar-done" style={width}>
            <span className="white_dot" />
          </div>
        </div>

        <div className="fylo-progress_bar-space">
          <strong>0 GB</strong>

          <strong>{maxSpace} GB</strong>
        </div>
      </div>

      <div className="fylo-upload-tooltip">
        <strong>{freeUploadSpace}</strong>

        <span>gb left</span>
      </div>
    </div>
  );
}

export default ProgressBar;
