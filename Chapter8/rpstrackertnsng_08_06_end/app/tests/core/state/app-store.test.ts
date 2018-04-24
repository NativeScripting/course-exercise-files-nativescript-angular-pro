import 'reflect-metadata';
import { Store } from '../../../core/state/app-store';


describe('Pt Store works', () => {
    it('selected preset is open', () => {
        const store = new Store();
        store.set('selectedPreset', 'open');

        expect(store.value.selectedPreset).toBe('open');
    });

    it('selected preset is closed', () => {
        const store = new Store();
        store.set('selectedPreset', 'closed');

        expect(store.value.selectedPreset).toBe('closed');
    });
});

describe('Pt Store works 2', () => {
    it('selected preset is open', () => {
        const store = new Store();
        store.set('selectedPreset', 'open');

        expect(store.value.selectedPreset).toBe('open');
    });

    it('selected preset is closed', () => {
        const store = new Store();
        store.set('selectedPreset', 'closed');

        expect(store.value.selectedPreset).toBe('closed');
    });
});
