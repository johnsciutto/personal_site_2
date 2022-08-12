import { Grid, Button } from '@mui/material';

function App() {
  const handleClick = () => {
    console.log('Testing works');
  };

  return (
    <Grid container>
      <Grid item>
        <Button
          onClick={handleClick}
          size="large"
          variant="contained"
        >
          Testing This Out
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
