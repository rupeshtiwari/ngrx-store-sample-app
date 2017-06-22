import { reducer } from 'app/reducers/todo';
import * as fromActions from '../actions/todo';

describe('todo', () => {
describe('COMPLETE_TODO', () => {
    it('can complete todo', () => {
        const stateBefore = {
            todos: [{ text: 'testing', complete: false, path: ['todos', 0] }]
        };
         const stateAfter = {
           todos: [{ text: 'testing', complete: true, path: ['todos', 0] }]
        };
        const result = reducer(stateBefore, fromActions.completeTodo(['todos', 0]));
        expect(result).toEqual(stateAfter);
    });
});
    describe('ADD_TODO', () => {
         it('can add new todo', () => {
        const stateBefore = {
            todos: []
        };
        const result = reducer(stateBefore, fromActions.addTodo({ text: 'testing' }));
        const stateAfter = {
            todos: [{ text: 'testing' }]
        };
        expect(result).toEqual(stateAfter);
    });
        it('can add new todo if already one present', () => {
            const stateBefore = {
                todos: [{ text: 'testing' }]
            };
            const stateAfter = {
                todos: [{ text: 'testing' }, { text: 'testing1' }]
            };
            const result = reducer(stateBefore, fromActions.addTodo({ text: 'testing1' }));
            expect(result).toEqual(stateAfter);

        });
        it('it does not mutate the initial todo', () => {
            const stateBefore = {
                todos: [{ text: 'testing' }]
            };
            const stateAfter = {
                todos: [{ text: 'testing' }, { text: 'testing1' }]
            };
            const result = reducer(stateBefore, fromActions.addTodo({ text: 'testing1' }));
            expect(stateBefore.todos[0] == result.todos[0]).toBeTruthy();
            expect(stateBefore.todos[0]).toEqual(result.todos[0]);
        });
    });
});
