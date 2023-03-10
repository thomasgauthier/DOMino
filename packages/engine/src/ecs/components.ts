import { Component as BITECSComponent, defineComponent, Types } from "bitecs"

const Dimensions = { width: Types.f32, height: Types.f32 }
const Vector3 = { x: Types.f32, y: Types.f32, z: Types.f32 }

export const position = defineComponent(Vector3)
export const velocity = defineComponent(Vector3)
export const dimension = defineComponent(Dimensions)
export const rigidbody = defineComponent({ static: Types.i8 })
export const sprite = defineComponent({ stringmapid: Types.ui32 })
export const spriteRepeat = defineComponent({ stringmapid: Types.ui32 })
export const touchingUp = defineComponent({ is: Types.i32 })
export const touchingDown = defineComponent({ is: Types.i32 })
export const touchingLeft = defineComponent({ is: Types.i32 })
export const touchingRight = defineComponent({ is: Types.i32 })
export const spritesheet = defineComponent({ stringmapid: Types.ui32 })
export const frame = defineComponent({ number: Types.ui32 })
export const collision = defineComponent({ entitiy: Types.eid })
export const color = defineComponent({ stringmapid: Types.ui32 })
export const scale = defineComponent({ scale: Types.f64 })
export const floor = defineComponent({ is: Types.i32 })
export const wall = defineComponent({ is: Types.i32 })
export const thwomp = defineComponent({ is: Types.i32 })
export const mario = defineComponent({ is: Types.i32 })
export const flip = defineComponent({ horizontal: Types.i32 })
export const controller = defineComponent({ is: Types.i32 })
export const arrowup = defineComponent({ is: Types.i32 })
export const arrowdown = defineComponent({ is: Types.i32 })
export const arrowleft = defineComponent({ is: Types.i32 })
export const arrowright = defineComponent({ is: Types.i32 })
export const abutton = defineComponent({ is: Types.i32 })
export const bbutton = defineComponent({ is: Types.i32 })
export const debugdraw = defineComponent({ is: Types.i32 })
export const timescale = defineComponent({ timescale: Types.f32 })
export const debug = defineComponent({ is: Types.i32 })
export const global = defineComponent({ is: Types.i32 })
export const debugstring = defineComponent({ value: Types.f32 })
export const color2 = defineComponent(Vector3)
export const speed = defineComponent({ value: Types.f32 })

export function isStringComponent(component: BITECSComponent) {
    if (component === sprite || component === color || component === spritesheet) {
        return true
    }

    return false
}

const Components = {
    position,
    velocity,
    dimension,
    rigidbody,
    sprite,
    'sprite-repeat': spriteRepeat,
    'touching-up': touchingUp,
    'touching-down': touchingDown,
    'touching-left': touchingLeft,
    'touching-right': touchingRight,
    spritesheet,
    frame,
    collision,
    color,
    scale,
    floor,
    wall,
    thwomp,
    mario,
    controller,
    arrowup,
    arrowdown,
    arrowleft,
    arrowright,
    abutton,
    bbutton,
    debugdraw,
    timescale,
    flip,
    debug,
    global,
    debugstring,
    color2,
    speed
}


export type ComponentKey = keyof typeof Components
export type Component = typeof Components[ComponentKey]

export default Components;
