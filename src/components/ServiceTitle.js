import PropTypes from 'prop-types'

const ServiceTitle = ({serviceTitle}) => {
    return (
        <div>
            <h3 className="card-title">{serviceTitle}</h3>
        </div>
    )
}

ServiceTitle.defaultProps = {
    serviceTitle: 'Service Title'
}

ServiceTitle.protoTypes = {
    serviceTitle: PropTypes.string.isRequired,
}

export default ServiceTitle
