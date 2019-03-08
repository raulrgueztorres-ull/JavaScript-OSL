var songs = []; // Array con URL de canciones
var currentSong = 0;
var audio = document.getElementById('song');
var lcd = document.querySelector('#lcd span');
var volumen = 1;

songs[0] = 'https://scummbar.com/mi2/MI4-CD1/08%20-%20Melee%20Map.mp3';
songs[1] = 'https://scummbar.com/mi2/MI4-CD1/29%20-%20Prisoner%20in%20the%20Vault.mp3';
songs[2] = 'https://scummbar.com/mi2/MI4-CD1/01%20-%20Main%20Titles.mp3';
songs[3] = 'https://scummbar.com/mi2/MI3-CD2/21%20-%20The%20Goodsoup%20Family%20Hotel.mp3';
songs[4] = 'https://scummbar.com/mi2/MI2-CD2/03%20-%20If%20This%20Is%20Three.mp3';


audio.src = songs[0];


function reproducir()
{
  audio.src = songs[currentSong];
  audio.play();
}

function pausa()
{
  audio.pause();
  lcd.innerHTML = 'Pause';
}

function siguiente()
{
  currentSong += 1;
  if(currentSong >= songs.length)
  {
    currentSong = 0;
  }
    audio.src = songs[currentSong];
    audio.play();
}

function mostrar()
{
  var index = songs[currentSong].lastIndexOf('/') + 1;
  var index_2 = songs[currentSong].indexOf('.',index);
  var sub = songs[currentSong].substring(index, index_2);
  
  lcd.textContent = sub.replace(/%20/g, ' ');
}

function bajar_v()
{
  if(audio.volume > 0)
    audio.volume = volumen - 0.1;
  volumen = audio.volume;
}

function subir_v()
{
  if(audio.volume < 1)
    audio.volume = volumen + 0.1
  volumen = audio.volume;
}