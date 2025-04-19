import React from 'react';

const EmptyTable = () => {
  const columns = 5;
  const rows = 5;

  return (
    <table className="empty-table">
      <thead>
        <tr>
          {Array.from({ length: columns }).map((_, index) => (
            <th key={index}></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td key={colIndex}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmptyTable;
