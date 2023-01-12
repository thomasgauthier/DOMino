const queryLifecycle = () => {
    return () => {
        const seenBefore = new Set<number>()
        const added = new Set<number>()
        const removed = new Set<number>()

        let all = new Set<number>();

        let nmUpdates = 0;

        let _lastFrame = 0;


        let lifeTimes = new Float32Array(100000);

        let countFrames = false;

        return {
            update(entities: Set<number>, lastFrame: number = 0) {
                _lastFrame = lastFrame;
                all = entities
                added.clear();
                removed.clear();

                entities.forEach(e => {
                    if (!seenBefore.has(e)) {
                        seenBefore.add(e)
                        added.add(e)
                    }
                })




                seenBefore.forEach(s => {
                    if (!entities.has(s)) {
                        removed.add(s)
                        seenBefore.delete(s)
                    }
                })


                if (countFrames) {
                    entities.forEach(eid => {
                        lifeTimes[eid] = lifeTimes[eid] + 1
                    })

                    removed.forEach(eid => {
                        lifeTimes[eid] = 0;
                    })
                }
                nmUpdates++;
            },
            get lastFrame() {
                return _lastFrame
            },
            get updates() {
                return nmUpdates;
            },
            get added(): Set<number> {
                return new Set(added);
            },
            get removed(): Set<number> {
                return new Set(removed)
            },
            get all() {
                return all
            },
            lifetime: (eid: number) => {
                if (!countFrames) {
                    countFrames = true
                }

                const life = lifeTimes[eid]

                return life
            }
        }
    }
}

export default queryLifecycle;

export type QueryWithLifecycle = ReturnType<ReturnType<typeof queryLifecycle>>;
