import PropTypes from 'prop-types'

const ServiceContainerHeader = ({title}) => {




    return (
        <h2>{title}</h2>
    );
    };

    ServiceContainerHeader.defaultProps = {
        title: 'Service Category'
    }
    
    ServiceContainerHeader.protoTypes = {
        title: PropTypes.string.isRequired,
    }

export default ServiceContainerHeader;
