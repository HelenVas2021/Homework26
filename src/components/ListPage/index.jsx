import AddUsers from '../AddUser/AddUsers';
import styles from './ListPage.module.css';


const ListPage = ({list, setList}) => {
	
	function filterList(id){
    const newList = list.filter((obj) => obj.id !== id);
	setList(newList);
	}

  return (
	<div>
		<AddUsers setList = {setList} list = {list} />
		<h2>ListPage</h2>
		<table className={styles.table}>
			<tbody>
				<tr className={styles.headers}>
					<td>Name</td>
					<td>Surname</td>
					<td>Phone Number</td>
				</tr>
				{list.length!==0 ? list.map((obj)=>{
				return	( 
				    <tr  key={obj.id}>
						<td>{obj.name.split(" ")[0]}</td>
						<td>{obj.name.split(" ")[1]}</td>
						<td className={styles.thirdCol} >{obj.phone}</td>
						<td ><button className={styles.btn} onClick = {()=>filterList(obj.id)}>Delete</button></td>
					</tr>)
				}) : <tr>LOADING.....</tr>}
			</tbody>
		</table>
	</div>
  )
}

export default ListPage