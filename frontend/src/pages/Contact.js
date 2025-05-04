import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.477005368111!2d124.83654070783932!3d1.4857256611233955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32877515750b0773%3A0x4d113355f4aa370e!2sRM.%20Wakeke!5e0!3m2!1sid!2sid!4v1731666210614!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h3>Hubungi Kami</h3>
          <p>Alamat: Jl. Wakeke No.1, Wenang Utara, Kec. Wenang, Kota Manado, Sulawesi Utara</p>
          <p>Nomor telepon: 085657439697</p>
          <p>Email: RM_Wakeke@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Contact;
