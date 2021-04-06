import PropTypes from 'prop-types'

const ServiceDescription = ({serviceDescription}) => {
    return (
        <div>
            <p>{serviceDescription}</p>
        </div>
    )
}

ServiceDescription.protoTypes = {
    serviceDescription: PropTypes.string.isRequired,
}

ServiceDescription.defaultProps = {
    serviceDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id vitae quam porro deleniti tenetur cumque fuga corporis sit ad libero eos saepe repudiandae voluptatum facere ab maiores molestias accusantium doloribus nihil nostrum reprehenderit, molestiae harum. Corrupti ab quod impedit, odit esse minus consectetur ut, fuga, tenetur eveniet exercitationem. Nam vero iste corrupti beatae natus."
}

export default ServiceDescription
