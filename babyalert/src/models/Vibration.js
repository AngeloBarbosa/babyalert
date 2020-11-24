import {Vibration} from 'react-native';

export class Vibrator {
    constructor() {
        const ONE_SECOND_IN_MS = 1000;
        const PATTERN = [300, 150];

    }

    vibrate(time, repeat = false) {
        Vibration.vibrate(ONE_SECOND_IN_MS*time, repeat);
    }

    vibratePattern(PATTERN, repeat = false) {
        Vibration.vibrate(PATTERN, false);
    }

    vibratePatternUntilCancel(PATTERN, repeat = true) {
        Vibration.vibrate(PATTERN, true);
    }

    cancel() {
        Vibration.cancel();
    }
}
