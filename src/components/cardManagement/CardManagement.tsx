import { Button } from 'react-bootstrap'
import './cardManagement.css'
import Buttons from '../Buttons/Buttons'
const CardManagement = () => {
    return (
        <div className='cardManagement'>
            <div className="container1">
                <div className="text1">Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. There`s now a new way of accounting.</div>
                <div className="container-monthly-number">
                    <div className="number-container">
                        <div className="number">$3453.00</div>
                        <hr className="hr-number" />
                        <div className="div-cont"></div>
                        <div className="div-cont"></div>
                        <div className="div-cont2"></div>
                    </div>
                    <div className="monthlyInvoice-container">
                        <div className="monthlyText">MonthlyInvoice</div>
                        <div className='comment-container'>
                            <div className='comment-circle1'></div>
                            <div className='comment'>
                                <div className='comment-text'>John Client_download.Pdf</div>
                                <div className="div-comment"></div>
                            </div>
                        </div>
                        <div className='comment-container'>
                            <div className='comment-circle2'></div>
                            <div className='comment'>
                                <div className='comment-text'>Michele Leos_download.Pdf</div>
                                <div className="div-comment"></div>
                            </div>
                        </div>
                        <div className='comment-container'>
                            <div className='comment-circle3'></div>
                            <div className='comment'>
                                <div className='comment-text'>John Smith_download.Pdf</div>
                                <div className="div-comment"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="header">
                    Optimise expense
                    Management as a team
                </div>
                <div className="text2">
                    Bring harmony to team expenses with budget limits and
                    real-time monitiring. Freedom for your staff. Peace of
                    mind for you.
                </div>
                {/* <Button className='btn-container2'>Explore more</Button> */}
                <Buttons className ="btn-container2" nameBtn="Explore more" />

            </div>
        </div>
    )
}

export default CardManagement
