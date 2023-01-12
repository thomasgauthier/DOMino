import { addComponent, Component, hasComponent, IWorld } from "bitecs";
import engineComponents, { isStringComponent } from "../components"
import stringmap from "../stringmap";

export const componentStringNameToComponent = (world: IWorld, name: string, components: Map<string, Component>): Component => {
    const splitted = name.split('-')

    let componentName = name;
    if (splitted.length > 1) {
        componentName = splitted[0]
    }

    return components.get(componentName) || engineComponents[componentName];
}


export const componentPropertyRead = (world: IWorld, component: Component, property: string | null, eid: number, components: Map<string, Component>) => {
    property = property || Object.keys(component)[0]

    if (isStringComponent(component)) {
        return stringmap.getString(component[property][eid]);
    } else {
        return component[property][eid];
    }
}

export const propertyCaseToComponentRead = (world: IWorld, property: string, eid: number, components: Map<string, Component>) => {
    const splitted = property.split('-')

    if (splitted.length == 2) {
        const component = componentStringNameToComponent(world, splitted[0], components)

        const subkey = splitted[1];


        if (isStringComponent(component)) {
            return stringmap.getString(component[subkey][eid]);
        } else {
            return component[subkey][eid];
        }

    } else if (splitted.length == 1) {

        const component = componentStringNameToComponent(world, property, components)

        if (component) {
            const keys = Object.keys(component)
            if (keys.length == 1) {

                if (isStringComponent(component)) {
                    return stringmap.getString(component[keys[0]][eid]);
                } else {
                    return component[keys[0]][eid];
                }
            }
        }
    }
}


export const componentPropertyWrite = (world: IWorld, component: Component, property: string | null, value: any, eid: number, components: Map<string, Component>) => {
    property = property || Object.keys(component)[0]

    if (!hasComponent(world, component, eid)) {
        setTimeout(() => {
            addComponent(world, component, eid)
        }, 0)
    }

    if (isStringComponent(component)) {
        component[property][eid] = stringmap.addString(value);
    } else {
        component[property][eid] = value;
    }
}

export const propertyCaseToComponentWrite = (world: IWorld, property: string, value: any, eid: number, components: Map<string, Component>) => {
    const splitted = property.split('-')

    if (splitted.length == 2) {
        const component = componentStringNameToComponent(world, splitted[0], components)

        const subkey = splitted[1];

        if (!hasComponent(world, component, eid)) {
            setTimeout(() => {
                addComponent(world, component, eid)
            }, 0)
        }



        if (isStringComponent(component)) {
            component[subkey][eid] = stringmap.addString(value);
        } else {
            component[subkey][eid] = value;
        }

    } else if (splitted.length == 1) {
        const component = componentStringNameToComponent(world, property, components)

        if (component) {
            const keys = Object.keys(component)
            if (keys.length == 1) {

                if (!hasComponent(world, component, eid)) {
                    setTimeout(() => {
                        addComponent(world, component, eid)
                    }, 0)
                }

                if (isStringComponent(component)) {
                    component[keys[0]][eid] = stringmap.addString(value);
                } else {
                    component[keys[0]][eid] = value;
                }
            }
        }
    }
}
