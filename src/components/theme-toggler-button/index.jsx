import { ToggleSwitch } from "../toggler-switch";
import { themes } from "../../style/themes";

export const ThemeTogglerButton = ({ toggleTheme, currentTheme }) => {
    const isDark = currentTheme === themes.dark;

    return (
        <div style={{ padding: "16px" }}>
            <ToggleSwitch checked={isDark} onChange={toggleTheme} />
        </div>
    );
};

