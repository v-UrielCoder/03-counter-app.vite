import PropTypes from 'prop-types'


export const FirstApp = ({ title, subTitle, name }) => {
    
    
    return (
        <>
            <h1 data-testid = 'test-title'>   {title}  </h1>
            <p data-testid = 'test-name'>{name}</p>
            <p>{subTitle} </p>
            <p>{subTitle} </p>
            <p>{subTitle} </p>
            
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle : PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Uriel Emiliano',
    subTitle : "No hay subtitulo"
}
    
    
    
