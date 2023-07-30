import { AccessToken, UserInfo } from '@/utils/Interface';
import { store } from '@/utils/Store';
import { Persona } from '@fluentui/react-components';
import { http } from '@tauri-apps/api';
import { useEffect, useState } from 'react';

export default () => {
    const url = 'https://pan.baidu.com//rest/2.0/xpan/nas?method=uinfo&access_token=';

    const [user, setUser] = useState<UserInfo>();

    useEffect(() => {
        store.get('AccessToken').then((res) => {
            const token = res as AccessToken | null;
            if (token) {
                http.fetch(url + token.access_token).then((res) => {
                    const data: UserInfo = res.data as UserInfo;
                    setUser(data);
                });
            }
        });
    }, []);

    return (
        <Persona
            name={user ? user.baidu_name : '未登录'}
            secondaryText={user ? (user?.vip_type == 0 ? '' : user?.vip_type == 1 ? 'VIP' : 'SVIP') : ''}
            presence={{ status: user ? 'available' : 'blocked' }}
            avatar={{
                image: {
                    src: user?.avatar_url
                }
            }}
        />
    );
};
