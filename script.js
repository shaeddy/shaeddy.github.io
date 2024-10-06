// player.js
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoSrc = urlParams.get('video');
    if (videoSrc) {
        const videoPlayer = document.getElementById('videoPlayer');
        const videoSource = document.getElementById('videoSource');
        videoSource.src = videoSrc;
        videoPlayer.load();
        videoPlayer.play();
    }
};
