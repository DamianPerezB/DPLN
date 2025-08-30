var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "♪♪♪", time: 0.667 },
  { text: "Descontamíname, linda niña", time: 8.883 },
  { text: "Succiona la podredumbre de mi sangre", time: 12.887 },
  { text: "Oh, dilúyeme, ángel amable", time: 17.183 },
  { text: "Suaviza lo que yo llamo gratitud", time: 21.312 },
  { text: "Oh, me besaste, solo por besarme", time: 25.817 },
  { text: "No para llevarme a casa", time: 29.821 },
  { text: "Fue simple, fue dulzura", time: 33.867 },
  { text: "Fue bueno saberlo", time: 37.912 },
  { text: "Te ves perfecta, te ves diferente", time: 42.292 },
  { text: "No me importa tu indiferencia", time: 46.212 },
  { text: "Si dijera que nunca podrías tocarme", time: 50.550 },
  { text: "Vendrías y dirías que me veo precioso", time: 54.596 },
  { text: "Oh, me besaste, solo por besarme", time: 58.892 },
  { text: "No para hacerme llorar", time: 63.021 },
  { text: "Fue simple, eres dulzura", time: 67.275 },
  { text: "Solo sentémonos un rato", time: 71.404 },
  { text: "Descontamíname, ángel amable", time: 75.492 },
  { text: "Y sentiré la enfermedad menos y menos", time: 79.662 },
  { text: "Ven y bésame, lindo amor", time: 83.833 },
  { text: "Como si nunca fuéramos a tener s...", time: 88.004 }
];

var currentLineIndex = -1;

function updateLyrics() {
  var time = audio.currentTime;
  var newLineIndex = -1;

  for (var i = 0; i < lyricsData.length; i++) {
    if (
      time >= lyricsData[i].time &&
      (i === lyricsData.length - 1 || time < lyricsData[i + 1].time)
    ) {
      newLineIndex = i;
      break;
    }
  }

  if (newLineIndex !== currentLineIndex) {
    currentLineIndex = newLineIndex;
    if (currentLineIndex !== -1) {
      lyrics.innerHTML = lyricsData[currentLineIndex].text;
      lyrics.style.opacity = 0;
    } else {
      lyrics.innerHTML = "";
      lyrics.style.opacity = 0;
    }
  }

  if (currentLineIndex !== -1) {
    var fadeInDuration = 0.6;
    var elapsed = time - lyricsData[currentLineIndex].time;
    var opacity = Math.min(1, elapsed / fadeInDuration);
    lyrics.style.opacity = opacity;
  }

  requestAnimationFrame(updateLyrics);
}

audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 92000);