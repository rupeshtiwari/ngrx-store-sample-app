import { reducer } from 'app/core/store/tree';
import * as fromActions from 'app/core/store/actions/tree.actions';
describe('Tree Reducer', () => {
    describe('SELECT_EXPAND', () => {
        it('should toggle selected, tabIndex, expanded and update selectedpath', () => {
            const path = ['nodes', 0];
            const stateBefore = {
                loading: false,
                selectedPath: [],
                focusedPath: [],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , focused: false
                        , path: ['nodes', 0]
                    }
                ]
            };
            const result = reducer(stateBefore, fromActions.selectExpand(path, false));
            const stateAfter = {
                loading: false,
                selectedPath: ['nodes', 0],
                focusedPath: ['nodes', 0],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: true
                        , tabIndex: 0
                        , focused: true
                        , path: ['nodes', 0]
                    }
                ]
            };
            expect(result).toEqual(stateAfter);
        });
    });
    describe('SELECT_COLLAPSE', () => {
        it('should toggle expand on current selected path and toggle select on previous selected path', () => {
            const path = ['nodes', 1];
            const stateBefore = {
                loading: false,
                selectedPath: ['nodes', 0],
                focusedPath: [],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , focused: false
                        , path: ['nodes', 0]
                    },
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: true
                        , selected: true
                        , focused: true
                        , tabIndex: 0
                        , path: ['nodes', 1]
                    }
                ]
            };
            const result = reducer(stateBefore, fromActions.selectCollapse(path));
            const stateAfter = {
                loading: false,
                selectedPath: ['nodes', 1],
                focusedPath: ['nodes', 1],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , focused: false
                        , path: ['nodes', 0]
                    },
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: true
                        , focused: true
                        , tabIndex: 0
                        , path: ['nodes', 1]
                    }
                ]
            };
            expect(result).toEqual(stateAfter);
        });
    });
});
