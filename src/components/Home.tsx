import { Tab, TabList, makeStyles } from '@fluentui/react-components';
import {
    DocumentDataFilled,
    DocumentDataRegular,
    RecycleFilled,
    RecycleRegular,
    ShareFilled,
    ShareRegular,
    bundleIcon
} from '@fluentui/react-icons';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        flexShrink: '1',
        marginLeft: '16px',
        marginRight: '16px'
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

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <TabList defaultSelectedValue="document">
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
        </div>
    );
};
