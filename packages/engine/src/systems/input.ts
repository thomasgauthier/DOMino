import { addComponent, defineQuery, hasComponent, IWorld, removeComponent } from "bitecs";
import { controller as Input, arrowdown, arrowleft, arrowright, arrowup, abutton, bbutton } from "../components";
import queryLifecycle from "../queryLifecycle";
import stringmap from "../stringmap";
import EventEmitter from 'eventemitter3'
const emitter = new EventEmitter<"arrow-up" | "arrow-down" | "arrow-left" | "arrow-right", boolean>();

const renderingQuery = defineQuery([Input])


let events = {
    up: false,
    down: false,
    left: false,
    right: false,
    A: false,
    B: false,
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (e) => {
        if (!(document.activeElement instanceof HTMLTextAreaElement) && !(e.ctrlKey || e.shiftKey || e.altKey)) {
            e.preventDefault();
        }

        if (e.key === 'ArrowUp') {
            events.up = true;
        } else if (e.key === 'ArrowDown') {
            events.down = true;
        } else if (e.key === 'ArrowLeft') {
            events.left = true;
        } else if (e.key === 'ArrowRight') {
            events.right = true;
        }

        if(e.key === 'z') {
            events.A = true;
        }
        if(e.key === 'x' || e.key === 'Shift') {
            events.B = true;
        }
    })

    document.addEventListener('keyup', (e) => {
        if (!(document.activeElement instanceof HTMLTextAreaElement) && !(e.ctrlKey || e.shiftKey || e.altKey)) {
            e.preventDefault();
        }

        if (e.key === 'ArrowUp') {
            events.up = false;
        } else if (e.key === 'ArrowDown') {
            events.down = false;
        } else if (e.key === 'ArrowLeft') {
            events.left = false;
        } else if (e.key === 'ArrowRight') {
            events.right = false;
        }

        if(e.key === 'z') {
            events.A = false;
        }

        if(e.key === 'x' && !e.shiftKey) {
            events.B = false;
        }

        if(e.key === 'Shift'){
            events.B = false;
        }

    })
})

export default function (world: IWorld) {


    const entities = renderingQuery(world);

    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];

        if (events.down) {
            if (!hasComponent(world, arrowdown, entity)) {
                addComponent(world, arrowdown, entity)
            }
        } else {
            removeComponent(world, arrowdown, entity)
        }

        if (events.up) {
            if (!hasComponent(world, arrowup, entity)) {
                addComponent(world, arrowup, entity)
            }
        } else {
            removeComponent(world, arrowup, entity)
        }


        if (events.left) {
            if (!hasComponent(world, arrowleft, entity)) {
                addComponent(world, arrowleft, entity)
            }
        } else {
            removeComponent(world, arrowleft, entity)
        }

        if (events.right) {
            if (!hasComponent(world, arrowright, entity)) {
                addComponent(world, arrowright, entity)
            }
        } else {
            removeComponent(world, arrowright, entity)
        }


        if (events.right) {
            if (!hasComponent(world, arrowright, entity)) {
                addComponent(world, arrowright, entity)
            }
        } else {
            removeComponent(world, arrowright, entity)
        }


        if (events.A) {
            if (!hasComponent(world, abutton, entity)) {
                addComponent(world, abutton, entity)
            }
        } else {
            removeComponent(world, abutton, entity)
        }

        if (events.B) {
            if (!hasComponent(world, bbutton, entity)) {
                addComponent(world, bbutton, entity)
            }
        } else {
            removeComponent(world, bbutton, entity)
        }
    }
}
