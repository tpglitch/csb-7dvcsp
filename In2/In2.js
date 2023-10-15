/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class In2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./In2/costumes/costume1.svg", {
        x: 63.6849945828819,
        y: 22.561484290357555
      })
    ];

    this.sounds = [new Sound("pop", "./In2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.restartTimer();
    while (!(this.timer === 9.2)) {
      this.y = Math.cos(this.degToRad((this.timer - 3) * 400)) * 10;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(9.2);
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.visible = true;
    while (true) {
      this.direction += 8;
      yield;
    }
  }
}
