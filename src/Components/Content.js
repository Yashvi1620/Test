const Content = (props) => {
  return (
    <div className="margin-left">
      <table>
        <tr className="chBac">
          <td>Property</td>
          <td>Move in Date</td>
          <td>Rent</td>
          <td>Deposit</td>
          <td>Status </td>
        </tr>
        <tr>
          <td className="property">
            <img
              alt="hi"
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHOK3btWgClt7nTtmbmgA0K17d--HfuVTWHpdDT1KjRt4-a7fNTEiJX6oyUnsSKAKJUc&usqp=CAU"
            />
            16 Lost Round
          </td>
          <td>20/1/2021</td>
          <td>$1400</td>
          <td>$1000</td>
          <td>pending &nbsp;&emsp; </td>
          <td className={`${props.yl}`}> </td>
        </tr>
        <tr>
          <td className="property"><img 
          alt="hi"
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHOK3btWgClt7nTtmbmgA0K17d--HfuVTWHpdDT1KjRt4-a7fNTEiJX6oyUnsSKAKJUc&usqp=CAU"/> 491 Jagged Arbor</td>
          <td>25/12/2020</td>
          <td>$1488</td>
          <td>$2000</td>
          <td>paid&nbsp;&emsp; </td>
          <td className={`${props.gr}`}> </td>
        </tr>
      </table>
      <button>All Properties</button>
    </div>
  );
};

export default Content;
