import profile from '../assets/profile.jfif'

export function ProfilePicture() {
  
    const handleClick=(e)=>e.target.style.display='none'
    return (
        <img src={profile}
            alt="Profile Picture"
            onClick={(e) => handleClick(e)} />
    )
}


