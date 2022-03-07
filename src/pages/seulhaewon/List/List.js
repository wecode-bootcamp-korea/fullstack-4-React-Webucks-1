import './List.scss';
import TopNav from '../TopNav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FH} from '@fortawesome/free-regular-svg-icons';
import { faHeart as FHS} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect} from 'react';
import React from 'react';

function Label(props){
    return(
        <div className="coldbrew">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.name}&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <img src="/images/seulhaewon/logo_decaf.png" alt="logo" id="logo"/>
            <p>&nbsp;&nbsp;디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
        </div>
    );
}
function CoffeeCard({coffee}){
    const [Heart, setHearts] = useState({
        Heart:coffee.heart,
        HeartColor:coffee.heartColor
    });
    (coffee.Heart==="FH") ? Heart.Heart=FH : Heart.Heart=FHS; 
    const HeartChange = () =>{
        setHearts({
            Heart : (Heart.Heart===FH) ? FHS : FH,
            HeartColor : (Heart.HeartColor==="#CFCFCF") ? "red" : "#CFCFCF"
        });
    }
    return(
        <div className="coffee">
            <div className="imgBlock">
                <Link to={coffee.Link} state={{ coffee: coffee}}>
                    <img className="image" src={coffee.imageURL} alt={coffee.alt}/>
                </Link>
            </div>
            <div className="coffeeName">
                {coffee.name}
                <FontAwesomeIcon icon={Heart.Heart} onClick={()=>{HeartChange(coffee)}} color={Heart.HeartColor}/>
            </div>
        </div>
    );
}
function List() {
    const [_coldbrewList, setColdbrewList] = useState([]);
    const [_brudList, setBrudList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data/seulhaewon/coffeeList.json', {method: 'GET'})              
            .then(res => res.json())
            .then(data => {
                setColdbrewList(data["coldbrew"]);
                setBrudList(data["brudcoffee"]);
          });
    },[])

    return (
    <div className="list_shw">
        <TopNav/>
        <section>
            <Label name="콜드 브루 커피"/>
            <div className="wrap">
                {_coldbrewList.map((coffee,index)=>(<CoffeeCard coffee={coffee} key={index}/>))}
            </div>
        </section>
        <section>
            <Label name="브루드 커피"/>
            <div className="wrap">
                {_brudList.map((coffee,index)=>(<CoffeeCard coffee={coffee} key={index}/>))}
                <div className='coffee'></div>
                <div className='coffee'></div>
            </div>
        </section>
    </div>
    );
}

export default List;