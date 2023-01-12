import { Component as BITECSComponent, defineComponent, Types } from "bitecs"

const Dimensions = { width: Types.f32, height: Types.f32 }
const Vector3 = { x: Types.f32, y: Types.f32, z: Types.f32 }

export const position = defineComponent(Vector3)
export const velocity = defineComponent(Vector3)
export const dimension = defineComponent(Dimensions)
export const rigidbody = defineComponent({ static: Types.i8 })
export const sprite = defineComponent({ stringmapid: Types.ui32 })
export const collision = defineComponent({ entitiy: Types.eid })
export const color = defineComponent({ stringmapid: Types.ui32 })
export const scale = defineComponent({ scale: Types.f64 })
export const floor = defineComponent({ is: Types.i32 })
export const wall = defineComponent({ is: Types.i32 })
export const thwomp = defineComponent({ is: Types.i32 })
export const controller = defineComponent({ is: Types.i32 })
export const arrowup = defineComponent({ is: Types.i32 })
export const arrowdown = defineComponent({ is: Types.i32 })
export const arrowleft = defineComponent({ is: Types.i32 })
export const arrowright = defineComponent({ is: Types.i32 })
export const debugdraw = defineComponent({ is: Types.i32 })
export const timescale = defineComponent({ timescale: Types.f32 })
export const debug = defineComponent({ is: Types.i32 })
export const global = defineComponent({ is: Types.i32 })
export const debugstring = defineComponent({ value: Types.f32 })
export const color2 = defineComponent(Vector3)
export const speed = defineComponent({ value: Types.f32 })

export function isStringComponent(component: BITECSComponent) {
    if (component === sprite || component === color) {
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
    collision,
    color,
    scale,
    floor,
    wall,
    thwomp,
    controller,
    arrowup,
    arrowdown,
    arrowleft,
    arrowright,
    debugdraw,
    timescale,
    debug,
    global,
    debugstring,
    color2,
    speed
}


export type ComponentKey = keyof typeof Components
export type Component = typeof Components[ComponentKey]

export default Components;
