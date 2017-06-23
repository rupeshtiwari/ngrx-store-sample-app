import { reducer } from 'app/reducers/tree';
import * as fromActions from '../actions/tree';
describe('Tree Reducer', () => {
    describe('TOGGLE_NODE', () => {
        it('should toggle selected, tabIndex, expanded and update selectedpath', () => {
            const stateBefore = {
                loading: false,
                selectedPath: [],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 0]
                    }
                ]
            };
            const result = reducer(stateBefore, fromActions.toggleNode(['nodes', 0]));
            const stateAfter = {
                loading: false,
                selectedPath: ['nodes', 0],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: true
                        , tabIndex: 0
                        , path: ['nodes', 0]
                    }
                ]
            };
            expect(result).toEqual(stateAfter);
        });
        it('should toggle expand on current selected path and toggle select on previous selected path', () => {
            const stateBefore = {
                loading: false,
                selectedPath: ['nodes', 0],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: true
                        , tabIndex: 0
                        , path: ['nodes', 0]
                    },
                     {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 1]
                    }
                ]
            };
            const result = reducer(stateBefore, fromActions.toggleNode(['nodes', 1]));
            const stateAfter = {
                loading: false,
                selectedPath: ['nodes', 1],
                nodes: [
                     {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 0]
                    },
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: false
                        , selected: true
                        , tabIndex: 0
                        , path: ['nodes', 1]
                    }
                ]
            };
            expect(result).toEqual(stateAfter);
        });
    });
});
