import { FluentProvider, makeStyles, teamsDarkTheme, teamsLightTheme } from '@fluentui/react-components';
import { appWindow } from '@tauri-apps/api/window';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import { store } from './utils/Store';

const appThemeOption: string | null = await store.get('AppThemeOption');

if (!appThemeOption) {
    window.APP_THEME_OPTION = 'dynamic';
    await store.set('AppThemeOption', 'dynamic');
    await appWindow.theme().then(async (res) => {
        if (res) {
            await store.set('AppTheme', res);
        }
    });
    await store.save();
} else {
    window.APP_THEME_OPTION = appThemeOption;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        marginLeft: '16px',
        marginRight: '16px'
    },
    header: {
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    content: {
        display: 'flex',
        width: '100%',
        flexGrow: '1',
        flexShrink: '1',
        flexBasis: '0%',
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexGrow: '1',
        flexShrink: '1',
        flexBasis: '0%',
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '64px'
    }
});

export default () => {
    const styles = useStyles();
    const [themeOption, setThemeOption] = useState(window.APP_THEME_OPTION);
    const [theme, setTheme] = useState('light');

    appWindow.onThemeChanged(async ({ payload: theme }) => {
        if (window.APP_THEME_OPTION == 'dynamic') {
            setTheme(theme);
            await store.set('AppTheme', theme);
            await store.save();
        }
    });

    useEffect(() => {
        if (window.APP_THEME_OPTION == 'dynamic') {
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
                <div className={styles.header}>
                    <Header themeOption={themeOption} setTheme={setTheme} setThemeOption={setThemeOption} />
                </div>
                <div className={styles.content}>
                    <Aside />
                    <div className={styles.main}>
                        <Outlet />
                        <div className={styles.footer}>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </FluentProvider>
    );
};
