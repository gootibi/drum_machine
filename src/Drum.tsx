import { AudioClip } from "./types";

type DrumProps = {
    audioClip: AudioClip
};

const Drum = ({ audioClip }: DrumProps) => {

    const playSound = () => {
        
    };

    return (
        <button
            className="drum-pad"
            id={`drum-${audioClip.keyTrigger}`}
            onClick={() => playSound(audioClip)}
        >
            <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
            {audioClip.keyTrigger}
        </button>
    )
}

export default Drum