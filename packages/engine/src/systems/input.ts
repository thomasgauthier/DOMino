import { addComponent, defineQuery, hasComponent, IWorld, removeComponent } from "bitecs";
import { controller as Input, arrowdown, arrowleft, arrowright, arrowup, abutton, bbutton } from "../components";
import queryLifecycle from "../queryLifecycle";
import stringmap from "../stringmap";
import EventEmitter from 'eventemitter3'
const emitter = new EventEmitter<"arrow-up" | "arrow-down" | "arrow-left" | "arrow-right", boolean>();

const renderingQuery = defineQuery([Input])



export default function (node: HTMLElement) {

    let kb = {
        up: false,
        down: false,
        left: false,
        right: false,
        z: false,
        x: false,
        shift: false,
    }

    document.addEventListener('keydown', (e) => {
        if (!(document.activeElement instanceof HTMLTextAreaElement) && !(e.ctrlKey || e.shiftKey || e.altKey)) {
            e.preventDefault();
        }

        if (e.code === 'ArrowUp') {
            kb.up = true;
        } else if (e.code === 'ArrowDown') {
            kb.down = true;
        } else if (e.code === 'ArrowLeft') {
            kb.left = true;
        } else if (e.code === 'ArrowRight') {
            kb.right = true;
        }

        if (e.code === 'KeyZ') {
            kb.z = true;
        }

        if (e.code === 'KeyX') {
            kb.x = true;
        }

        if (e.code === 'ShiftLeft') {
            kb.shift = true;
        }
    })

    document.addEventListener('keyup', (e) => {
        
        if (!(document.activeElement instanceof HTMLTextAreaElement) && !(e.ctrlKey || e.shiftKey || e.altKey)) {
            e.preventDefault();
        }

  
        if (e.code === 'ArrowUp') {
            kb.up = false;
        } else if (e.code === 'ArrowDown') {
            kb.down = false;
        } else if (e.code === 'ArrowLeft') {
            kb.left = false;
        } else if (e.code === 'ArrowRight') {
            kb.right = false;
        }

        if (e.code === 'KeyZ') {
            kb.z = false;
        }

        if (e.code === 'KeyX') {
            kb.x = false;
        }

        if (e.code === 'ShiftLeft') {
            kb.shift = false;
        }
    })

    return (world: IWorld) => {

        let gamepad = {
            a: false,
            b: false,
            up: false,
            down: false,
            left: false,
            right: false
        }

        const gamepads = navigator.getGamepads();
        gamepads.filter(g => g).forEach(g => {
            gamepad.a = g.buttons[0].pressed
            gamepad.b = g.buttons[2].pressed
            gamepad.up = g.buttons[12].pressed
            gamepad.down = g.buttons[13].pressed
            gamepad.left = g.buttons[14].pressed
            gamepad.right = g.buttons[15].pressed
        })

        const buttons = {
            a: kb.z || gamepad.a,
            b: kb.x || kb.shift || gamepad.b,
            left: kb.left || gamepad.left,
            up: kb.up || gamepad.up,
            down: kb.down || gamepad.down,
            right: kb.right || gamepad.right,
        }



        const entities = renderingQuery(world);

        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];

            if (buttons.down) {
                if (!hasComponent(world, arrowdown, entity)) {
                    addComponent(world, arrowdown, entity)
                }
            } else {
                removeComponent(world, arrowdown, entity)
            }

            if (buttons.up) {
                if (!hasComponent(world, arrowup, entity)) {
                    addComponent(world, arrowup, entity)
                }
            } else {
                removeComponent(world, arrowup, entity)
            }


            if (buttons.left) {
                if (!hasComponent(world, arrowleft, entity)) {
                    addComponent(world, arrowleft, entity)
                }
            } else {
                removeComponent(world, arrowleft, entity)
            }

            if (buttons.right) {
                if (!hasComponent(world, arrowright, entity)) {
                    addComponent(world, arrowright, entity)
                }
            } else {
                removeComponent(world, arrowright, entity)
            }

            if (buttons.a) {
                if (!hasComponent(world, abutton, entity)) {
                    addComponent(world, abutton, entity)
                }
            } else {
                removeComponent(world, abutton, entity)
            }

            if (buttons.b) {
                if (!hasComponent(world, bbutton, entity)) {
                    addComponent(world, bbutton, entity)
                }
            } else {
                removeComponent(world, bbutton, entity)
            }
        }
    }
}
