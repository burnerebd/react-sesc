import { Box, Card, Grid } from "@mui/material"

function HomePage() {
  return (
    <Box>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Grid item width="70%">
          <Card>
          <h1 style={{ color: 'grey' }}>Página Inicial</h1>
          </Card>
        </Grid>
        <Grid container direction="row" justifyContent="space-between" width="70%">
        <Grid item margin="10px">
          <Card>
          Seja bem-vindo!
          </Card>
        </Grid>
          <Grid item margin="10px">
            <Card>
            Tasks
            </Card>
          </Grid>
          <Grid item margin="10px">
            <Card>
            Projects
            </Card>
          </Grid>
        </Grid>
      </Grid>
      {/* <ul>
        <li><a style={{ color: 'default' }} href="/tasks">
          <Box sx={{margin: '30px', borderRadius: '10px', height: '100px', background: 'black', textAlign: 'center'}}>
            Tarefas
          </Box>
        </a></li>
        <li><a style={{ color: 'default' }} href="/projects">Projetos</a></li>
      </ul> */}
    </Box>
  )
}

export default HomePage