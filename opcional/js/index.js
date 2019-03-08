//-------------------------Main Text----------------------------------
document.getElementById("logo").innerHTML='<img src="http://thetechnews.com/wp-content/uploads/2018/03/2_The-latest-Marvel-logo.jpg" />';
document.getElementById("information").textContent = "Designed by Raúl Rodríguez Torres";
//--------------------------------------------------------------------
//-------------------------Mute button--------------------------------
var mute = document.getElementById("mute");
mute.innerHTML = '<img src="https://banner2.kisspng.com/20180716/gg/kisspng-computer-icons-user-interface-sound-sound-button-5b4c53393066d4.7519634415317286971983.jpg" />';
//--------------------------------------------------------------------
//-------------------------Audio--------------------------------
var audio = new Audio('https://www.redringtones.com/wp-content/uploads/2018/04/marvel-intro-music-ringtone.mp3');
audio.loop = true;
audio.play();
//--------------------------------------------------------------
//--------------------------Ready-------------------------------
var ready = document.getElementById('ready');
ready.innerHTML = "<h1>LET'S GO</h1>";
//--------------------------------------------------------------

//----------------------------------Función Muteo---------------------------
var sound = true;

function mute_song()
{
  if(sound)
  {
     mute.innerHTML = '<img src="https://banner2.kisspng.com/20180710/thg/kisspng-computer-icons-sound-button-sound-button-5b45747c0a22e2.8193886815312784600415.jpg" />';
  sound = false;
  audio.muted = true;
  }
  else
  {
    mute.innerHTML = '<img src="https://banner2.kisspng.com/20180716/gg/kisspng-computer-icons-user-interface-sound-sound-button-5b4c53393066d4.7519634415317286971983.jpg" />';
    sound = true;
    audio.muted = false;
  }
     
}
//---------------------------------------------------------------------------

//------------------------------Wallpapers---------------------------------------------------
var background = [];
background[0] = 'url("http://www.wallpapermaiden.com/wallpaper/14155/download/2100x1320/iron-man-marvel-comics.jpg")';
background[1] = 'url("http://papers.co/wallpaper/papers.co-au73-hero-captain-america-jeehyunglee-illustration-art-paint-23-wallpaper.jpg")';
background[2] = 'url("http://free.wallpaperbackgrounds.com/comics/black%20widow/163281-20182.jpg")';
background[3] = 'url("https://wallimpex.com/file/load/334/1920x1080-7108303-wallpapers-hulk-3d.jpg")';
background[4] = 'url("https://cdn.allwallpaper.in/wallpapers/1920x1080/12432/comics-thor-mjolnir-1920x1080-wallpaper.jpg")';
background[5] = 'url("https://i2.wp.com/figurascomics.com/wp-content/uploads/2018/07/Ojo-de-Halcon-11.jpg?fit=1920%2C1200&ssl=1")';
background[6] = 'url("https://wallpapercave.com/wp/wp2352931.jpg")';
background[7] = 'url("http://www.hdbilder.eu/p/get_photo/70265/1920/1424")';
//-----------------------------------------------------------------------------------------

//----------------------------Historias----------------------------------------------------
var lore = [];

lore[0] = "Iron Man hizo su primera aparición en Marzo de 1963, en el número 39 de “Tales of suspense”. Creado por Stan Lee y desarrollado por Larry Lieber, Anthony Edward Stark, o Tony, como lo llaman sus amigos, es un excéntrico multimillonario, hijo de Howard Stark, quién creo el suero del super soldado que dio vida al Capitán América. Su gran fortuna viene de la herencia de su padre y la industria armamentística, pues es un gran ingeniero y pone todas sus habilidades y conocimientos al servicio de sus empresas.";

lore[1] = "El Capitán América es uno de los superhéroes más legendarios de la editorial Marvel Comics. Los autores Jack Kirby y Joe Simon lo crearon cuando corría el año 1941, un año marcado a fuego por la entrada de los Estados Unidos a la disputa de la Segunda Guerra Mundial. Y ni las historietas se salvaron de las implicancias de este trascendental conflicto bélico del siglo pasado y por ello el personaje fue delineado con un marcado perfil patriótico y por supuesto anti nazi.";

lore[2] = "Natasha Romanoff o Natalia Romanova o Natasha Alianova Romanoff, es quien conocemos como viuda negra (Black Widow). Es un personaje creado por Marvel, más específicamente creado por Stan Lee, Don Rico y Don Heck quienes la mostraron al mundo por primera vez en el mes de Abril del año 1964 con la edición #52 de Tales of Suspense. Inició como villana rusa defendiendo la causa de la KGB, siendo antagonista de Iron Man, pero con el tiempo su postura cambió para ser una importante pieza de Los Vengadores. Este viaje en el tiempo lo detallaremos más adelante en el post, pero ahora veamos cómo llegó a ser creada, veamos la historia de su creación.";

