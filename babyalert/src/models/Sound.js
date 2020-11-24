import { Audio } from 'expo-av';

const playing = false;
const stopped = true;

export class SoundAlert {

    constructor() {
        const sound = new Audio.Sound();
        sound.loadAsync(require('../assets/sounds/el_carnaval_de_arlequin.mp3'));
    }


    async play() {
        if (!playing) {
            await sound.playAsync();
            playing = true;
            stopped = false;
        }
    }

    async pause() {
        if (playing) {
            await sound.pauseAsync();
            stopped, playing = false;
        } 
        
    }

    async stop() {
        if (!stopped) {
            await sound.stopAsync();
            stopped = true;
            playing = false;
        }
        
    }

}