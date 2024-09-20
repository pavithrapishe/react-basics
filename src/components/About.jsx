import User from './User'
import UserClass from './UserClass'

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <User name={'Pavithra(function)'} location={'Karnataka'} />
            <UserClass name={'Pavithra(class)'} />
        </div>
    )
}

export default About
