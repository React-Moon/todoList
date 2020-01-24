import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div>
        <Grid clos='12 9 10' >
            <input type="text" className="form-control" placeholder="Adicione uma tarefa" />
        </Grid>

        <Grid clos='12 9 10' >
            <IconButton style='primary' icon='plus' >
            </IconButton>
        </Grid>
    </div>
)