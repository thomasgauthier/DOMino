import { Query as ASTQuery } from "ecss-parser/dist/ast-types";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../node";
import { useEffect, useMemo, useState } from "../../reactive";
import BinarySelector from "./BinarySelector";
import CompoundSelector from "./CompoundSelector";
import queryLifecycle, { QueryWithLifecycle } from "../../queryLifecycle";

type Props = EntityNodeEvaluatorProps<{ node: ASTQuery, setEvaluate: (val: () => () => QueryWithLifecycle) => void}>

const Query: EntityNodeEvaluator<Props> = ({ node: query,setEvaluate  }) => {
    const [childEvaluate, setChildEvaluate] = useState(() => () => new Set<number>())

    const evaluate = useMemo(() => {

        const l = childEvaluate()();
        const lifecycle = queryLifecycle()()

        if (typeof l === 'function' ) {
            return () => {
                lifecycle.update(l());
                return lifecycle;
            }
        } else {
            return () => {
                return new Set<number>();
            }
        }
    });

    if (setEvaluate) {
        setEvaluate(() => evaluate.value);
    }
  

return <>
        {query.selector.type == 'BinarySelector' && <BinarySelector node={query.selector} setEvaluate={setChildEvaluate} />}
        {query.selector.type == 'CompoundSelector' && <CompoundSelector node={query.selector} setEvaluate={setChildEvaluate} />}

    </>
}

export default Query
