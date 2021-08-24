import PropTypes from 'prop-types'

const Header = ({siteHeader}) => {
    return (
        <>
            <p>{siteHeader}</p>
        </>
    )
}

Header.defaultProps = {
    title: 'Header'
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
