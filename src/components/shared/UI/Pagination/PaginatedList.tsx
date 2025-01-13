import Box from "@mui/material/Box";
import PaginatedContent from './PaginatedContent';


const PaginationList = (): JSX.Element => {
    const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    
    return (
      <PaginatedContent totalItems={items.length}>
        {({ startIndex, endIndex }) => (
          <Box sx={{
            marginTop: 8,
          }}>
            {items.slice(startIndex, endIndex).map((item, index) => (
              <Box key={startIndex + index} 
              sx={{
                padding: 1,
                border: '1px solid #ccc',
                borderRadius: 4,
              }}
              >
                {item}
              </Box>
            ))}
          </Box>
        )}
      </PaginatedContent>
    );
  };

  export default PaginationList;