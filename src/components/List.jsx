
import VideoItem from "./VideoItem"

const List = ({list , onVideoChange}) =>{
   
return list.length === 0 ? <h1>Loading</h1>:list.map((item,idx) =><VideoItem key={idx} item={item} onVideoChange={onVideoChange}/> )

}

export default List