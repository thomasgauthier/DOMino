import { addComponent, addEntity, hasComponent, IWorld, removeComponent } from "bitecs";
import Components, { collision as Collision, ComponentKey, isStringComponent } from "./components"
import stringmap from "./stringmap";


const maps = (() => {

    let _eidToElement

    return {
        get eidToElement() {
            return _eidToElement
        },
        set eidToElement(val) {
            _eidToElement = val;
        }
    }
})();


let attrChanges: Function[] = [];
let elementsMap: Map<number, any>;

function init(elementName: string, world: IWorld) {
    type CustomElement = ReturnType<typeof customElement>;
    const eidToElement = new Map<number, CustomElement>()

    elementsMap = new Map<number, BaseElement>();

    class BaseElement extends HTMLElement {

        private _eid: number;
        public _components = new Set<keyof typeof Components>();

        get eid() {
            if (!this._eid) {
                this._eid = addEntity(world);
                elementsMap.set(this._eid, this)

                this.setAttribute('id', `entity-${this._eid.toString()}`)

            }
            return this._eid;
        }

        get components() {
            if (!this._components) {
                this._components = new Set<keyof typeof Components>();
            }
            return this._components;
        }

        constructor() {
            super();
        }

        connectedCallback() {
        }


        disconnectedCallback() {

        }

        static get observedAttributes() {
            return Object.keys(Components).map(c => c.toLowerCase())
        }

        public update() {
            if (hasComponent(world, Collision, this.eid)) {
                this.components.add('collision')
            }
            this.components.forEach(componentKey => {
                const c = Components[componentKey];

                if (hasComponent(world, c, this.eid)) {
                    const obj: any = {}
                    Object.keys(c).forEach(key => {
                        if (isStringComponent(c)) {
                            obj[key] = stringmap.getString(c[key][this.eid])
                        } else {
                            obj[key] = c[key][this.eid]
                        }
                    })

                    this.setAttribute(componentKey.toLowerCase(), JSON.stringify(obj))
                } else {
                    this.removeAttribute(componentKey.toLowerCase());
                }

            })
        }

        attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {

            if (oldValue === null && newValue !== null) {
                attrChanges.push(() => {
                    const val = JSON.parse(newValue);

                    const componentName = name as ComponentKey;

                    const component = Components[componentName];


                    if (!hasComponent(world, component, this.eid)) {
                        addComponent(world, component, this.eid)
                    }

                    Object.keys(val).forEach(key => {

                        if (isStringComponent(component)) {
                            component[key][this.eid] = stringmap.addString(val[key])
                        } else {
                            component[key][this.eid] = val[key]
                        }
                    })

                    this.components.add(componentName)
                })

            } else if (newValue === null && oldValue !== null) {
                attrChanges.push(() => {
                    const componentName = name as ComponentKey;
                    this.components.delete(componentName)

                    const component = Components[componentName];

                    if (hasComponent(world, component, this.eid)) {
                        removeComponent(world, component, this.eid)
                    }
                });
            }

        }
    }

    Object.setPrototypeOf(customElement.prototype, BaseElement.prototype);
    Object.setPrototypeOf(customElement, BaseElement);


    function customElement() {

        const self = this;

        let res = Reflect.construct(HTMLElement, [], customElement);

        const componentGetterCache = new Map<number, any>()

        for (let key in Components) {
            Object.defineProperty(res, key.toLowerCase(), {
                get: function () {

                    if (!componentGetterCache.get(res.eid)) {

                        const obj = {

                        };

                        Object.keys(Components[key]).forEach(keyInComp => {

                            Object.defineProperty(obj, keyInComp, {
                                enumerable: true,
                                get: function () {
                                    return Components[key][keyInComp][res.eid]
                                },
                                set: function (val) {
                                    Components[key][keyInComp][res.eid] = val;
                                }
                            });

                        })

                        componentGetterCache.set(res.eid, obj)
                    }

                    return componentGetterCache.get(res.eid)

                },
                set(val) {
                    Object.keys(val).forEach(key => {
                        Components[key.toLowerCase()][key][res.eid] = val[key]
                    })
                },
            });
        }

        return res;
    }


    customElements.define(elementName, customElement as any as CustomElementConstructor);
}


export default {
    init,
    update: function (dt: number) {

        attrChanges.forEach(e => e());
        attrChanges = [];
        elementsMap.forEach((val) => {
            val.update(dt)
        })
    },
    elementsMap: elementsMap
}

