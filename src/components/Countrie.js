import axios from "axios";
import React, {useState, useEffect} from "react";
import Card from "./Card";


const Countries = () => {
    const [data, setData] =  useState([]);
    const [dataTriage, setdataTriage] = useState([]);
    const [loading, setLoading] =  useState(false);
    const [erreurCharge, setErreurCharge] =  useState(false);
    const [playOnce, setplayOnce] = useState(true);
    const [nombrePays, setnombrePays] = useState(40);

    const [selectedRadio, setselectedRadio] = useState('');
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    useEffect(() => {
        if (playOnce) {
            setLoading(true)
            axios
                .get("https://restcountries.com/v3.1/all")
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                    setplayOnce(false);
                    setErreurCharge(false);
                })
                .catch((res) => {
                    setErreurCharge(true);
                });
        }
        const sortedData = () => {
            const countryOb = Object.keys(data).map((i) => data[i]);
            const res = countryOb.sort((a, b) => {
                return b.population - a.population
            })
            res.length = nombrePays 
            setdataTriage(res)
        }
        sortedData()
    }, [data, nombrePays, playOnce]);

    return ( 
        <div className="countrie">
            { erreurCharge &&  <small>Erreur du chargement...</small> }
            <div className="sort-container">
                <input type="range" min="1" max="250" value={nombrePays} onChange={(e) => setnombrePays(e.target.value)} />
                <ul>
                    <li>
                        <input 
                            type="radio" 
                            checked = { selectedRadio === "" }
                            onChange = { (e) => setselectedRadio("") }
                            id = "Tout"
                        />
                        <label htmlFor="Tout">Tout</label>
                    </li>
                    {radios.map((radio) => {
                        return(
                            <li key={radio}>
                                <input 
                                    type="radio" 
                                    value={radio} 
                                    id={radio}
                                    checked = { radio === selectedRadio }
                                    onChange = { (e) => setselectedRadio(radio) }
                                 />
                                <label htmlFor={radio} >{radio}</label>
                            </li>
                        )
                    })}
                </ul>
            </div> 
            { loading &&  <small>Chargement...</small> }
            <ul className="countrie-list">
                {dataTriage
                    .filter((country) => country.region.includes(selectedRadio))
                    .map((country) => (
                        <Card key={country.name.common} country={country} />
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Countries;