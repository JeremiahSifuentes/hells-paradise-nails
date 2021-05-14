import ServiceTitle from '../ServiceCard/ServiceTitle'
import ServiceTimenPrice from '../ServiceCard/ServiceTimenPrice'
import ServiceDescription from '../ServiceCard/ServiceDescription'
import ServiceFootnotes from '../ServiceCard/ServiceFootnotes'
import ServiceCarousel from '../ServiceCard/ServiceCarousel/Slider'

const ServiceCard = () => {

    

    return (
        <div>
            < ServiceTitle />
            < ServiceTimenPrice />
            < ServiceDescription />
            < ServiceCarousel />
            < ServiceFootnotes />
        </div>
    )
}

export default ServiceCard

