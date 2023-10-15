/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pedal1And2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Pedal1And2/costumes/costume1.svg", {
        x: 32.545668196858,
        y: 55.55682121697566
      }),
      new Costume("costume2", "./Pedal1And2/costumes/costume2.svg", {
        x: 31.442039575030577,
        y: 50.03336935851871
      })
    ];

    this.sounds = [new Sound("pop", "./Pedal1And2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      yield* this.wait(0.5);
      this.costumeNumber++;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.costume.name === "costume2") {
        this.goto(173, 110);
      }
      if (this.costume.name === "costume1") {
        this.goto(176, 7);
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = true;
  }
}
