import { Tab, TabList, TabValue, makeStyles } from '@fluentui/react-components';
import {
    DocumentDataFilled,
    DocumentDataRegular,
    RecycleFilled,
    RecycleRegular,
    ShareFilled,
    ShareRegular,
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

const DocumentDataIcon = bundleIcon(DocumentDataFilled, DocumentDataRegular);
const ShareIcon = bundleIcon(ShareFilled, ShareRegular);
const RecycleIcon = bundleIcon(RecycleFilled, RecycleRegular);

export default () => {
    const styles = useStyles();
    const navigate = useNavigate();

    const [value, setValue] = useState<TabValue>('document');

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
                    <Tab icon={<DocumentDataIcon />} value="document">
                        我的文件
                    </Tab>
                    <Tab icon={<ShareIcon />} value="share">
                        我的分享
                    </Tab>
                    <Tab icon={<RecycleIcon />} value="recycle">
                        回收站
                    </Tab>
                </TabList>
            </div>
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    );
};
