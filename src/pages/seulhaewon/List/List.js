
import './List.scss';
import TopNav from '../TopNav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FH} from '@fortawesome/free-regular-svg-icons';
import { faHeart as FHS} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Label(props){
    return(
        <div className="coldbrew">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.name}&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <img src="/images/seulhaewon/logo_decaf.png" alt="logo" id="logo"/>
            <p>&nbsp;&nbsp;디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
        </div>
    );
}
function CoffeeCard({coffee, listHeartChange}){
    (coffee.heart==="FH") ? coffee.heart=FH : coffee.heart=FHS;
    return(
        <div className="coffee">
            <div className="imgBlock">
                <Link to ={coffee.Link}>
                    <img className="image" src={coffee.imageURL} alt={coffee.alt}/>
                </Link>
            </div>
            <div className="coffeeName">
                {coffee.name}
                <FontAwesomeIcon icon={coffee.heart} onClick={()=>{listHeartChange(coffee)}} color={coffee.heartColor}/>
            </div>
        </div>
    );
}
function HeartChange(prevObj, currentObj){
    if(prevObj.key === currentObj.key){
        prevObj.heart = (currentObj.heart===FH) ? FHS : FH;
        prevObj.heartColor = (currentObj.heartColor==="#CFCFCF") ? "red" : "#CFCFCF";
    }
    return prevObj;
}
function List() {
    const [_coldbrewList, setColdbrewList] = useState([]);
    const [_brudList, setBrudList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data/seulhaewon/brudcoffeeList.json', {
          method: 'GET'  
        })              
          .then(res => res.json())
          .then(data => {
              setBrudList(data);
        });
        fetch('http://localhost:3000/data/seulhaewon/coldbrewList.json', {
            method: 'GET'  
          })              
            .then(res => res.json())
            .then(data => {
                setColdbrewList(data);
          });
    },[])

    const listHeartChange = (currentObj, category) =>{
        if(category === "coldbrew"){
            setColdbrewList(_coldbrewList.map((_coffee)=>HeartChange(_coffee,currentObj)));
        }
        else if(category === "brud"){
            setBrudList(_brudList.map((_coffee)=>HeartChange(_coffee,currentObj)));
        }
    }
    return (
    <div>
        <TopNav/>
        <section>
            <Label name="콜드 브루 커피"/>
            <div className="wrap">
                {_coldbrewList.map((coffee,index)=>(<CoffeeCard coffee={coffee} key={index} listHeartChange={()=>{listHeartChange(coffee,"coldbrew")}}/>))}
            </div>
        </section>
        <section>
            <Label name="브루드 커피"/>
            <div className="wrap">
                {_brudList.map((coffee,index)=>(<CoffeeCard coffee={coffee} key={index} listHeartChange={()=>{listHeartChange(coffee,"brud")}}/>))}
                <div className='coffee'></div>
                <div className='coffee'></div>
            </div>
        </section>
    </div>
    );
}

export default List;