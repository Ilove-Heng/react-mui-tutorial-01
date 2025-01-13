import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Pagination,
  TableContainer,
  Typography,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useUsers } from '../../hooks/queries/useUsers';
import CircularProgress from '@mui/joy/CircularProgress';
import { useState } from 'react';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { MuiSelectMultiple } from '@components/shared/Form/Select/MuiSelectMultiple';
import { MuiDatePicker } from '@components/shared/DatePicker/MuiDatePicker';
import { MuiSelect } from '@components/shared/Form/Select/MuiSelect';
import MuiTable from '@components/shared/Form/Table/MuiTable';
import { MuiInput } from '@components/shared/Form/Input/MuiInput';


/* static data */
const options = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
];

const optionsAge = [
  { value: "10", label: "Ten" },
  { value: "20", label: "Twenty" },
  { value: "30", label: "Thirty" },
];

export function UserList(): JSX.Element {
  const { data: users, isLoading, error, refetch, isRefetching } = useUsers();

  /* usage nuqs */
  const [search, setSearch] = useQueryState("search", { defaultValue: '' });
  const [count, setCount] = useQueryState('count', parseAsInteger.withDefault(0));
  const [age, setAge] = useQueryState('age', parseAsString.withDefault(''));

  /* usage react-query */
  const [value, setValue] = useState<string[]>([]);

  /* functional usage */
  const handleChangeCountry = (value: string[]) => {
    return setValue(value);
  };

  const handleChangeAge = (value: string) => {
    setAge(value);
  };

  const handleRefetch = async () => {
    await refetch({ throwOnError: false, cancelRefetch: false });
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error" />;
  }

  return (
    <TableContainer>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Core
        </Link>
        <Typography sx={{ color: 'text.primary' }}>UserList</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >

            <MuiInput
            label="Search"
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            color="primary"
            startAdornment="🔎"
            endAdornment={
              search.length > 0 ? (
                <InputAdornment position="end" style={{ width: 26 }}>
                  <IconButton onClick={() => setSearch('')}>
                    <CancelRoundedIcon/>
                  </IconButton>
                </InputAdornment>
              ) : (
                <InputAdornment position="end" style={{ width: 26 }} />
              )
            }
          />

          <MuiSelect
            label="Age"
            options={optionsAge}
            value={age}
            onChange={handleChangeAge}
            fullWidth
            error=''
          />

          <MuiSelectMultiple
            label="Select"
            options={options}
            value={value}
            onChange={handleChangeCountry}
            multiple
            fullWidth
            error=''
          />

          <MuiDatePicker/>

        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>

        <Button 
        onClick={() => setCount(count + 1)} 
        variant="contained" 
        sx={{
          whiteSpace: 'nowrap',
        }}
        >
          Count: {count}
          </Button>

          <Button
            onClick={handleRefetch}
            variant="outlined"
            disabled={isRefetching}
            startIcon={isRefetching ? null : <RefreshIcon />}
          >
            {isRefetching ? <CircularProgress size="sm" /> : 'Refetch'}
          </Button>

        </Box>
      </Box>

      <MuiTable users={users?.filter(Boolean) ?? []}/>

      <Pagination
        sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        count={10}
        color="primary"
      >
      </Pagination>

    </TableContainer>
  );
}

