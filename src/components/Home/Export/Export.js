import React from 'react'
import Import from '../Import'
import FileSaver from 'file-saver'
import { Button } from 'react-bootstrap'

const Export = ({leagueExport}) => (
  <div>
    <Import />
    <textarea
      value={JSON.stringify(leagueExport, null, 2)}
      className='export-textarea'
      readOnly
    />
    <Button
      onClick={() => {
          FileSaver.saveAs(new File([JSON.stringify(this.props.leagueExport, null, 2)],
            "roster.txt", {type: "text/plain;charset=utf-8"}));
        }}>Download</Button>
  </div>
)

export default Export
