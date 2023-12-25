import * as material from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../../components";
import "./style.css";

function HomePage() {

  return (
    <>
      <main>
        <material.Container
          maxWidth="md"
          sx={{
            marginY: "20px",
          }}
        >
          <material.Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <material.Grid item lg={12}>
              <material.Card>
                <material.Typography variant="h1" fontSize={30} padding={3}>
                  Introdução ao Desenvolvimento Front-end com React
                </material.Typography>
              </material.Card>
            </material.Grid>
            <material.Grid item lg={4}>
              <material.Card sx={{ height: 550, position: "relative" }}>
                <material.CardMedia
                  sx={{ height: 140 }}
                  image="https://picsum.photos/id/1/600/600"
                  title="O Curso"
                />
                <material.CardContent>
                  <material.Typography variant="h5">O projeto original</material.Typography>
                  <material.Typography variant="body2">
                    O projeto original propôs a diferentes públicos a experimentação com
                    React, uma das bibliotecas JavaScript mais utilizadas na
                    atualidade. Por meio de criação de componentes dinâmicos foi construída uma aplicação
                    do zero fazendo uso de boas práticas de desenvolvimento
                    front-end e do consumo de APIs*.
                  </material.Typography>
                </material.CardContent>
                <material.CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 4,
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <Link
                    className="btn-close"
                    to="https://github.com/andersonstudioa/sesc-react-app"
                    target="_blank"
                  >
                    Repositório
                  </Link>
                </material.CardActions>
              </material.Card>
            </material.Grid>
            <material.Grid item lg={4}>
              <material.Card sx={{ height: 550, position: "relative" }}>
                <material.CardMedia
                  sx={{ height: 140 }}
                  image="https://picsum.photos/id/2/600/600"
                  title="O Curso"
                />
                <material.CardContent>
                  <material.Typography variant="h5">Projetos</material.Typography>
                  <material.Typography variant="body2">
                    Um projeto em negócio e ciência é normalmente definido como
                    um empreendimento, frequentemente envolvendo pesquisa ou
                    desenho, que tem como objetivo alcançar um resultado
                    exclusivo. Em geral um projeto possui três características
                    fundamentais: tempo (início e fim), recursos (pessoas,
                    ferramentas etc) e trata de algo que não existia
                    anteriormente.
                  </material.Typography>
                </material.CardContent>
                <material.CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 4,
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <Link className="btn-close" to="/projects">
                    Gerenciar Projetos
                  </Link>
                </material.CardActions>
              </material.Card>
            </material.Grid>
            <material.Grid item lg={4}>
              <material.Card sx={{ height: 550, position: "relative" }}>
                <material.CardMedia
                  sx={{ height: 140, width: "auto" }}
                  image="https://picsum.photos/id/3/600/600"
                  title="O Curso"
                />
                <material.CardContent>
                  <material.Typography variant="h5">Tarefas</material.Typography>
                  <material.Typography variant="body2">
                    Em gerenciamento de projetos, uma tarefa é uma atividade que
                    precisa ser realizada dentro de um período de tempo definido
                    ou por um prazo. Uma tarefa pode ser dividida em atribuições
                    que também devem ter uma data de início e fim definidas ou
                    um prazo para a conclusão.
                  </material.Typography>
                </material.CardContent>
                <material.CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 4,
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <Link className="btn-close" to="/tasks">
                    Gerenciar Tarefas
                  </Link>
                </material.CardActions>
              </material.Card>
            </material.Grid>
          </material.Grid>
        </material.Container>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
