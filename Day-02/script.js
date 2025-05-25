const nama = prompt("Halo! Siapa nama kamu?");

const rekomendasi = {
  happy: [
    "🎵 FloyyMenor & Cris Mj - Gata Only",
    "🎵 Baby Tate - Hey, Mickey!",
    "🎵 Doechii - What It Is (Block Boy)",
  ],
  sad: [
    "🎵 d4vd - Romantic Homicide",
    "🎵 SZA - Kill Bill",
    "🎵 Mitski - My Love Mine All Mine",
  ],
  bored: [
    "🎵 ThxSoMch - SPIT IN MY FACE!",
    "🎵 Benson Boone - Beautiful Things",
    "🎵 Tate McRae - Greedy",
  ],
  stressed: [
    "🎵 JVKE - Golden Hour",
    "🎵 Billie Eilish - What Was I Made For?",
    "🎵 The Walters - I Love You So",
  ],
};
function pilihMood(mood) {
  const laguList = rekomendasi[mood];
  if (laguList) {
    let output = `${nama}, 🎧 Mood kamu:  ${mood.toUpperCase()}\n ini Rekomendasi TikTok hits buat kamu:\n\n`;
    output += `<ul>`;
    laguList.forEach((lagu, i) => {
      output += `<li>${i + 1}. ${lagu}</li>`;
    });
    output += `</ul>`;
    document.getElementById("modalText").innerHTML = output;
    document.getElementById("modal").style.display = "block";
  }

  return laguList[mood];
}

document.getElementById("btnSpotify").addEventListener("click", () => {
  window.open("https://open.spotify.com", "_blank");
});

document.getElementById("btnClose").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
