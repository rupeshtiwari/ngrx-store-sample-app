export class State {
    loading: boolean;
}
export const initialState = {
    loading: false
};

export const getLoading = (state: State) => state.loading;
