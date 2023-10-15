import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Tire from "./Tire/Tire.js";
import Body from "./Body/Body.js";
import Pedal1And2 from "./Pedal1And2/Pedal1And2.js";
import Reflector2 from "./Reflector2/Reflector2.js";
import Reflector3 from "./Reflector3/Reflector3.js";
import Rs1 from "./Rs1/Rs1.js";
import Rs2 from "./Rs2/Rs2.js";
import New from "./New/New.js";
import In2 from "./In2/In2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Tire: new Tire({
    x: 0,
    y: 0,
    direction: 2.5,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Body: new Body({
    x: 15,
    y: 13,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Pedal1And2: new Pedal1And2({
    x: 173,
    y: 110,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Reflector2: new Reflector2({
    x: 203,
    y: -46,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Reflector3: new Reflector3({
    x: 184,
    y: 3,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Rs1: new Rs1({
    x: 251,
    y: -53,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Rs2: new Rs2({
    x: 234,
    y: -7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  New: new New({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 8
  }),
  In2: new In2({
    x: 155,
    y: -7.095707365,
    direction: -101,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 9
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
