import { invoke } from '@tauri-apps/api';
import { listen } from '@tauri-apps/api/event';
import { Store } from 'tauri-plugin-store-api';
import { AccessToken } from './Interface';

const store = new Store('user.config');

await listen('access_token', async () => {
    const token: AccessToken = await invoke('get_access_token');
    await store.set('AccessToken', token);
    await store.save();
});

export { store };
