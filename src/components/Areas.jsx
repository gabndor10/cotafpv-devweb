import React from 'react';
import './Areas.css';
// import {DefaultPlayer as Video} from 'react-html5video';
 import video from '../video/videoMat.mp4'
 import videoFesta from '../video/festa.mp4'
 import videoHotel from '../video/hotel.mp4'
 import videoInterep from '../video/interep.mp4'
 import videoParque from '../video/parque.mp4'
 import videoImovel from '../video/videoHotel.mp4'
const Areas = () => {
    return (
        <div class="Areas">
            <div class="titulo">
                <span>VEJA ALGUNS SEGMENTOS QUE PODEM USAR O FPV </span>
                <h1>Segmentos do FPV</h1>
            </div>
            <div class="cards">
                    <section class="card">
                        <video class="videos" src={videoFesta} autoPlay loop></video>
                        <span class="autor">YURIMOREIRA_ </span>
                        <h3>Eventos / Festas</h3>
                        
                    </section>
                    <section class="card">
                        <video class="videos" src={videoInterep} autoPlay loop></video>
                        <span class="autor">COTAFPV </span>
                        <h3>Eventos Esportivos</h3>
                    </section>
                    <section class="card">
                        <video class="videos" src={videoHotel} autoPlay loop></video>
                        <span class="autor">PROHDIGYY </span>
                        <h3>Hotéis</h3>
                    </section>
                    <section class="card">
                        <video class="videos" src={videoImovel} autoPlay loop></video>
                        <span class="autor">GRAVA FILMS </span>
                        <h3>Setor Imobiliário</h3>
                    </section>
                    <section class="card">
                        <video class="videos" src={videoParque} autoPlay loop></video>
                        <span class="autor">MAHENDRAFPV </span>
                        <h3>Parques</h3>
                    </section>
                    <section class="card">
                        <video class="videos" src={video} autoPlay loop></video>
                        <span class="autor">COTAFPV </span>
                        <h3>E muito mais</h3>
                    </section>
            </div> 
            <hr size="1" color="#111111"/>
        </div>
    );
}

export default Areas;
