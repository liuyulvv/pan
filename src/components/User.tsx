import Http from '@/utils/Http';
import { UserInfo } from '@/utils/Interface';
import { Persona } from '@fluentui/react-components';
import { useEffect, useState } from 'react';

export default () => {
    const [user, setUser] = useState<UserInfo>();

    useEffect(() => {
        const params = new Map<string, string>([['method', 'uinfo']]);

        Http.get('rest/2.0/xpan/nas', params).then((res) => {
            const data: UserInfo = res.data as UserInfo;
            setUser(data);
        });
    }, []);

    return (
        <Persona
            name={user ? user.baidu_name : '未登录'}
            secondaryText={user ? (user.vip_type == 0 ? '' : user.vip_type == 1 ? 'VIP' : 'SVIP') : ''}
            presence={{ status: user ? 'available' : 'blocked' }}
            avatar={{
                image: {
                    src: user?.avatar_url
                }
            }}
        />
    );
};
