import { Tab, TabList, TabValue } from '@fluentui/react-components';
import {
    ArrowRotateCounterclockwiseFilled,
    ArrowRotateCounterclockwiseRegular,
    HomeFilled,
    HomeRegular,
    bundleIcon
} from '@fluentui/react-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const TransportIcon = bundleIcon(ArrowRotateCounterclockwiseFilled, ArrowRotateCounterclockwiseRegular);

export default () => {
    const navigate = useNavigate();

    const [value, setValue] = useState<TabValue>('home');

    return (
        <TabList
            vertical
            size="large"
            selectedValue={value}
            onTabSelect={(event, data) => {
                const url = data.value as string;
                setValue(url);
                navigate(url);
            }}
        >
            <Tab icon={<HomeIcon />} value="home">
                首页
            </Tab>
            <Tab icon={<TransportIcon />} value="transport">
                传输
            </Tab>
        </TabList>
    );
};
