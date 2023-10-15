/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tire extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Tire/costumes/costume1.svg", { x: 89, y: 89 })
    ];

    this.sounds = [new Sound("Rattle", "./Tire/sounds/Rattle.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "8" }, this.whenKey8Pressed),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart2)
    ];

    this.vars.gear = 0;
    this.vars.speed = "16MPH";
    this.vars.rmp = 25;

    this.watchers.gear = new Watcher({
      label: "Tire: Gear",
      style: "normal",
      visible: true,
      value: () => this.vars.gear,
      x: 245,
      y: 175
    });
    this.watchers.speed = new Watcher({
      label: "Tire: Speed",
      style: "normal",
      visible: true,
      value: () => this.vars.speed,
      x: 246,
      y: 149
    });
    this.watchers.rmp = new Watcher({
      label: "Tire: RMP",
      style: "normal",
      visible: false,
      value: () => this.vars.rmp,
      x: 245,
      y: 122
    });
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
    this.vars.gear = 1;
  }

  *whenKey1Pressed() {
    this.vars.gear = 1;
  }

  *whenKey2Pressed() {
    this.vars.gear = 2;
  }

  *whenKey3Pressed() {
    this.vars.gear = 3;
  }

  *whenKey4Pressed() {
    this.vars.gear = 4;
  }

  *whenKey5Pressed() {
    this.vars.gear = 5;
  }

  *whenKey6Pressed() {
    this.vars.gear = 6;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.vars.gear) === 1) {
        this.vars.rmp = 18;
        this.vars.speed = "11MPH";
      }
      if (this.toNumber(this.vars.gear) === 2) {
        this.vars.rmp = 22;
        this.vars.speed = "13MPH";
      }
      if (this.toNumber(this.vars.gear) === 3) {
        this.vars.rmp = 24;
        this.vars.speed = "15MPH";
      }
      if (this.toNumber(this.vars.gear) === 4) {
        this.vars.rmp = 25;
        this.vars.speed = "16MPH";
      }
      if (this.toNumber(this.vars.gear) === 5) {
        this.vars.rmp = 27;
        this.vars.speed = "18MPH";
      }
      if (this.toNumber(this.vars.gear) === 6) {
        this.vars.rmp = 29;
        this.vars.speed = "20MPH";
      }
      if (this.toNumber(this.vars.gear) === 7) {
        this.vars.rmp = 31;
        this.vars.speed = "23MPH";
      }
      if (this.toNumber(this.vars.gear) === 8) {
        this.vars.rmp = 36;
        this.vars.speed = "26MPH";
      }
      this.watchers.rmp.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.direction +=
        this.toNumber(this.vars.rmp) + this.toNumber(this.vars.gear) + 3;
      yield;
    }
  }

  *whenIReceiveStart() {
    this.watchers.gear.visible = true;
    this.watchers.speed.visible = true;
    this.visible = true;
  }

  *whenGreenFlagClicked4() {
    this.watchers.gear.visible = false;
    this.watchers.speed.visible = false;
  }

  *whenKey7Pressed() {
    this.vars.gear = 7;
  }

  *whenKey8Pressed() {
    this.vars.gear = 8;
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.toNumber(this.vars.gear) === 3) {
        yield* this.startSound("Rattle");
        yield* this.wait(0.01);
      }
      if (this.toNumber(this.vars.gear) === 4) {
        yield* this.startSound("Rattle");
        yield* this.wait(0.01);
      }
      if (this.toNumber(this.vars.gear) === 5) {
        yield* this.startSound("Rattle");
        yield* this.wait(0.01);
      }
      if (this.toNumber(this.vars.gear) === 6) {
        yield* this.startSound("Rattle");
        yield* this.wait(0.01);
      }
      if (this.toNumber(this.vars.gear) === 7) {
        yield* this.startSound("Rattle");
        yield* this.wait(0.01);
      }
      if (this.toNumber(this.vars.gear) === 8) {
        yield* this.startSound("Rattle");
        yield* this.wait(0.01);
      }
      yield;
    }
  }
}
