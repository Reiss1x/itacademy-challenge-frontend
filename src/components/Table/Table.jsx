import React from 'react'
import TableData from './TableData'
import './Table.css'
export default function Table({ data }) {
    
  return (
    <div>
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Apostas</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData users={data}></TableData>
                </tbody>
                
            </table>
        </div>
    </div>
  )
}
