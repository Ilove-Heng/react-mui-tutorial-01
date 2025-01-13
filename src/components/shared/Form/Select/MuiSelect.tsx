import { Box, MenuItem, FormControl, Select, InputLabel, FormHelperText } from "@mui/material";

export interface MuiSelectProps {
    label: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
    variant?: "filled" | "outlined" | "standard";
    size?: "small" | "medium";
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
    fullWidth?: boolean;
}

export function MuiSelect({
    label,
    options,
    value,
    onChange,
    error: errorMessage,
    variant = "outlined",
    size = "small",
    color = "secondary",
    fullWidth = false,
}: MuiSelectProps): JSX.Element {
    return (
        <Box>
            <FormControl sx={{  minWidth: 120 }} variant={variant} size={size} color={color} error={!!errorMessage} fullWidth={fullWidth}>
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    value={value}
                    onChange={(e) => onChange(e.target.value as string)}
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

// Usage example
// <MuiSelect
//     label="Select Option"
//     options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }]}
//     value="1"
//     onChange={(newValue) => console.log(newValue)}
//     error=""
//     fullWidth
// />

