function _drum(e) {
    let _sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let _keys = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!_sound) return null
    _keys.classList.add('playing')
    _sound.currentTime = 0
    _sound.play()
    setTimeout(function() {
        _keys.classList.remove('playing'), 300
    })
}
window.addEventListener("keydown", _drum)