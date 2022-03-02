
import './List.scss';
import TopNav from '../TopNav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FH} from '@fortawesome/free-regular-svg-icons';
import { faHeart as FHS} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

let coldbrewList = [
    {
        key:1,
        name:"나이트로 바닐라 크림",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "/detail-haewon",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:2,
        name:"나이트로 콜드 브루",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:3,
        name:"돌체 콜드 브루",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:4,
        name:"바닐라 크림 콜드 브루",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:5,
        name:"벨벳 다크 모카 나이트로",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:6,
        name:"시그니처 더 블랙 콜드 브루",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:7,
        name:"제주 비자림 콜드 브루",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:8,
        name:"콜드 브루",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:9,
        name:"콜드 브루 몰트",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:10,
        name:"콜드 브루 오트 라떼",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:11,
        name:"콜드 브루 플로트",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:12,
        name:"프렌치 애플 타르트 나이트로",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    }
];

let brudcoffeeList = [
    {
        key:13,
        name:"아이스 커피",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    },
    {
        key:14,
        name:"오늘의 커피",
        imageURL : "/images/seulhaewon/coffee.jpg",
        alt : "coffee",
        Link : "",
        heart : FH,
        heartColor : "#CFCFCF"
    }
];

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
    const [_coldbrewList, setColdbrewList] = useState(coldbrewList);
    const [_brudList, setBrudList] = useState(brudcoffeeList);
    
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