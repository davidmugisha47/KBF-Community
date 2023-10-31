import { Component } from "react";

class GoogleMap extends Component {
    render() { 
        return (
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2807.2451504790997!2d29.653973960869546!3d-1.4920115452734133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1698696891644!5m2!1sen!2srw"></iframe>
            </div>
        );
    }
}
 
export default GoogleMap;