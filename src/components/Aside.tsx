import { Tab, TabList } from '@fluentui/react-components';
import {
    ArrowRotateCounterclockwiseFilled,
    ArrowRotateCounterclockwiseRegular,
    HomeFilled,
    HomeRegular,
    bundleIcon
} from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const TransportIcon = bundleIcon(ArrowRotateCounterclockwiseFilled, ArrowRotateCounterclockwiseRegular);

export default () => {
    const navigate = useNavigate();

    return (
        <TabList
            defaultSelectedValue="home"
            vertical
            size="large"
            onTabSelect={(res) => {
                console.log(res);
            }}
        >
            <Tab
                icon={<HomeIcon />}
                value="home"
                onClick={() => {
                    navigate('/home');
                }}
            >
                首页
            </Tab>
            <Tab
                icon={<TransportIcon />}
                value="transport"
                onClick={() => {
                    navigate('/transport');
                }}
            >
                传输
            </Tab>
        </TabList>
    );
};
