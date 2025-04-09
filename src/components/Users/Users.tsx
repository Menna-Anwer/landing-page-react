
import user1 from '../../assets/af2aa1913e502ffa476a014a707b9d33.png'
import user2 from '../../assets/a3d54c7fb65e69df645f3b5d1ba1156c.png'
import user3 from '../../assets/9e36034c62fd6704efc570de70b9d742.png'
import user4 from '../../assets/ad868d019f92ce267e6de23af3413e5b.jpeg'
import user5 from '../../assets/9c4d361cb9f54e38261e75afcd23b9b1.jpeg'
import "./users.css"
const Users = () => {
    return (
        <div className='big-container'>
            <div className='img-container'>
                <div >
                    <img className='img1' src={user1} />
                </div>
                <div>
                    <img className='img2' src={user2} />
                </div>
                <div>
                    <img className='img3' src={user3} />
                </div>
                <div>
                    <img className='img4' src={user4} />
                </div>
                <div>
                    <img className='img5' src={user5} />
                </div>
            </div>
        </div>

    )
}

export default Users
