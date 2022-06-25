import './style.css'




export default function index(props) {
  return (
    <div className='card'>
        <strong>{props.name}</strong>
        <small> {props.time}</small>
    
    </div>
  )
}
