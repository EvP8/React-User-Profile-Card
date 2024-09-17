import profilePic from './assets/profile.jfif'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"/>
            <h2 className='card-title'>Black Cat</h2>
            <p className='card-text'>I am currently learning how to use React.</p>
        </div>
    )
}

export default Card