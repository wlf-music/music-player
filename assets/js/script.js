'use strict';



/**
 * all music information
 */

const musicData = [  
  {
    backgroundImage: "",
    posterUrl: "./assets/images/mahsa.jpg",
    title: "Sogand | Oath",
    photo: "Mahsa Amini - 22 years old",
    lyrics:
      "I wrote this letter for you from the soil of cold alleys / [I wrote this letter] with my fresh blood so that our pain transforms into laughter // When the next day comes, my [happy] spirit would give a new life to greeneries / The eternal sun of freedom would be the light of our sky // I take an oath by the blood of my comrades / I take an oath by the mothers’ tears that our eternal cry will not die down by their blade // We are the flood of blood of  the month of Aban [of 2019] / [This blood] has been fused with injustice / Our only sin was our anger in response to cruelty // My defenseless body and soul is the target of oppressors' arrows / but I am stillI proud and confident of our revolution // I take an oath by the lovers of Iran / I take an oath by the rage of Zahedan [a city in the south-west of Iran] that I will not go back until the usurpers leave our country // I take an oath by the blood of my comrades / I take an oath by the mothers’ tears that our eternal cry will not die down by their blade.",
    year: "",
    artist: "Anonymous Artists",
    musicPath: "./assets/music/sogand.mp3",
  },
  {
    backgroundImage: "",
    posterUrl: "./assets/images/nika.jpg",
    title: "Baraye | For... (Original Farsi version)",
    photo: "Nika Shakarami - 16 years old",
    lyrics:
      "For dancing on the streets / For the fear of kissing [your lover in public] / For my sister, your sister, our sisters / For changing these rotted minds / For the shame, for the poverty / For yearning for an ordinary life / For child laborers and their crushed dreams / For this dictatorial economy / For this polluted air / For Valiasr [a street in Tehran] and its forlorn trees / For Pirouz and the possibility of his extinction [Pirouz is a name of an Asiatic Cheetah, an endangered species with only three cubs known to be alive] / For the innocent forbidden dogs [that were massacred by the government] / For our ceaseless tears / For never experiencing this moment [Reera was killed in the flight PS752] / For smiling faces / For students and their future lives / For this compulsory ‘Heaven’ / For the imprisoned elite students / For Afghan kids / For all of these countless ‘For’s / For all of these meaningless slogans [by the government] / For the collapse of these flimsy houses / For peace and serenity / For the sunrise after a long dark night / For the sleeping pills and our sleepless nights / For man, homeland, and prosperity / For the girl that wished to be a boy / For woman, life, and freedom / For freedom... / For freedom... / For freedom...",
    year: "",
    artist: "Shervin Hajipour",
    musicPath: "./assets/music/baraye.mp3",
  },  
  {
    backgroundImage: "",
    posterUrl: "./assets/images/sarina.jpg",
    title: "Baraye | For... (English version)",
    photo: "Sarina Esmailzadeh - 16 years old",
    lyrics:
      "For dancing in the allies and the streets / For the thrill and the fear of getting caught kissing / For my sister, my brother, and unity / For all the times we tried to change their minds and stale beliefs / For the loss of pride, and poverty / For the dream of just a normal life for you and me / For all the children who are starving for a loaf of bread / For the greed of politics and all the lies they spread / For all the mass-polluted air we breathe / For all the litter in the streets and all the dying trees / For all the animals who suffer from elimination / For all the cats and dogs who love us without no conditions / For all the tears that seem to never end / For all the images that keep on turning in our heads / For a simple smile, for just a little while / For the future generations fighting for their time / For empty promises of heaven in the after-life / For all the imprisonment of beautiful minds / For all the babies who are born and for the ones who died / For all the times you told the truth, and all the times you lied / For all the speeches that we heard about a million times / For all the shacks and shelters that were sold to make a dime / For just a glimpse of a peaceful life / For the rising of the sun after an endless night / For all the pills we pop just to get some sleep / For all mankind, for our country / For all the boys and girls who never knew equality / For woman, for life, liberty.",
    year: "",
    artist: "Rana Mansour",
    musicPath: "./assets/music/baraye_rana.mp3",
  },  
  {
    backgroundImage: "",
    posterUrl: "./assets/images/arnika.jpg",
    title: "Rah e Kouche | Alleyway",
    photo: "Arnika Ghaemmaghami - 17 years old",
    lyrics:
      "Come join us, the street is calling you / [The street] is calling your by your first name, which is Azadi (liberty) // Tell to whoever who has been sobbing that they are not alone in this //  Freedom, woman, life, woman, life, freedom (x2) / We have finally climbed over the fences of fear / We have finally learned the way to the alley / Your hair [Mahsa’s hair] has kissed the wind / [Your hair] has revived the city of death and murderers, despite the boots of oppressors and their raids // In the memory of your sister's blood, and your brother's torture / In the name of our homeland, stay by my side and sing this anthem / So that this song is chanted all across our country / Freedom, woman, life, woman, life, freedom (x2).",
    year: "",
    artist: "Anonymous Artists",
    musicPath: "./assets/music/rahe_kouche.mp3",
  },
  {
    backgroundImage: "",
    posterUrl: "./assets/images/kian.jpg",
    title: "Sorood e Azadi | Anthem of Liberty",
    photo: "Kian Pirfalak - 9 years old",
    lyrics:
      "Rise-up for Woman Life Freedom (x3) // In the name of woman, and in the name of life, we will liberate ourselves from slavery / May our dark night dawn / May all the whips be axed, so that we can sing along the buds / You, others, and I will become ‘Us’ // I swear by the pure blood of tulips / [I swear by] the revolution of tears and kisses / In this transition of our endless suffering / Call me by my soul and body, O my homeland / Because with the red roar of your name, the world would tremble from your uprising // In the name of woman, and in the name of life / The slavery clothes were torn / May our dark night dawn / May all the whips be axed, so that we can sing along the buds / You, others, and I will become ‘Us’ // Rise-up for Woman Life Freedom (x3).",
    year: "",
    artist: "Anonymous Artists",
    musicPath: "./assets/music/soroode_azadi.mp3",
  },  
  {
    backgroundImage: "",
    posterUrl: "./assets/images/navid.jpg",
    title: "Sorood e Zan | Anthem of Woman",
    photo: "Navid Afkari - 27 years old",
    lyrics:
      "Woman Life Freedom (x5) / In the memory of your name, which has become our password / Mahsa’s night [metaphor of death] has brought forth thousands of united voices // Sing along so that the whole city is filled with the anthem of woman / [Sing along] so that this homeland becomes our homeland again // During the night, in the alleyways, our comrades are knocking on doors and telling us that now it is our turn to join the movement / My brother is like my stronghold / His shade and his shoulders are a refuge for me // They [the IR regime] are whipping and torturing every witness / These tortured people who are fearlessly ready to die are like organs in my body / Instead of killing them, stab me in my heart / then the whole world would be filled with our chant // Give me a moment so that I can kiss them in their blood / We will become eternal / Our hair is dignified [and brings fears to the oppressors] // They have killed anyone who is revealing their crimes / Why emigrate? Stay here and let’s take back our country / Take a breath from their cruelty // Sing along so that the whole city is filled with the anthem of woman / [Sing along] so that this homeland becomes our homeland again.",
    year: "",
    artist: "Mehdi Yarrahi",
    musicPath: "./assets/music/soroode_zan.mp3",
  },  
  {
    backgroundImage: "",
    posterUrl: "./assets/images/mohammad_hoseini.jpg",
    title: "Sorood e Barabari | Anthem of Equality",
    photo: "Mohammad Hoseini - 39 years old",
    lyrics:
      "I sprout from the wounds on my body / [I have been suffering] just because of my existence, because I am a woman / I am a woman / I am a woman // If we unite and march hand in hand, we will overcome the oppression // Let's build a new world based on equality, sympathy, and sisterhood / A happier and better world // [A world in which there is] no stoning, no gallows, no sobbing, and no shame and disgrace // Let's build a new world based on equality, sympathy, and sisterhood / A happier and better world.",
    year: "",
    artist: "Anonymous Artists",
    musicPath: "./assets/music/soroode_barabari.mp3",
  },  
  {
    backgroundImage: "",
    posterUrl: "./assets/images/khodanur.png",
    title: "Sorood e Atash | Anthem of Fire",
    photo: "Khodanoor Lajaei - 27 years old",
    lyrics:
      "Be the voice of my country / Be our fist / Don't turn your back / We are still alive and so our names will carry-on in our path towards freedom [even if we die] // I am Mahsa / I am Nika / I am those women liberated from evil / I am that mother who is mourning for her lost child / You be the narrator of these fearless people // In the mist of the tear gas and the tears in my eyes / Your shield has destroyed the dagger of tyranny in a sparkling fire // I am Minoo / You be [her] tress / I am the loneliness of a dark night / You be the 'Woman, Life, Freedom' / You be those people who are liberated // We share the same story and the same struggle / Let's not retreat / Let's not forgive your blood [that was spilled in tyranny] // I am that [impoverished] doorman / I am the corpse of a prisoner / I am that worker who is on strike / If you untangle your hair, you will be that bloody Aban (more than 1500 protesters were murdered in November-Aban 2019) // You be the answer [that I will give] to my child / When falling from the sky, my wings are of fire and my name is Reera (victim of the flight PS752) / The month of Dey is our pact (the Ukrainian flight was shot down in January-Dey of 2020) // Give me your hand and hold mine, because I have reached the resurrection of your body / Break your prison and become free from material possessions / Stoke up some fire, then you will become Azar (bloody protests in December-Azar 2020).",
    year: "",
    artist: "Anonymous Artists",
    musicPath: "./assets/music/soroode_atash.mp3",
  },  
  
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerLyrics = document.querySelector("[data-lyrics]");
const playerPhoto = document.querySelector("[data-photo]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerLyrics.textContent = musicData[currentMusic].lyrics;
  playerPhoto.textContent = musicData[currentMusic].photo;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);