import React from 'react';
import Drum from './Drum';
import { AudioClip } from './types'

const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    desciption: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    desciption: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    desciption: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    desciption: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    desciption: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    desciption: "Open HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    desciption: "Kick n' Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    desciption: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    desciption: "Closed HH",
  },
];

function App() {

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(clip => clip.keyTrigger === e.key.toUpperCase());

    if (!clip) {
      return;
    };

    document.getElementById("drum" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerHTML = clip.desciption;

    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
        .play()
        .catch(console.error);
};

  return (
    <div className="app" id="drum-machine" onKeyDown={playAudio}>
      <h1>FreeCC Drum Machine</h1>
      <h2>Vite and Tailwind</h2>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  )
}

export default App
