import { Radio, RadioGroup } from '@fluentui/react-components';

export default (props: {
    themeOption: string;
    setTheme: (val: string) => void;
    setThemeOption: (val: string) => void;
}) => {
    return (
        <RadioGroup value={props.themeOption}>
            <Radio
                value="light"
                label="亮"
                onClick={() => {
                    props.setTheme('light');
                    props.setThemeOption('light');
                    window.APP_THEME = 'light';
                }}
            />
            <Radio
                value="dark"
                label="暗"
                onClick={() => {
                    props.setTheme('dark');
                    props.setThemeOption('dark');
                    window.APP_THEME = 'dark';
                }}
            />
            <Radio
                value="dynamic"
                label="跟随系统"
                onClick={() => {
                    props.setThemeOption('dynamic');
                    window.APP_THEME = 'dynamic';
                }}
            />
        </RadioGroup>
    );
};
