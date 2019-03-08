var teams = ['Barcelona','Real Madrid','Betis','Real Sociedad','Tenerife'];

var team = function () 
{  
  while(a == b)
  {
    var a = Math.floor(Math.random() * teams.length);
    var b = Math.floor(Math.random() * teams.length); 
  }
  
  var teamA = document.getElementById('teamA');
  var teamB = document.getElementById('teamB');
  teamA.innerHTML = teams[a];
  teamB.innerHTML = teams[b]; 
}


var goals = function ()
{
  var a = Math.floor(Math.random() * 7);
  var b = Math.floor(Math.random() * 7);
  
  var teamA = document.getElementById('goalTeamA');
  var teamB = document.getElementById('goalTeamB');
  
  teamA.innerHTML = a;
  teamB.innerHTML = b; 
}