import { State } from 'app/reducers/tree';
import * as R from 'ramda';

export const clearNodes = R.evolve({ nodes: () => [] });
export const getNodesWithoutChild = R.map(clearNodes);
export const getSelectedNodes = (path) => R.view(R.lensPath(R.append('nodes', path)));
export const getNodes = (state: State) => state.nodes;
