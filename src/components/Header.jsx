import LogoPitz from '../assets/img/logoPitz.png'
const Header = () =>{
    return(
        <header className='header'>
            <div className='header--img'>
                <img src={LogoPitz} alt="Logo de Pitz Group" />
            </div>
        </header>    
    )
}

export default Header;