
import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button'
import ListPage from './components/ListPage';

function App() {

 let [list, setList]=useState([]);
 let[showList, setShowList] = useState(false);

 useEffect(()=>{
  fetch(" https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>setList(data));
 },[])

function showAllUser(){
  showList === false ? setShowList(true): setShowList(false);

}



  return (
    <div className="App">
      <div className="btnWrap">
  <Button value = "Show all list" showAllUser = {showAllUser} />
 
      </div>
  {showList && <ListPage list = {list} setList = {setList}/>}
 
  {/* {typeof list !=="string" ? list.map((obj,index)=><p key={index}>{obj.name}</p>):<p>go loading</p>} */}
  {/* {list.map((obj,index)=><p key={index}>{obj.name}</p>)} */}
    </div>
  );
}

export default App;
