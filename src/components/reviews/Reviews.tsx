import { Button } from 'react-bootstrap'
import './reviews.css'
const Reviews = () => {
    return (
        <div>
            <Button className='reviews-btn'>Testimonials</Button>
            <div className='reviews-heading'>What are people saying</div>
            <div className='reviews-text'>"Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. 
                Read what our clients have to say about their experience with us.</div>
        </div>
    )
}

export default Reviews
