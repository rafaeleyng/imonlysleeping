var video = document.querySelector('#sleeping-video')
var audio = document.querySelector('#sleeping-audio')
var pauseButton = document.querySelector('#play-pause')
var isPlaying = true

var togglePlaying = function(play) {
  if (play) {
    video.play()
    audio.play()
    pauseButton.innerHTML = 'Pause'
  } else {
    video.pause()
    audio.pause()
    pauseButton.innerHTML = 'Play'
  }
  isPlaying = play
}

pauseButton.addEventListener('click', function() {
  togglePlaying(!isPlaying)
}, true)

audio.addEventListener('ended', function() {
  pauseButton.innerHTML = 'Play'
})

togglePlaying(true)
