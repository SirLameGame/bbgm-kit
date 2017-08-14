import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Grid, Button } from 'react-bootstrap'
import { team } from './reducers/TeamsReducers'
import TeamForm from './TeamForm'

const Teams = ({
  createTeam,
  teams
}) => (
  <Grid>
    <Row>
      <Button className onClick={event => createTeam(team())}>Create Team</Button>
    </Row>
    <hr/>
    <Row>
      <Form horizontal>
        {teams.map((team, idx) => <TeamForm key={idx} team={team} />) }
      </Form>
    </Row>
  </Grid>
)

Teams.PropTypes = {
  team: PropTypes.object,
  createTeam: PropTypes.func
}

export default Teams
