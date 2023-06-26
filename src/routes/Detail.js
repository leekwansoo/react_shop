import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { addItem } from '../store.js'
import {useDispatch, useSelector} from 'react-redux'


function Detail(props){

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(x => x.id == id);
  let [alert, setAlert] = useState(true)
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();

  id = Number(id)
  let url = 'https://codingapple1.github.io/shop/shoes' + (id+1) +'.jpg'
  console.log(url)

  useEffect(() => {
    let watchedList = localStorage.getItem('watched')
    if (!watchedList) {let data = [];
      localStorage.setItem('watched', JSON.stringify(data))}

    watchedList = localStorage.getItem('watched')
    watchedList = JSON.parse(watchedList)
    watchedList.push(찾은상품.id)

    watchedList = new Set(watchedList)
    watchedList = Array.from(watchedList)
    localStorage.setItem('watched', JSON.stringify(watchedList))
  }, []);


    return(
        <div className="container">
      <div className="row">
        <div className="col-md-6">
       
        <img src={'https://codingapple1.github.io/shop/shoes' + (id+1) +'.jpg'} width="100%"/> 
          {/* <img src="https://codingapple1.github.io/shop/shoes[id].jpg" width="100%" /> */}
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>

          <button className='btn btn-danger' onClick= {()=>{
            dispatch(addItem({ id: id, name: props.shoes[id].title , count: 1}))}} >주문하기</button> 
        </div>
      </div>
</div> 
 
    )
}

export default Detail;