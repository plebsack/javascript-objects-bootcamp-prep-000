var playlist = {
  'Nickleback': "Garbage",
  'Prince': "Purple Rain",
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist.assign({}, playlist, {[artitName]: songTitle})
}