import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'


import './assets/styles/import.css'

const Import = ({
  clearTeams,
  createTeam,
  clearPlayers,
  clearAttributes,
  createPlayer,
  updateAttribute,
  createConference,
  createDivision,
}) => (
  <div className='league-import'>
    <Dropzone
      multiple={false}
      style={{}}
      className='dropzone'
      onDrop={(accepted, rejected) => {
        let reader = new FileReader()

        reader.onload = data => {
          let league = JSON.parse(reader.result)


          clearTeams()
          clearPlayers()
          clearAttributes()

          league.teams.map(team => createTeam(team))

          league.players.map(team => createPlayer(team))

          updateAttribute('startingSeason', league.startingSeason)
          league.gameAttributes.map(attribute => {
            switch (attribute.key) {
              case 'confs':
                return attribute.value.map(conf => createConference(conf))
              case 'divs':
                return attribute.value.map(div => createDivision(div))
              default:
                return updateAttribute(attribute.key, attribute.value)
            }
          })}

          reader.readAsText(accepted[0])
        }}>
      Import league file. Click to select or drop file here
    </Dropzone>
  </div>
)

Import.PropTypes = {
  clearTeams: PropTypes.func,
  createTeam: PropTypes.func,
  clearAttributes: PropTypes.func,
  clearPlayers: PropTypes.func,
  createPlayer: PropTypes.func,
  updateAttribute: PropTypes.func,
  createConference: PropTypes.func,
  createDivision: PropTypes.func,
}

export default Import
