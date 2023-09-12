import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom';
import Menu from '../componets/Menu';





const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://www.definicionabc.com/wp-content/uploads/tecnologia/Imagen-Satelital.jpg" alt="" />

                <div className="user">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.R3Grr90ligCFhOpkS02O6gHaEK&pid=Api&P=0&h=180" alt="" />
                    <div className="info">
                        <span>Joha</span>
                        <p>Se publicó hace 2 dias</p>
                    </div>

                    <div className="edit">                        
                        <Link to={`write?edit=2`}>
                        <img src={Edit} alt="" />
                        </Link>

                        <img src={Delete} alt="" />                                               
                    </div> 
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, magnam.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium deserunt totam consectetur cupiditate minima quisquam! Obcaecati minima architecto earum accusantium saepe necessitatibus maxime! Nihil hic unde fuga explicabo sunt ullam saepe consequuntur aliquid est eum quaerat, possimus iste modi doloribus commodi veritatis minus placeat sed cupiditate nulla ratione vitae facilis dolore rerum! Mollitia, tenetur quisquam? Aperiam, illo. Porro qui nihil eius magni quisquam dignissimos quibusdam nulla vero, laborum voluptates, odio ullam culpa eaque totam quas quo soluta eos esse. Quos, quis repellat. Minima obcaecati, ratione doloremque eligendi molestias quaerat animi consequuntur quia iste blanditiis? Officia doloribus ducimus illum itaque dolore, sed, inventore voluptates fugit fuga doloremque aperiam molestiae saepe sunt delectus, aspernatur incidunt est sit ipsam mollitia ad. Voluptates minima numquam nam dicta maxime nobis ullam rerum officiis, sed quam ea mollitia natus? Labore suscipit deserunt mollitia nihil possimus dignissimos voluptas modi sapiente nulla veniam facilis explicabo eaque ab excepturi, commodi quo eveniet minima dolorum vitae deleniti! Harum atque minima deserunt dolorum facere accusamus maiores sint praesentium, voluptatem suscipit tempora ipsum pariatur velit, reprehenderit dicta amet ut corrupti exercitationem ab alias. Repellendus voluptatibus omnis nulla quos. Sint, neque? Excepturi maxime inventore, magni sit itaque laboriosam atque quaerat distinctio rerum?

                </p>
            
            </div> 


            <Menu />

             

            
                                
        </div>

        
    )
}



export default Single



