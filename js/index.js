let album = [
  new Audio('./tracks/01 Dark Fantasy.mp3'),
  new Audio('./tracks/02 Gorgeous (feat. Raekwon and Kid Cudi).mp3'),
  new Audio('./tracks/03 Power.mp3'),
  new Audio('./tracks/04 All of the Lights (Interlude).mp3'),
  new Audio('./tracks/05 All of the Lights.mp3'),
  new Audio('./tracks/06 Monster (feat. Jay-Z, Rick Ross, Nicki Minaj, and Bon Iver).mp3'),
  new Audio('./tracks/07 So Appalled (feat. Jay-Z, Pusha T, Prynce CyHi, Swizz Beatz, and RZA).mp3'),
  new Audio('./tracks/08 Devil in a New Dress (feat.Rick Ross).mp3'),
  new Audio('./tracks/09 Runaway (feat. Pusha T).mp3'),
  new Audio('./tracks/10 Hell of a Life.mp3'),
  new Audio('./tracks/11 Blame Game (feat. John Legend).mp3'),
  new Audio('./tracks/12 Lost in the World (feat. Bon Iver).mp3')
];

let titles = [
  'Dark Fantasy', 'Gorgeous (feat. Raekwon and Kid Cudi)', 'Power', 'All of the Lights(Interlude)',
  'All of the Lights', 'Monster (feat. Jay-Z, Rick Ross, Nicki Minaj, and Bon Iver)',
  'So Appalled (feat. Jay-Z, Pusha T, Prynce CyHi, Swizz Beatz, and RZA)', 'Devil in a New Dress (feat.Rick Ross).mp3',
  'Runaway (feat. Pusha T)', 'Hell of a Life', 'Blame Game (feat. John Legend)', 'Lost in the World (feat. Bon Iver)'
]

var selectedTrack = album[0];
var selectedTrackIndex = 0;
var lastPlayed = [];
var shuffled = false;
var shuffledAlbum;

//like & shuffle button
$('.heart').click(function(){
  $(this).toggleClass('clicked');
});

$('.shuffle').click(function(){
  $(this).toggleClass('clicked');
});

//music player settings

$('.pause').hide(); //hide pause button until clicked
$('.tracklist').hide(); //hide pause button until clicked

//play button
$('.play').click(function(){
  $('#song-playing').text(titles[selectedTrackIndex]);
   selectedTrack.play();
  $('.play').hide();
  $('.pause').show();
  console.log("pressed play");
});

//pause button
$('.pause').click(function(){
   selectedTrack.pause();
  $('.play').show();
  $('.pause').hide();
});

$('.next').click(function(){
  lastPlayed.push(selectedTrackIndex);
  if (shuffled == false) {
    if (selectedTrackIndex != album.length - 1) {
      selectedTrackIndex++;
      selectedTrack = album[selectedTrackIndex];
    } else {
      selectedTrackIndex = 0;
      selectedTrack = album[0];
    }
  } else {
    shuffledAlbum = shuffle(album);
  }
    selectedTrack.pause();
    $('play').click();
    console.log("ending statemnt");
});

$('.shuffle').click(function(){
    toggleShuffle();
});

$('.previous').click(function(){
  let lastIndex = lastPlayed.pop();
  selectedTrackIndex = lastIndex
  selectedTrack.pause();
  $('play').click();
});

$('.option').click(function(){
  console.log("options button working");
  $('.tracklist').show();
});

$('.volume').click(function(){
  console.log("volume button working");



});

$('#track-1').click(function(){
   selectedTrackIndex = 0;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-2').click(function(){
   selectedTrackIndex = 1;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-3').click(function(){
   selectedTrackIndex = 2;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-4').click(function(){
   selectedTrackIndex = 3;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-5').click(function(){
   selectedTrackIndex = 4;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-6').click(function(){
   selectedTrackIndex = 5;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-7').click(function(){
   selectedTrackIndex = 6;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-8').click(function(){
   selectedTrackIndex = 7;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-9').click(function(){
   selectedTrackIndex = 8;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-10').click(function(){
   selectedTrackIndex = 9;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('#track-11').click(function(){
   selectedTrackIndex = 10;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});

$('.track-12').click(function(){
   selectedTrackIndex = 11;
   $('#song-playing').text(titles[selectedTrackIndex]);
   $('.play').onClick();
});


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function toggleShuffle(){
  if (shuffled == false) {
    shuffled = true;
  } else {
    shuffled = false;
  }
}
