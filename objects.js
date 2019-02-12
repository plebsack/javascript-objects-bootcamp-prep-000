var playlist = {
  'Nickleback': "Garbage",
  'Prince': "Purple Rain",
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}