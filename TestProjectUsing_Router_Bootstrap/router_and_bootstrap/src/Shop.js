import React , {useState , useEffect} from 'react';
import './App.css';

function Shop() {

    useEffect( () => {
        fetchItem();
    } , [] );
    
    const [items, setItems] = useState([]);
    let dataX = [];
    const fetchItem = async () => {
        const request = new Request('https://fortnite-api.theapinetwork.com/upcoming/get', {
            headers: new Headers({
                "crossDomain": true,
                "method": "GET",
                'Content-Type': 'application/json',
                'Authorization' : 'db8424af922ce330a67e42f0811713bc' 
            })
        })
        dataX = await fetch(request).then(function(response){
            return response.json();
        });
        dataX = dataX.data;
        console.log(dataX);
        setItems(dataX);
    }
    console.log(dataX);
    return (
        
        <div className="App">
            <h1>Shop</h1>
            <p>
                {dataX}
            </p>
            {
                dataX.map( obj => (
                <h2>{obj.item.name}</h2>
                ) )
            }
        </div>
    );
}

export default Shop;
