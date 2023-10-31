import { Container, Card, Grid, Typography, CardMedia, CardContent, CardActions } from "@mui/material"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginY: '20px'
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid
          item
          lg={12}
        >
          <Card>
            <Typography
              variant="h1"
              fontSize={30}
              padding={3}
            >
              Introdução ao Desenvolvimento Front-end com React
            </Typography>
          </Card>
        </Grid>

        <Grid
          item
          lg={4}
        >
          <Card>
            <CardMedia
              sx={{height: 140}}
              image="https://picsum.photos/id/1/600/600"
              title="O Curso"
            />
            <CardContent>
              <Typography variant="h5" >
                Nosso Curso
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Texto do Curso...
              </Typography>
            </CardContent>
            <CardActions
              sx={{display: 'flex', justifyContent: 'center', paddingBottom: 4}}
            >
              <Link
                className="btn-close"
                target="_blank"
              >
                Repositório
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
        >
          <Card>
            <CardMedia
              sx={{height: 140}}
              image="https://picsum.photos/id/2/600/600"
              title="O Curso"
            />
            <CardContent>
              <Typography variant="h5" >
                Projetos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Texto dos Projetos...
              </Typography>
            </CardContent>
            <CardActions
              sx={{display: 'flex', justifyContent: 'center', paddingBottom: 4}}
            >
              <Link
                className="btn-close"
              >
                Repositório
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          item
          lg={4}
        >
          <Card>
            <CardMedia
              sx={{height: 140}}
              image="https://picsum.photos/id/3/600/600"
              title="O Curso"
            />
            <CardContent>
              <Typography variant="h5" >
                Tarefas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Texto das Tarefas...
              </Typography>
            </CardContent>
            <CardActions
              sx={{display: 'flex', justifyContent: 'center', paddingBottom: 4}}
            >
              <Link
                className="btn-close"
                href="./tasks"
              >
                Repositório
              </Link>
            </CardActions>
          </Card>
        </Grid>


      </Grid> 
    </Container>
  )
}

export default HomePage