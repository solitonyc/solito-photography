import './photogallery.css';
import React, { Component } from 'react';


import PhotoImage001 from '../sections/images-photogallery/pg-1.jpg';
import PhotoImage002 from '../sections/images-photogallery/pg-2.jpg';
import PhotoImage003 from '../sections/images-photogallery/pg-3.jpg';
import PhotoImage004 from '../sections/images-photogallery/pg-4.jpg';
import PhotoImage005 from '../sections/images-photogallery/pg-5.jpg';
import PhotoImage006 from '../sections/images-photogallery/pg-6.jpg';
import PhotoImage007 from '../sections/images-photogallery/pg-7.jpg';
import PhotoImage008 from '../sections/images-photogallery/pg-8.jpg';
import PhotoImage009 from '../sections/images-photogallery/pg-9.jpg';
import PhotoImage010 from '../sections/images-photogallery/pg-10.jpg';
import PhotoImage011 from '../sections/images-photogallery/pg-11.jpg';
import PhotoImage012 from '../sections/images-photogallery/pg-12.jpg';
import PhotoImage013 from '../sections/images-photogallery/pg-13.jpg';
import PhotoImage014 from '../sections/images-photogallery/pg-14.jpg';
import PhotoImage015 from '../sections/images-photogallery/pg-15.jpg';
import PhotoImage016 from '../sections/images-photogallery/pg-16.jpg';
import PhotoImage017 from '../sections/images-photogallery/pg-17.jpg';
import PhotoImage018 from '../sections/images-photogallery/pg-18.jpg';
import PhotoImage019 from '../sections/images-photogallery/pg-19.jpg';
import PhotoImage020 from '../sections/images-photogallery/pg-20.jpg';
import PhotoImage021 from '../sections/images-photogallery/pg-21.jpg';
import PhotoImage022 from '../sections/images-photogallery/pg-22.jpg';
import PhotoImage023 from '../sections/images-photogallery/pg-23.jpg';
import PhotoImage024 from '../sections/images-photogallery/pg-24.jpg';
import PhotoImage025 from '../sections/images-photogallery/pg-25.jpg';
import PhotoImage026 from '../sections/images-photogallery/pg-26.jpg';
import PhotoImage027 from '../sections/images-photogallery/pg-27.jpg';
import PhotoImage028 from '../sections/images-photogallery/pg-28.jpg';
import PhotoImage029 from '../sections/images-photogallery/pg-29.jpg';
import PhotoImage030 from '../sections/images-photogallery/pg-30.jpg';
import PhotoImage031 from '../sections/images-photogallery/pg-31.jpg';
import PhotoImage032 from '../sections/images-photogallery/pg-32.jpg';
import PhotoImage033 from '../sections/images-photogallery/pg-33.jpg';
import PhotoImage034 from '../sections/images-photogallery/pg-34.jpg';
import PhotoImage035 from '../sections/images-photogallery/pg-35.jpg';
import PhotoImage036 from '../sections/images-photogallery/pg-36.jpg';
import PhotoImage037 from '../sections/images-photogallery/pg-37.jpg';
import PhotoImage038 from '../sections/images-photogallery/pg-38.jpg';
import PhotoImage039 from '../sections/images-photogallery/pg-39.jpg';
import PhotoImage040 from '../sections/images-photogallery/pg-40.jpg';
import PhotoImage041 from '../sections/images-photogallery/pg-41.jpg';
import PhotoImage042 from '../sections/images-photogallery/pg-42.jpg';
import PhotoImage043 from '../sections/images-photogallery/pg-43.jpg';
import PhotoImage044 from '../sections/images-photogallery/pg-44.jpg';
import PhotoImage045 from '../sections/images-photogallery/pg-45.jpg';
import PhotoImage046 from '../sections/images-photogallery/pg-46.jpg';
import PhotoImage047 from '../sections/images-photogallery/pg-47.jpg';
import PhotoImage048 from '../sections/images-photogallery/pg-48.jpg';
import PhotoImage049 from '../sections/images-photogallery/pg-49.jpg';
import PhotoImage050 from '../sections/images-photogallery/pg-50.jpg';
import PhotoImage051 from '../sections/images-photogallery/pg-51.jpg';




