var nicknameBlock = document.getElementsByClassName("nN");

for (let i = 0; i < nicknameBlock.length; i ++) {
  var nickname = nicknameBlock[i].innerHTML;
  nickname = "\"" + nickname + "\"";
  nicknameBlock[i].innerHTML = nickname;
}

var teamTagBlock = document.getElementsByClassName("teamTag")[0];
teamTagBlock.innerHTML += " expected loadout";

var coachBlock = document.getElementsByClassName("coach");
coachBlock[0].innerHTML += "(coach)";

if (coachBlock.length > 1) {
  for (let i = 1; i < coachBlock.length; i ++) {
    coachBlock[i].innerHTML += "(assistant coach)";
  }
}