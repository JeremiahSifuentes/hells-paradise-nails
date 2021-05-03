import PropTypes from 'prop-types'

const ServiceDescription = ({serviceDescription}) => {
    return (
        <div>
            <p className="card-description">{serviceDescription}</p>
        </div>
    )
}

ServiceDescription.protoTypes = {
    serviceDescription: PropTypes.string.isRequired,
}

ServiceDescription.defaultProps = {
    serviceDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id vitae quam porro deleniti tenetur cumque fuga corporis sit ad libero eos saepe repudiandae voluptatum facere ab maiores molestias accusantium doloribus nihil nostrum reprehenderit odit esse minus"
}

export default ServiceDescription