export default class Photogallery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    //   ----------- this disables right click ---------- //
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
          });
      }
    
    render() {   
        return (
            <div className='pg_section' id='photogallery'>             
                <div className='pg_grid_container'>
                    <div className='pg_grid_box p-1'>
                        <img className='pg_grid_image' alt='' src={PhotoImage001} />
                    </div>
                    <div className='pg_grid_box p-2'>
                        <img className='pg_grid_image' alt='' src={PhotoImage002} />
                    </div>
                    <div className='pg_grid_box p-3'>
                        <img className='pg_grid_image' alt='' src={PhotoImage003} />
                    </div>
                    <div className='pg_grid_box p-4'>
                        <img className='pg_grid_image' alt='' src={PhotoImage004} />
                    </div>
                    <div className='pg_grid_box p-5'>
                        <img className='pg_grid_image' alt='' src={PhotoImage005} />
                    </div>
                    <div className='pg_grid_box p-6'>
                        <img className='pg_grid_image' alt='' src={PhotoImage006} />
                    </div>
                    <div className='pg_grid_box p-7'>
                        <img className='pg_grid_image' alt='' src={PhotoImage007} />
                    </div>                   
                    <div className='pg_grid_box p-8'>
                        <img className='pg_grid_image' alt='' src={PhotoImage008} />
                    </div>
                    <div className='pg_grid_box p-9'>
                        <img className='pg_grid_image' alt='' src={PhotoImage009} />
                    </div>
                    <div className='pg_grid_box p-10'>
                        <img className='pg_grid_image' alt='' src={PhotoImage010} />
                    </div>
                    <div className='pg_grid_box p-11'>
                        <img className='pg_grid_image' alt='' src={PhotoImage011} />
                    </div>                   
                    <div className='pg_grid_box p-12'>
                        <img className='pg_grid_image' alt='' src={PhotoImage012} />
                    </div>
                    <div className='pg_grid_box p-13'>
                        <img className='pg_grid_image' alt='' src={PhotoImage013} />
                    </div>
                    <div className='pg_grid_box p-14'>
                        <img className='pg_grid_image' alt='' src={PhotoImage014} />
                    </div>
                    <div className='pg_grid_box p-15'>
                        <img className='pg_grid_image' alt='' src={PhotoImage015} />
                    </div>
                    <div className='pg_grid_box p-16'>
                        <img className='pg_grid_image' alt='' src={PhotoImage016} />
                    </div>                   
                    <div className='pg_grid_box p-17'>
                        <img className='pg_grid_image' alt='' src={PhotoImage017} />
                    </div>
                    <div className='pg_grid_box p-18'>
                        <img className='pg_grid_image' alt='' src={PhotoImage018} />
                    </div>
                    <div className='pg_grid_box p-19'>
                        <img className='pg_grid_image' alt='' src={PhotoImage019} />
                    </div>                   
                    <div className='pg_grid_box p-20'>
                        <img className='pg_grid_image' alt='' src={PhotoImage020} />
                    </div>
                    <div className='pg_grid_box p-21'>
                        <img className='pg_grid_image' alt='' src={PhotoImage021} />
                    </div>
                    <div className='pg_grid_box p-22'>
                        <img className='pg_grid_image' alt='' src={PhotoImage022} />
                    </div>
                    <div className='pg_grid_box p-23'>
                        <img className='pg_grid_image' alt='' src={PhotoImage023} />
                    </div>                   
                    <div className='pg_grid_box p-24'>
                        <img className='pg_grid_image' alt='' src={PhotoImage024} />
                    </div>
                    <div className='pg_grid_box p-25'>
                        <img className='pg_grid_image' alt='' src={PhotoImage025} />
                    </div>
                    <div className='pg_grid_box p-26'>
                        <img className='pg_grid_image' alt='' src={PhotoImage026} />
                    </div>
                    <div className='pg_grid_box p-27'>
                        <img className='pg_grid_image' alt='' src={PhotoImage027} />
                    </div>                   
                    <div className='pg_grid_box p-28'>
                        <img className='pg_grid_image' alt='' src={PhotoImage028} />
                    </div>
                    <div className='pg_grid_box p-29'>
                        <img className='pg_grid_image' alt='' src={PhotoImage029} />
                    </div>
                    <div className='pg_grid_box p-30'>
                        <img className='pg_grid_image' alt='' src={PhotoImage030} />
                    </div>
                    <div className='pg_grid_box p-31'>
                        <img className='pg_grid_image' alt='' src={PhotoImage031} />
                    </div>                   
                    <div className='pg_grid_box p-32'>
                        <img className='pg_grid_image' alt='' src={PhotoImage032} />
                    </div>   
                    <div className='pg_grid_box p-33'>
                        <img className='pg_grid_image' alt='' src={PhotoImage033} />
                    </div>
                    <div className='pg_grid_box p-34'>
                        <img className='pg_grid_image' alt='' src={PhotoImage034} />
                    </div>
                    <div className='pg_grid_box p-35'>
                        <img className='pg_grid_image' alt='' src={PhotoImage035} />
                    </div>
                    <div className='pg_grid_box p-36'>
                        <img className='pg_grid_image' alt='' src={PhotoImage036} />
                    </div>
                    <div className='pg_grid_box p-37'>
                        <img className='pg_grid_image' alt='' src={PhotoImage037} />
                    </div>
                    <div className='pg_grid_box p-38'>
                        <img className='pg_grid_image' alt='' src={PhotoImage038} />
                    </div>
                    <div className='pg_grid_box p-39'>
                        <img className='pg_grid_image' alt='' src={PhotoImage039} />
                    </div>                   
                    <div className='pg_grid_box p-40'>
                        <img className='pg_grid_image' alt='' src={PhotoImage040} />
                    </div>
                    <div className='pg_grid_box p-41'>
                        <img className='pg_grid_image' alt='' src={PhotoImage041} />
                    </div>
                    <div className='pg_grid_box p-42'>
                        <img className='pg_grid_image' alt='' src={PhotoImage042} />
                    </div>
                    <div className='pg_grid_box p-43'>
                        <img className='pg_grid_image' alt='' src={PhotoImage043} />
                    </div>                   
                    <div className='pg_grid_box p-44'>
                        <img className='pg_grid_image' alt='' src={PhotoImage044} />
                    </div>
                    <div className='pg_grid_box p-45'>
                        <img className='pg_grid_image' alt='' src={PhotoImage045} />
                    </div>
                    <div className='pg_grid_box p-46'>
                        <img className='pg_grid_image' alt='' src={PhotoImage046} />
                    </div>
                    <div className='pg_grid_box p-47'>
                        <img className='pg_grid_image' alt='' src={PhotoImage047} />
                    </div>
                    <div className='pg_grid_box p-48'>
                        <img className='pg_grid_image' alt='' src={PhotoImage048} />
                    </div>                   
                    <div className='pg_grid_box p-49'>
                        <img className='pg_grid_image' alt='' src={PhotoImage049} />
                    </div>
                    <div className='pg_grid_box p-50'>
                        <img className='pg_grid_image' alt='' src={PhotoImage050} />
                    </div>
                    <div className='pg_grid_box p-51'>
                        <img className='pg_grid_image' alt='' src={PhotoImage051} />
                    </div>                   
                                                    
                </div> 
                   
            </div>
        )
    }
}
