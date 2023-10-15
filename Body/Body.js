/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Body extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Body/costumes/costume1.svg", {
        x: -36.85863930513034,
        y: 146.55346055555574
      })
    ];

    this.sounds = [new Sound("pop", "./Body/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.effects.color = 0;
    this.goto(15, 13);
  }

  *whenKeySpacePressed() {
    this.effects.color += 30;
  }

  *whenIReceiveStart() {
    this.visible = true;
  }
}
