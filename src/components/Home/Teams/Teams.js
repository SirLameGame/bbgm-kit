import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Grid, Button } from 'react-bootstrap'
import { team } from './reducers'
import TeamForm from './TeamForm/TeamForm'

const Teams = ({
  createTeam,
  createRandoTeams,
  teams
}) => (
  <Grid>
    <Row>
      <Button className onClick={() => createTeam(team())}>Create Team</Button>
      <Button className onClick={() => createRandoTeams()}>Create Random Teams</Button>
    </Row>
    <hr/>
    <Row>
      <Form horizontal>
        {teams.map((team, idx) => <TeamForm key={team.uuid} team={team} />) }
      </Form>
    </Row>
  </Grid>
)

Teams.PropTypes = {
  team: PropTypes.object,
  createTeam: PropTypes.func,
  createTeams: PropTypes.func
}

export default Teams
