var video = document.querySelector('#sleeping-video')
var audio = document.querySelector('#sleeping-audio')
var pauseButton = document.querySelector('#play-pause')

var togglePlaying = function(options) {
  if (options.force || (video.paused && video.paused)) {
    video.play()
    audio.play()
    pauseButton.innerHTML = 'Pause'
  } else {
    video.pause()
    audio.pause()
    pauseButton.innerHTML = 'Play'
  }
}

pauseButton.addEventListener('click', togglePlaying, true)

audio.addEventListener('ended', function() {
  pauseButton.innerHTML = 'Play'
})

togglePlaying({force: true})
