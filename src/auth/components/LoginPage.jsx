
import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';

const LoginPage = () => {

  useEffect(() => {
    const takeScreenshot = () => {
      html2canvas(document.body).then(canvas => {
        // Convert canvas to base64 image data
        const imageData = canvas.toDataURL('image/png');
        // Send imageData to server or save locally as needed
        console.log('Screenshot taken:', imageData);
      });
    };

    // Function to take screenshots at random intervals within 10 minutes
    const takeScreenshotsRandomly = () => {
      const randomInterval = Math.random() * 600000; // Random time between 0 to 10 minutes (in milliseconds)
      setTimeout(() => {
        takeScreenshot();
        takeScreenshotsRandomly(); // Schedule the next screenshot
      }, randomInterval);
    };

    // Initial call to start taking screenshots
    takeScreenshotsRandomly();

    // Cleanup function (optional)
    return () => {
      // Clean up any timers or resources if necessary
    };
  }, []);
  return (
    <>
      <div>
        <h1>Automatic Screenshot Component</h1>
        {/* Your component UI */}
      </div>
    </>
  )
}

export default LoginPage