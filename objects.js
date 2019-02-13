var playlist = {
  Slowdive:'Allison',
  'My Bloody Valentine': 'Sometimes'
};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = 'songTitle';
    return updatePlaylist(playlist, "John Ochs":"Here\'s to the State of Mississippi");
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
}