import { makeStyles } from '@fluentui/react-components';
import Theme from './Theme';
import User from './User';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default (props: {
    themeOption: string;
    setTheme: (val: string) => void;
    setThemeOption: (val: string) => void;
}) => {
    const styles = useStyles();

    return (
        <div className={styles.header}>
            <User />
            <Theme themeOption={props.themeOption} setTheme={props.setTheme} setThemeOption={props.setThemeOption} />
        </div>
    );
};
