import './SnackBar.css'

const SnackBar = ({children}) => {

    return(
        <div className="snackbar-custom">
            Alerta!
            {children}
        </div>
    )
}

export default SnackBar 