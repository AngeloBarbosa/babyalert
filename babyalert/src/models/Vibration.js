import {Vibration} from 'react-native';

export class Vibrator {
  ONE_SECOND_IN_MS = 1000;
  PATTERN = [
    1 * this.ONE_SECOND_IN_MS,
    2 * this.ONE_SECOND_IN_MS,
    3 * this.ONE_SECOND_IN_MS
  ];

  vibrate(time, repeat = false) {
    Vibration.vibrate(this.ONE_SECOND_IN_MS*time, repeat);
  }

  vibratePattern(PATTERN, repeat = false) {
    Vibration.vibrate(this.PATTERN, false);
  }

  vibratePatternUntilCancel(pattern, repeat = true) {
    Vibration.vibrate(this.PATTERN, true);
  }

  cancel() {
    Vibration.cancel();
  }
}
