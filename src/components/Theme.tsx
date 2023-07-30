import { store } from '@/utils/Store';
import { Button } from '@fluentui/react-components';
import { SystemFilled, WeatherMoonFilled, WeatherSunnyFilled } from '@fluentui/react-icons';
import { appWindow } from '@tauri-apps/api/window';

export default (props: {
    themeOption: string;
    setTheme: (val: string) => void;
    setThemeOption: (val: string) => void;
}) => {
    return (
        <Button
            appearance="transparent"
            shape="rounded"
            size="large"
            icon={
                props.themeOption == 'dynamic' ? (
                    <SystemFilled />
                ) : props.themeOption == 'dark' ? (
                    <WeatherMoonFilled />
                ) : (
                    <WeatherSunnyFilled />
                )
            }
            onClick={async () => {
                // dynamic -> light -> dark -> dynamic
                if (props.themeOption == 'dynamic') {
                    props.setTheme('light');
                    props.setThemeOption('light');
                    window.APP_THEME_OPTION = 'light';
                    await store.set('AppTheme', 'light');
                    await store.set('AppThemeOption', 'light');
                    await store.save();
                } else if (props.themeOption == 'light') {
                    props.setTheme('dark');
                    props.setThemeOption('dark');
                    window.APP_THEME_OPTION = 'dark';
                    await store.set('AppTheme', 'dark');
                    await store.set('AppThemeOption', 'dark');
                    await store.save();
                } else {
                    props.setThemeOption('dynamic');
                    window.APP_THEME_OPTION = 'dynamic';
                    await appWindow.theme().then(async (res) => {
                        if (res) {
                            props.setTheme(res);
                            await store.set('AppTheme', res);
                            await store.set('AppThemeOption', window.APP_THEME_OPTION);
                            await store.save();
                        }
                    });
                }
            }}
        ></Button>
    );
};
