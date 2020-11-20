import {Vibration} from 'react-native';

class Vibraton {
    constructor() {
        const vibe = Vibration;
        const ONE_SECOND_IN_MS = 1000;
        const PATTERN = [300, 150];

    }

    vibrate(time, repeat = false) {
        vibe.vibrate(ONE_SECOND_IN_MS*time, repeat);
    }

    vibratePattern(PATTERN, repeat = false) {
        vibe.vibrate(PATTERN, false);
    }

    vibratePatternUntilCancel(PATTERN, repeat = true) {
        vibe.vibrate(PATTERN, true);
    }

    cancel() {
        vibe.cancel();
    }
}