const HoldingTable = ({ holdings }) => {
  return (
    <table>
      <th>
        <td>id</td>
        <td>price</td>
        <td>yield</td>
      </th>
      {holdings.map((holding) => {
        return (
          <tr key={holding.id}>
            <td>{holding.id}</td>
            <td>{holding.price} </td>
            <td> {holding.yield}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default HoldingTable;