lore[3] = "Hulk nació de la mano del guionista Stan Lee y el dibujante Jack Kirby. En mayo de 1962 se publicó en los kioskos estadounidenses el nº1 de The Incredible Hulk, un personaje basado en la clásica dicotomía entre el Dr. Jekyll y Mr. Hyde, encarnada ahora en el profesor Bruce Banner, un científico sosegado, intelectual y apacible que se transforma, en situaciones de extrema tensión, miedo o ansiedad, en la criatura conocida como Hulk. Se caracteriza por su exagerada corpulencia (que siempre destroza en la transformación la ropa de su alter ego, quedando vestido con apenas un jirón de pantalón), sus extraordinarias capacidades físicas (puede parar un misil con el pecho, resistir con sus manos el peso de una montaña, sobrevivir sin oxígeno bajo el agua o en el espacio, o recorrer cientos de kilómetros en espacios breves de tiempo gracias a sus prolongados saltos) y su escasa inteligencia.";

lore[4] = "Thor comenzó como un proyecto de Stan Lee para abordar aquel sector de lectores más inclinado a la literatura fantástica y los relatos mitológicos. Los primeros bocetos del personaje se basaron en la mitología griega, obviamente bajo otro nombre (¿Hércules?). Finalmente el equipo conformado por Stan Lee, Jack Kirby y Larry Lieber optó por terminar de darle forma al nuevo personaje pero inspirándose en la mitología nórdica, ya que según Lee esta mostraba una faceta más ruda, y por lo tanto, atractiva. Su primera aparición fue en el cómic de Journey into Mystery #83 (1962), con breves apariciones de no más de 15 páginas. Con el paso del tiempo el personaje fue adquiriendo más popularidad hasta conseguir su propia serie en 1970 bajo el nombre de Thor.";

lore[5] = "Ojo de Halcón (originalmente, Hawkeye) es un superhéroe de Marvel Comics creado por el guionista Stan Lee y el dibujante Don Heck para el número 57 (septiembre de 1964) de Tales of Suspense como un villano. Más tarde se unió a los Vengadores en Avengers #16 (May 1965), grupo en el que ha militado desde entonces. Su nombre real es Clint Barton. Lo que hace especial a Ojo de Halcón es su asombrosa pericia y su ojo desarrollado con el arco y las flechas, sus flechas trucadas, y su carácter pícaro y temerario. Arquero de feria, de carácter noble, fue malinterpretado por la policía. Se encuentra enamorado de la Viuda Negra.";

lore[6] = "La primera aparición de Hela en cómics fue en Journey Into Mystery #102, publicado en Marzo de 1964. El número incluye una historia principal y una “backup story”, cosa bastante habitual en esos años. Es en la historia corta de este número donde aparece Hela por primera vez. A lo largo de los años, Hela ha cruzado caminos con varios de los héroes del Universo Marvel, pero es Thor con quien más se asocia. Su motivación suele ser el deseo de incluir más almas a su reino, incluyendo las que habitan en Valhalla. Esto la ha puesto en conflicto con Odín y otros asgardianos en más de una ocasión.";

lore[7] = "Loki es el Dios de la Maldad, de la travesura y el engaño, hijo adoptivo de Odin y archienemigo de su hermanastro Thor. Durante milenios se dedico a tratar de destruir y sobre todo de humillar a Thor y apoderarse del trono de la dorada Asgard. Su genio, maldad y poder lo vuelven uno de los seres más poderosos que haya visto el mundo. Creado por el escritor Stan Lee, el guionista Larry Lieber y el dibujante Jack Kirby. Una versión del personaje apareció por primera vez en Venus # 6 (agosto de 1949). La encarnación moderna de Loki apareció por primera vez en Journey into Mystery # 85 (octubre de 1962). Se basa en la deidad nórdica del mismo nombre y, a veces, se describe como un antihéroe.";

//--------------------------------------------------------------------------------------------

//-----------------------------Transicion de Personajes---------------------------------------
var reference = 80; 
var index = 80;

function start()
{
  while(index == reference)
    index = Math.floor(Math.random() * 8);
  
  reference = index;
  
  ready.innerHTML = "<h1>RANDOM</h1>";
  document.getElementById("logo").innerHTML= '';
  document.body.style.backgroundImage = `${background[index]}`;
  
  document.getElementById("information").textContent = `${lore[index]}`;
  document.getElementById("information").style.fontSize = "25px";
  document.getElementById("information").style.width = "900px";
  
  
  
  ready.style.marginTop ="0px";
  ready.style.marginLeft ="70%";
  
}

//--------------------------------------------------------------------------------------------