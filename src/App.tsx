import { FluentProvider, makeStyles, teamsDarkTheme, teamsLightTheme } from '@fluentui/react-components';
import { appWindow } from '@tauri-apps/api/window';
import 'normalize.css';
import { useEffect, useState } from 'react';
import ThemeSwitch from './components/ThemeSwitch';

window.APP_THEME = 'dynamic';

const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
});

export default () => {
    const styles = useStyles();
    const [themeOption, setThemeOption] = useState('dynamic');
    const [theme, setTheme] = useState('light');

    appWindow.onThemeChanged(({ payload: theme }) => {
        if (window.APP_THEME == 'dynamic') {
            setTheme(theme);
        }
    });

    useEffect(() => {
        if (window.APP_THEME == 'dynamic') {
            appWindow.theme().then((res) => {
                if (res) {
                    setTheme(res);
                }
            });
        }
    }, [themeOption]);

    return (
        <FluentProvider theme={theme == 'dark' ? teamsDarkTheme : teamsLightTheme}>
            <div className={styles.container}>
                <div>
                    <ThemeSwitch themeOption={themeOption} setTheme={setTheme} setThemeOption={setThemeOption} />
                </div>
            </div>
        </FluentProvider>
    );
};
