import PropTypes from 'prop-types'

const ServiceFootnote = ({footnote}) => {
    return (
        <>
            <li className='serviceFootnote'>{footnote}</li>
        </>
    )
}

ServiceFootnote.defaultProps = {
    footnote: 'Test footnote'
}

ServiceFootnote.protoTypes = {
    footnote: PropTypes.string.isRequired
}

export default ServiceFootnote
