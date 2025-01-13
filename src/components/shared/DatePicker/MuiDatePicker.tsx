import { Stack } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";
import { parseAsIsoDate, useQueryState } from 'nuqs'

export const MuiDatePicker = (): JSX.Element => {
    /* usage dayjs */
    const nextSunday = dayjs().endOf('week').startOf('day');
    function getDisabledDates(selectedDate: Dayjs) {
        return dayjs().add(0, 'days') <= selectedDate;
    }
      
    /* usage nuqs */
    const [datePicker, setDatePicker] = useQueryState('date', parseAsIsoDate.withDefault(new Date()));

    return (
        <Stack spacing={4} sx={{ width: 200 }}>
            <DatePicker 
                    label="Date" 
                    defaultValue={nextSunday}
                    shouldDisableDate={getDisabledDates}
                    value={dayjs(datePicker)}
                    onChange={(newValue) => {
                        setDatePicker(newValue?.toDate() || new Date());
                    }}
                    slotProps={{
                        textField: {
                            size: 'small',
                            fullWidth: true
                        }
                    }}
                />
        </Stack>
    )
};
