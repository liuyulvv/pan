import { makeStyles } from '@fluentui/react-components';
import User from './User';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end'
    }
});

export default () => {
    const styles = useStyles();

    return (
        <div className={styles.header}>
            <User />
        </div>
    );
};
