function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;

      var olEl = document.getElementById("scores");
      olEl.appendChild(liTag);
    });
  }
  
  printHighscores();  