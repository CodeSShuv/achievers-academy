import services from "../data/our_services";
import "./css/ourservices.css"
const OurServices = () =>{
    return (
        <>
        <section className="our-services">
            <h3>Our Services</h3>
            <div className="service-card-container">

            <div className="service-card">
                <img src="https://plus.unsplash.com/premium_photo-1664461662789-b72903263bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
                <p>

                Career Counselling 
                </p>
            </div>
            {
                services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.image} alt="" />
                        <p></p>
                        <p>
                            {service.title}
                        </p>
                    </div>
                ))

            }
            
            </div>
            

        </section>
        </>
    )
}
export default OurServices;