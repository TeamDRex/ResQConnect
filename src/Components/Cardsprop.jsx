
import search from '../assets/search.png'

export default function Cardprop(props){
return(

<div>
  <div>
  <img src={props.image} alt="" />
  </div>
  <div>
    <h3>{props.title}</h3>
  </div>

</div>


)

}