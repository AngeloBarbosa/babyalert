import { Audio } from 'expo-av';
import { getPermissionsAsync } from 'expo-av/build/Audio';

export class SoundAlert {

    playing = false;
    stopped = true;


    constructor() {
        this.sound = new Audio.Sound();
        this.sound.loadAsync(require('../assets/sounds/el_carnaval_de_arlequin.mp3'));
    }


    async play() {
        if (!this.playing) {
            await this.sound.playAsync();
            this.playing = true;
            this.stopped = false;
        }
    }

    async pause() {
        if (this.playing) {
            await this.sound.pauseAsync();
            this.stopped,  this.playing = false;
        } 
        
    }

    async stop() {
        if (!this.stopped) {
            await this.sound.stopAsync();
            this.stopped = true;
            this.playing = false;
        }
        
    }

}