import { usePaginationSearchParams } from "../../../../utils/nuqs/search-params.pagination";
import Box from "@mui/material/Box";
import Pagination from '@mui/material/Pagination';

type PaginatedContentProps = {
  totalItems: number,
  children: (props: {
    pageIndex: number,
    pageSize: number,
    startIndex: number,
    endIndex: number
  }) => JSX.Element
};


const PaginatedContent = ({ totalItems, children }: PaginatedContentProps): JSX.Element => {
    const [{ pageIndex, pageSize }, setPaginationState] = usePaginationSearchParams();
    
    const totalPages = Math.ceil(totalItems / pageSize);
    
    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        console.log(event);
      setPaginationState({ pageIndex: newPage - 1 });
    };
  
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }} >
        <div>
          {children({
            pageIndex,
            pageSize,
            startIndex: pageIndex * pageSize,
            endIndex: Math.min((pageIndex + 1) * pageSize, totalItems)
          })}
        </div>
        
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
  
        }}
        >
          <Pagination 
            page={pageIndex + 1}
            count={totalPages}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            variant='outlined'
          />
        </Box>
      </Box>
    );
  };
  

export default PaginatedContent;