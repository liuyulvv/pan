import { http } from '@tauri-apps/api';
import { AccessToken } from './Interface';
import { store } from './Store';

export default class Http {
    private static host = 'https://pan.baidu.com/';

    private static async buildGetUrl(url: string, params?: Map<string, string>) {
        let param = '?';
        await store.get('AccessToken').then((res) => {
            const token = res as AccessToken | null;
            if (token) {
                param += `access_token=${token.access_token}`;
            }
        });
        if (params) {
            params.forEach((value, key) => {
                param += `&${key}=${value}`;
            });
        }
        return this.host + url + param;
    }

    public static async get(url: string, params?: Map<string, string>) {
        const requestUrl = await this.buildGetUrl(url, params);
        return http.fetch(requestUrl);
    }
}
