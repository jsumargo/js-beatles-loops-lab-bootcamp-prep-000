function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length(); i++) {
    for (var j = 0; j < instruments.length(); j ++) {
      array.push(musicians[i] + "plays" + instruments[j]);
    }
  }
  return array;
}
