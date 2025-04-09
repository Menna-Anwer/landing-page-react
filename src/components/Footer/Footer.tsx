import './footer.css'
const Footer = () => {
    return (
        <div className=' footer row justify-content-between pb-5'>
            <div className='col-5'>
                <div className="logo-footer" >FinBiz</div>
                <div className="text-footer">Data analysis software is a type of software tool used for data analysis and reporting.</div>
            </div>
            <div className='col-1'>
                <div className="logo-footer" >Company</div>
                <div className="link-footer">Service</div>
                <div className="link-footer">Resources</div>
                <div className="link-footer">About</div>
            </div>
            <div className='col-2'>
                <div className="logo-footer" >Help</div>
                <div className="link-footer">Customer Support</div>
                <div className="link-footer">Terms & Conditions</div>
                <div className="link-footer">Privacy Policy</div>
            </div>
            <div className='col-4'>
                <div className="logo-footer" >Subscribe to Newsletter</div>

                <div className="input-footer my-5">
                <input type="text"  className="form-control"
                    placeholder="Enter your email adress"  />

                <button className="btn-footer"
                    style={{
                        position: 'absolute',
                    }}
                >
                  Join
                </button>
                </div>
            </div>
            <hr/>
            <div className='copyright'>© Copyright 2024, All Rights Reserved by FinBiz</div>
        </div>
    )
}

export default Footer
