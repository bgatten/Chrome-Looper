document.getElementById('loop').addEventListener('click', () => {
    let startTime = document.getElementById('start-time').value;
    let endTime = document.getElementById('end-time').value;
    
    // Send the start and end times to the content script
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {startTime, endTime});
    });
  });
  
// document.getElementById('loop').addEventListener('click', () => {
//     const startTime = document.getElementById('start-time').value;
//     const endTime = document.getElementById('end-time').value;
  
//     chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//       chrome.scripting.executeScript({
//         target: {tabId: tabs[0].id},
//         function: setLoopTimes,
//         args: [startTime, endTime]
//       });
//     });
//   });
  
//   function setLoopTimes(startTime, endTime) {
//     chrome.runtime.sendMessage({startTime, endTime});
//   }
  