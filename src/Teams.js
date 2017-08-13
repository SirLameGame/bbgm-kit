import React, { Component } from 'react'
import { Form, Row, Grid, Button } from 'react-bootstrap'
import TeamForm from './TeamForm'

export default class Teams extends Component {
  render() {

    let teams = this.props.teams.map((team, idx) => {

      if (team.name === '') {
        team.name = `Team`
      }

      return (
        <TeamForm key={idx} team={team} />
      )
    })

    return (
      <Grid>
        <Row>
          <Button className onClick={this.props.newTeam}>Create Team</Button>
        </Row>
        <hr/>
        <Row>
          <Form horizontal>
            {teams}
          </Form>
        </Row>

      </Grid>
    )
  }
}
