import PropTypes from 'prop-types'


export const FirstApp = ({ title, subTitle, name }) => {
    
    
    return (
        <>
            <h1> {title} </h1>
            <h2> {name}</h2>
            <p> {subTitle} </p>
        </>
        )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle : PropTypes.number
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle : "No hay subtitulo"
}
    
    
    
