/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class New extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("OIP my propic", "./New/costumes/OIP my propic.png", {
        x: 192,
        y: 196
      })
    ];

    this.sounds = [
      new Sound(
        "The_Score_-_Legend_Audio[Mp3Converter.net] (1).mp3",
        "./New/sounds/The_Score_-_Legend_Audio[Mp3Converter.net] (1).mp3.wav"
      ),
      new Sound("Jim Yosef - Archer", "./New/sounds/Jim Yosef - Archer.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.goto(0, 0);
    this.visible = true;
    yield* this.startSound("Jim Yosef - Archer");
    this.direction = 90;
    for (let i = 0; i < 5; i++) {
      this.direction += 30;
      yield* this.wait(0.8);
      this.direction -= 60;
      yield* this.wait(0.8);
      this.direction = 90;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(9.2);
    this.visible = false;
    this.broadcast("Start");
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.restartTimer();
    while (!(this.timer === 9.2)) {
      while (!(this.size === 110)) {
        this.size += 1;
        yield;
      }
      while (!(this.size === 90)) {
        this.size -= 1;
        yield;
      }
      yield;
    }
  }
}
