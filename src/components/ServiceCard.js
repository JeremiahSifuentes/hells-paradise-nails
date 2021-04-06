import ServiceTitle from '../components/ServiceTitle'
import ServiceTimenPrice from '../components/ServiceTimenPrice'
import ServiceDescription from '../components/ServiceDescription'
import ServiceFootnotes from '../components/ServiceFootnotes'
import ServiceCarousel from '../components/ServiceCarousel'

const ServiceCard = () => {
    return (
        <div>
            < ServiceTitle />
            < ServiceTimenPrice />
            < ServiceDescription />
            {/* < ServiceFootnotes />
            < ServiceCarousel /> */}
        </div>
    )
}

export default ServiceCard

