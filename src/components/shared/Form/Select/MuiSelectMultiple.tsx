import { Box, MenuItem, FormControl, Select, InputLabel, FormHelperText } from "@mui/material";

export interface MuiSelectProps {
    label: string;
    options: { value: string; label: string }[];
    value: string[];
    onChange: (value: string[]) => void;
    error?: string;
    multiple?: boolean;
    variant?: "filled" | "outlined" | "standard";
    size?: "small" | "medium";
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
    fullWidth?: boolean;
}

export function MuiSelectMultiple({
    label,
    options,
    value,
    onChange,
    error: errorMessage,
    multiple = false,
    variant = "outlined",
    size = "small",
    color = "secondary",
    fullWidth = false,
}: MuiSelectProps): JSX.Element {
    return (
        <Box width={fullWidth ? 200 : 250}>
            <FormControl variant={variant} size={size} color={color} error={!!errorMessage} fullWidth={fullWidth}>
                <InputLabel>{label}</InputLabel>
                <Select
                    multiple={multiple}
                    label={label}
                    value={value}
                    onChange={(e) => onChange(e.target.value as string[])}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
            </FormControl>
        </Box>
    );
}

