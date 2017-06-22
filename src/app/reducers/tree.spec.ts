import { reducer } from 'app/reducers/tree';
import * as fromActions from '../actions/tree';
describe('Tree Reducer', () => {
    describe('TOGGLE_NODE', () => {
        let stateBefore, result;
        beforeEach(() => {
            stateBefore = {
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
                    },
                    {
                        title: 'shared'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 1]
                    }
                ]
            };
            result = reducer(stateBefore, fromActions.toggleNode(['nodes', 0]));
        });
        it('can update selected, tabIndex, expaded', () => {
            const stateAfter = {
                loading: false,
                selectedPath: [],
                nodes: [
                    {
                        title: 'core'
                        , nodes: []
                        , expanded: true
                        , selected: true
                        , tabIndex: 0
                        , path: ['nodes', 0]
                    },
                    {
                        title: 'shared'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 1]
                    }
                ]
            };
            expect(result).toEqual(stateAfter);
        });
    });
});
