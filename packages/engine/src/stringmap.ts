import { xxHash32 } from 'js-xxhash';

const map = new Map<number, string>()

export default {
    addString: (str: string) => {
        const id = xxHash32(String(str));
        map.set(id, str)

        return id

    },
    getString(id: number) {
        return map.get(id);
    }
};
