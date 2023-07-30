import { AccessToken, DriveStorage } from '@/utils/Interface';
import { store } from '@/utils/Store';
import { Field, ProgressBar } from '@fluentui/react-components';
import { http } from '@tauri-apps/api';
import { useEffect, useState } from 'react';

export default () => {
    const url = 'https://pan.baidu.com/api/quota?checkexpire=1&access_token=';

    const [used, setUsed] = useState(0);

    useEffect(() => {
        store.get('AccessToken').then((res) => {
            const token = res as AccessToken | null;
            if (token) {
                http.fetch(url + token.access_token).then((res) => {
                    const data: DriveStorage = res.data as DriveStorage;
                    setUsed(data.used / data.total);
                });
            }
        });
    }, []);

    return (
        <Field validationMessage="已用空间" validationState="warning">
            <ProgressBar value={used} thickness="large" />
        </Field>
    );
};
