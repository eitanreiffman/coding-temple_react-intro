import React from 'react'

export default function RacerTable(props) {
    const tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];

    return (
    <div>
        <table className='table table-primary table-striped'>
            <thead>
                <tr>
                    {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.racers.map( racer => (
                    <tr key={racer.position}>
                        <th>{racer.position}</th>
                        <th>{racer.Driver.givenName}</th>
                        <th>{racer.Driver.familyName}</th>
                        <th>{racer.points}</th>
                        <th>{racer.wins}</th>
                        <th>{racer.Driver.nationality}</th>
                        <th>{racer.Constructors[0].name}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
