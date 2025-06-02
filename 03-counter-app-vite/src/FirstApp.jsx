import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {/* <p>{JSON.stringify(newMessage)}</p>  */}
        </>
        
    )
}

// Prptypes para validar las propiedades del componente
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}