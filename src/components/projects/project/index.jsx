import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import dataTeams from '../../../data/data-teams.json';

function Project( {
  id,
  title,
  description,
  client,
  idTeam,
  deadline,
  startDate,
  endDate,
  status,
  deleteProject
  } ) {

  const [teams] = useState(dataTeams);
  const getTeamNameByID = (id) => {
    const targetTeam = teams.find((team) => team.id === id);
    return targetTeam.name;
  }

  return (
    <>
      <Grid
        container
      >
        <Grid item xs={12}>
          <Typography variant='h5'>
            {title || ''}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>
            {description || ''}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body2'>
            Cliente: {client || ''}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body2'>
            Equipe: {idTeam || ''}
          {getTeamNameByID(idTeam)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body2'>
            Previsão: {deadline || ''}
          </Typography>
          <Typography variant='body2'>
            Início: {startDate || ''}
          </Typography>
          <Typography variant='body2'>
            Término: {endDate || ''}
          </Typography>
          <Typography className={`project-${status}}` variant='body2'>
            {status || ''}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <div className='task-actions'>
            <button className='btn-delete' onClick={() => deleteProject(id)}>x</button>
          </div>
        </Grid>
      </Grid>
      <hr />
    </>
  )
}

export default Project;
