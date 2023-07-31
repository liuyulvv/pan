import { Tab, TabList, makeStyles } from '@fluentui/react-components';
import {
    ArrowDownloadFilled,
    ArrowDownloadRegular,
    ArrowUploadFilled,
    ArrowUploadRegular,
    CheckmarkFilled,
    CheckmarkRegular,
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

const DownloadIcon = bundleIcon(ArrowDownloadFilled, ArrowDownloadRegular);
const UploadIcon = bundleIcon(ArrowUploadFilled, ArrowUploadRegular);
const FinishIcon = bundleIcon(CheckmarkFilled, CheckmarkRegular);

export default () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <TabList defaultSelectedValue="download">
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
    );
};
