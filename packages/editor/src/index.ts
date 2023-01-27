
import "./styles/main.css"
import "./component"

export type Components = {
    [key: string]: {
        [key: string]: 'number' | 'boolean';
    }
}