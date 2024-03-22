chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const video = document.querySelector('video');
    let adjustedStartTime = request.startTime;
  
    if (video) {
      const checkAd = setInterval(() => {
        if (!video.classList.contains('ad-showing')) {  // This class name is hypothetical and should be determined by observing the video player's classes during ad playback
          clearInterval(checkAd);
          video.currentTime = adjustedStartTime;
          video.play();
          
          video.addEventListener('timeupdate', () => {
            if (video.currentTime >= request.endTime || video.currentTime < adjustedStartTime) {
              video.currentTime = adjustedStartTime;
            }
          });
        }
      }, 1000); // Check every second if the ad is finished
    }
  });