import Http from '@/utils/Http';
import { DriveStorage } from '@/utils/Interface';
import { Field, ProgressBar } from '@fluentui/react-components';
import { useEffect, useState } from 'react';

export default () => {
    const [used, setUsed] = useState(0);

    useEffect(() => {
        Http.get('api/quota').then((res) => {
            const data = res.data as DriveStorage;
            setUsed(data.used / data.total);
        });
    }, []);

    return (
        <Field validationMessage="已用空间" validationState="warning">
            <ProgressBar value={used} thickness="large" />
        </Field>
    );
};
