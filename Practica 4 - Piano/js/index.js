var keys = ["c1", "c1s", "d1", "d1s", "e1", "f1", "f1s", "g1", "g1s", "a1", "a1s", "b1", "c2"];
var object = {}

for(i = 0; i < keys.length; ++i)
{
  object[keys[i]] = new Audio(`https://manzdev.github.io/piano-keys/${keys[i]}.mp3`);
  console.log(object[keys[i]]);
  //document.querySelector(`#${keys[i]}`).onclick = function ()   {
  //    object[ keys[i] ].play();
 // }
  /*
  document.querySelector(`#${keys[i]}`).addEventListener('click', function () { 
    object[keys[i]].play(); 
  });*/
}

function onc (name)
{
  object[name].play();
}