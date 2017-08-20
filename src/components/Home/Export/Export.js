import React from 'react'

const Export = ({leagueExport, teams, what}) => (
  <div>
    <textarea
      value={JSON.stringify(leagueExport, null, 2)}
      className='export-textarea'
      readOnly
    />
  </div>
)

export default Export
