const Card = (props) => {
    const pays = props.country;
    // const { country } = props;

    const FormatNombre = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
 
    return ( 
        <li className="card">
            <img src={ pays.flags.png } alt={ pays.name.common } />
            <div className="data-container">
                <ul>
                    <li> { pays.name.common } </li>
                    <li> { pays.capital } </li>
                    <li>Pop : { FormatNombre(pays.population) } </li>
                </ul>
            </div>
        </li>
    );
}
 
export default Card;