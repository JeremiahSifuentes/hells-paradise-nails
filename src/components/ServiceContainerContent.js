import ServiceCard from './ServiceCard'

const ServiceContainerContent = () => {
    return (
        <div className="service-container-content">
          <ServiceCard />
          <hr></hr>
          <ServiceCard />
        </div>
    )
}

export default ServiceContainerContent
