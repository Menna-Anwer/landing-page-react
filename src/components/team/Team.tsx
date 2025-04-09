import user1 from '../../assets/4005b22a3c1c23d7c04f6c9fdbd85468.jpeg'
import user2 from '../../assets/9c4d361cb9f54e38261e75afcd23b9b1.jpeg'
import user3 from '../../assets/af2aa1913e502ffa476a014a707b9d33.png'
import user4 from '../../assets/a3d54c7fb65e69df645f3b5d1ba1156c.png'
import "./team.css"
const Team = () => {
  return (
    <div className='team-img-container'>
      <div >
        <img className='team-img1' src={user1}/>
      </div>
      <div>
        <img className='team-img2' src={user2}/>
      </div>
      <div>
        <img className='team-img3' src={user3}/>
      </div>
      <div>
        <img className='team-img4' src={user4}/>
      </div>
    </div>
  )
}

export default Team
