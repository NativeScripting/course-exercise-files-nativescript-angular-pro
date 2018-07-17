import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { State, INITIAL_STATE, StateKey } from './app-state';

export class Store {

    private subj = new BehaviorSubject<State>(INITIAL_STATE);

    public get value() {
        return this.subj.value;
    }

    public select<T>(name: StateKey): Observable<T> {
        return this.subj.pluck<State, T>(name).distinctUntilChanged<T>();
    }

    public set<T>(name: StateKey, state: T) {
        this.subj.next({
            ...this.value, [name]: state
        });
    }
}
