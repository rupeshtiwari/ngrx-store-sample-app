

import { Path } from 'app/core/models/common/path';

export class Todo {
    text: string;
    complete: boolean;
    path?: Path;
    id: string;
    fromValues(values: Todo) {
        return Object.assign(this, values);
    }
}
