import React from 'react';
const TableBody = ({ columns, items, onSort }) => {
    return (
        <>
            <tbody>
                {
                    items.map(item => {
                        return( 
                        <tr>
                            {
                            columns.map(column => <td onClick={()=>onSort(column.path)}>{column.content(item)}</td>)
                            }
                        </tr>
                        )
                       
                    })
               }
            </tbody>

        </>
    )
};
export default TableBody;