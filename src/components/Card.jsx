import profile from '../assets/profile.png'
const Card = () => {
    
    return (
        <div className="card">
        <img src={profile} className="card-image"alt="profile picture"></img> 
        <h2 className='card-title'>CGG</h2>
        <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
        
    )
}

export default Card