import React from 'react'
import Imports from '../Imports'
//import { FlatButton } from 'material-ui'

const Export = ({leagueExport}) => (
  <div>
    <Imports />
    <textarea
      value={JSON.stringify(leagueExport, null, 2)}
      className='export-textarea'
      readOnly
    />
  </div>
)

export default Export
