import { Audio } from 'expo-av';


class Sound {

    constructor() {
        const sound = new Audio.Sound();
    }

    async load(path = '../assets/sounds/el_carnaval_de_arlequin.mp3') {
        await sound.loadAsync(require(path));
    }

    async play() {
        await sound.playAsync();
    }

    async pause() {
        await sound.pauseAsync();
    }

    async stop() {
        await sound.stopAsync();
    }

    async unload() {
        await sound.unloadAsync();
    }
}