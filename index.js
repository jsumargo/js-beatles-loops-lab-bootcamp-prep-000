function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(array) {
  for (var i = 0; i < array.length; i++){
    array[i] += "!!!";
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do{
    array.push("I love the Beatles!");
    n--;
  } while (n >= 0 && n < 15);
  return array;
}
