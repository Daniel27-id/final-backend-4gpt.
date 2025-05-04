import React, { Component } from 'react';
import satu from '../asset/images/JuiceSirsak.jpg';
import dua from '../asset/images/JuiceAlpukat.jpg';
import tiga from '../asset/images/OrangeJuice.jpg';
import empat from '../asset/images/Capuccino.jpg';
import lima from '../asset/images/JerukPeras.jpg';

class Minuman extends Component {
  render() {
    const minumanList = [
      { nama: "Juice Sirsak", harga: "Rp15.000", gambar: satu },
      { nama: "Juice Alpukat", harga: "Rp18.000", gambar: dua },
      { nama: "Orange Juice", harga: "Rp20.000", gambar: tiga },
      { nama: "Capuccino", harga: "Rp25.000", gambar: empat },
      { nama: "Jeruk Peras", harga: "Rp12.000", gambar: lima }
    ];

    return (
      <div className="minuman-container">
        <h2>Minuman:</h2>
        <ul className="minuman-list">
          {minumanList.map((minuman, index) => (
            <li key={index} className="minuman-item">
              <img src={minuman.gambar} alt={minuman.nama} className="minuman-image" />
              <div className="minuman-details">
                <span className="minuman-name">{minuman.nama}</span>
                <span className="minuman-harga">{minuman.harga}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Minuman;