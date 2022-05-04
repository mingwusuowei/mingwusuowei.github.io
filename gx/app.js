'use strict';

const videoElement = document.getElementById('video');

let extensionInstalled = false;

document.getElementById('start').addEventListener('click', function() {
  // send screen-sharer request to content-script
  if (!extensionInstalled) {
    const message = 'Please install the extension:\n' +
        '1. 去chrome://extensions\n' +
        '2. 选中：“启用开发人员模式”\n' +
        '3. 单击：“加载未打包的扩展…”\n' +
        '4. 从存储库中选择“扩展”文件夹\n' +
        '5. 重新加载此页面';
    alert(message);
  }
  window.postMessage({type: 'SS_UI_REQUEST', text: 'start'}, '*');
});

// listen for messages from the content-script
window.addEventListener('message', function(event) {
  if (event.origin !== window.location.origin) {
    return;
  }

  // content-script will send a 'SS_PING' msg if extension is installed
  if (event.data.type && (event.data.type === 'SS_PING')) {
    extensionInstalled = true;
  }

  // user chose a stream
  if (event.data.type && (event.data.type === 'SS_DIALOG_SUCCESS')) {
    startScreenStreamFrom(event.data.streamId);
  }

  // user clicked on 'cancel' in choose media dialog
  if (event.data.type && (event.data.type === 'SS_DIALOG_CANCEL')) {
    console.log('User cancelled!');
  }
});

function handleSuccess(screenStream) {
  videoElement.srcObject = screenStream;
  videoElement.play();
}

function handleError(error) {
  console.log('getUserMedia() failed: ', error);
}

function startScreenStreamFrom(streamId) {
  const constraints = {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: streamId,
        maxWidth: window.screen.width,
        maxHeight: window.screen.height
      }
    }
  };
  navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess).catch(handleError);
}
