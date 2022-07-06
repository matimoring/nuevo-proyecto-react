import { AppBar, TableFooter, Toolbar, } from '@mui/material';
import "../Footer/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Footer  = () => {

return (

    <TableFooter className="footer" >
        <div >
        <a href="http://www.facebook.com"> <FacebookIcon /> </a>
        <a href="http://www.instagram.com"><InstagramIcon /> </a>
        <a href="http://www.twitter.com"><TwitterIcon /> </a>
        <div><Link className='btn-navbar' to='/' >CAFE A TU PUERTA ®</Link> </div>
        </div>
    </TableFooter>
)
}

export default Footer;