const Map = () => {
    return (
        <div className="map">
          <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Saadiyat%20Island,%20New%20York%20University&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> 

            <p style={{margin:'0', opacity:'0.6', fontSize:'small'}}>PO Box 129188, Saadiyat Island<br />
            Abu Dhabi, United Arab Emirates<br />
            Tel. :+000 1234567890 <br />
            info@gmail.com</p>
        </div>  

    );
}
 
export default Map;