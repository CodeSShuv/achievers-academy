import   "./css/bannertext.css";
const Banner = ({ bannerUrl, bannerText }) => {
    return (
        
        
            <div className="banner-image">
                    <img src={bannerUrl} alt="" />
                    <div className="banner-text">
                        
                        <h3>{bannerText}</h3>
                    </div>
            </div>
        
    );
}   

export default Banner;