import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../auth/context/AuthContex';


export const Navbar = () => {
    const {user, logout} = useContext(AuthContex)
    // console.log(user)
    const navigate= useNavigate()

    const onlogautq =()=>{
        logout();
        navigate('/login',{
            replace:true
        }) //Aqui en el parentecis va el nombre de como es que le pusiste a tu path en los routes
        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive? 'active':''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive? 'active':''}` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive? 'active':''}` }
                        to="/search"
                    >
                        Buscador
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {user?.name}
                    </span>

                    <button  
                    onClick={onlogautq}
                    className="nav-item nav-link btn btn-primary">Lagout</button>

                </ul>

            </div>
        </nav>
    )
}