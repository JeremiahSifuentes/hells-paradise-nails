import ServiceTitle from './ServiceCard/ServiceTitle'
import ServiceTimenPrice from './ServiceCard/ServiceTimenPrice'
import ServiceDescription from './ServiceCard/ServiceDescription'
import ServiceFootnotes from './ServiceCard/ServiceFootnotes'
// import ServiceCarousel from './ServiceCard/ServiceCarousel'

const ServiceCard = () => {

    

    return (
        <div>
            < ServiceTitle />
            < ServiceTimenPrice />
            < ServiceDescription />
            < ServiceFootnotes />
            {/* < ServiceCarousel /> */}
        </div>
    )
}

export default ServiceCard

