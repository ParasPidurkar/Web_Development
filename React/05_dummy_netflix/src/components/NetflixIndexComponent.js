import './NetflixIndexComponent.css'
import NetflixHeaderComponent from './NetflixHeaderComponent'
import NetflixMainComponent from './NetflixMainComponent'
import { NetflixRegisterComponent } from './NetflixRegisterComponent'
import NetflixFooterComponent from './NetflixFooterComponent'


export default function NetflixIndexComponent(){
    return(
        <div className="container-fluid">
           <div className='box'>
            <header><NetflixHeaderComponent/></header>
            <section className='d-flex justify-content-centre align-items-center'>
                <main><NetflixMainComponent/>
                <NetflixRegisterComponent/>
                </main>  
                
                
            </section>  
            <footer>
                <NetflixFooterComponent/>
            </footer>
                
           </div>
        </div>
    )
}