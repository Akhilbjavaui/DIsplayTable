import React from 'react';
import TableListItem from './table_list_items';

const TableList = ({tableinfo, sort}) => {

    const Items = tableinfo.map((data, index) => {
        return <TableListItem key={index} data={data} number={index + 1} />
    })
    return (
     <table className="table table-striped">
      <thead onClick={e => sort(e, 'title')}>
        <tr>
          <th>#</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {Items}
      </tbody>
    </table>
    );
}

export default TableList;