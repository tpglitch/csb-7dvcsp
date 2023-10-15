/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Reflector2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Reflector2/costumes/costume1.svg", {
        x: 95,
        y: 93.14285714285714
      })
    ];

    this.sounds = [new Sound("pop", "./Reflector2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(203, -46);
  }

  *whenIReceiveStart() {
    this.visible = true;
  }
}
