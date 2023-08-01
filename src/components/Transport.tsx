import { Tab, TabList, TabValue, makeStyles } from '@fluentui/react-components';
import {
    ArrowDownloadFilled,
    ArrowDownloadRegular,
    ArrowUploadFilled,
    ArrowUploadRegular,
    CheckmarkFilled,
    CheckmarkRegular,
    bundleIcon
} from '@fluentui/react-icons';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        flexShrink: '1',
        marginLeft: '16px',
        marginRight: '16px'
    },
    header: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        flexShrink: '1'
    }
});

const DownloadIcon = bundleIcon(ArrowDownloadFilled, ArrowDownloadRegular);
const UploadIcon = bundleIcon(ArrowUploadFilled, ArrowUploadRegular);
const FinishIcon = bundleIcon(CheckmarkFilled, CheckmarkRegular);

export default () => {
    const styles = useStyles();
    const navigate = useNavigate();

    const [value, setValue] = useState<TabValue>('download');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <TabList
                    selectedValue={value}
                    onTabSelect={(event, data) => {
                        const url = data.value as string;
                        setValue(url);
                        navigate(url);
                    }}
                >
                    <Tab icon={<DownloadIcon />} value="download">
                        正在下载
                    </Tab>
                    <Tab icon={<UploadIcon />} value="upload">
                        正在上传
                    </Tab>
                    <Tab icon={<FinishIcon />} value="finish">
                        传输完成
                    </Tab>
                </TabList>
            </div>
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    );
};
