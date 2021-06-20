import './Header.css'

const Header = () => {
    return (
        <div className='main-wrapper'>
            <span className='data'>Let's Get Vaccinated</span>
            <br/><br/>
            <span> <img className='vac' src='/images/injection.png' alt=''></img> </span>
        </div>
    )
}
export default Header;