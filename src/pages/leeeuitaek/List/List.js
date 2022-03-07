import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './List.css';

function List() {
    const [productList, setProductList] = useState(); 
    const navigate = useNavigate();

    const activeHeart = (e) => {
        if(e.target.getAttribute('tag') === null) {
            e.target.setAttribute("tag", "on");
            e.target.style.color="rgb(228, 15, 15)";            
            e.target.className = "fa-solid fa-heart";
        }else {
            e.target.removeAttribute("tag");
            e.target.style.color="rgb(93, 93, 93)";
            e.target.className = "fa-solid fa-heart-crack";
        }
    }

    useEffect(() => {
        fetch("http://localhost:3000/data/leeeuitaek/productData.json", {
          method: 'GET' 
        })              
          .then(res => res.json())
          .then(data => {
            setProductList(data);
          });
    },[]);
    
    return (
    <>  
        <div id="container_list">
            <div id="container_boxing">        
                <section>
                    <div className="menu_title"><h3>콜드 브루 커피</h3></div>                
                    <ul> 
                        {productList ? 
                            productList.productColdBrew.map(item => 
                                <li key={item.id}>
                                    <dl>
                                        <dt>
                                            <img onClick={() => navigate('/detail-euitaek', 
                                                                    {state: {
                                                                            type : item.type,
                                                                            imgUrl : item.imgUrl,
                                                                            productName : item.productName,
                                                                            allergy : item.allergy,
                                                                            productViewInfo : item.productViewInfo,
                                                                            reviewComment : item.reviewComment
                                                                            },
                                                                        })} src={item.imgUrl}/>                                        
                                        </dt>
                                        <dd>{item.productName}<i onClick={activeHeart} className="fa-solid fa-heart-crack"></i></dd>
                                    </dl>
                                </li>                                
                                )
                         : null}                        
                    </ul>                
                </section>
                <section>
                    <div className="menu_title"><h3>브루드 커피</h3></div>                
                    <ul>
                        {productList ? 
                            productList.productBrood.map(item => 
                                <li key={item.id}>
                                    <dl>
                                        <dt>
                                            <img onClick={() => navigate('/detail-euitaek', 
                                                                    {state: {
                                                                            type : item.type,
                                                                            imgUrl : item.imgUrl,
                                                                            productName : item.productName,
                                                                            allergy : item.allergy,
                                                                            productViewInfo : item.productViewInfo,
                                                                            reviewComment : item.reviewComment
                                                                            },
                                                                        })} src={item.imgUrl}/>                                        
                                        </dt>
                                        <dd>{item.productName}<i onClick={activeHeart} className="fa-solid fa-heart-crack"></i></dd>
                                    </dl>
                                </li>                                
                                )
                        : null}
                    </ul>                
                </section>
            </div>
        </div> 
    </>
    );
}

export default List;