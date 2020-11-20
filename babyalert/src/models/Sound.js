import { Audio } from 'expo-av';


class Sound {

    constructor() {
        const sound = new Audio.Sound();
        loaded = false;
        playing = false;
        stopped = true;
    }

    async load(path = '../assets/sounds/el_carnaval_de_arlequin.mp3') {
        await sound.loadAsync(require(path));
        if (!loaded) loaded = true;
        stopped = true
    }

    async play() {
        if (loaded & !playing) {
            await sound.playAsync();
            playing = true;
            stopped = false;
        }
    }

    async pause() {
        if (loaded & playing) {
            await sound.pauseAsync();
            stopped, playing = false;
        } 
        
    }

    async stop() {
        if (loaded & !stopped) {
            await sound.stopAsync();
            stopped = true;
            playing = false;
        }
        
    }

    async unload() {    
        if (loaded) {
            await sound.unloadAsync();
            loaded = false;    
        } 
    }
}