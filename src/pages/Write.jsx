import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState ('')

    console.log(value)
    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder='Título' />
                <div className="editorContainer">
                <ReactQuill className="editor"   theme="snow" value={value} onChange={setValue} />         
                </div>
            </div>


            <div className="menu">
                <div className="item">
                    <h1>Publicar</h1>
                    <span>
                        <b>Estado: </b>Borrador
                    </span>
                    <span>
                        <b>Visibilidad: </b>Público
                    </span>
                    <input style={{display:"none"}} type="file" id="file" />
                    <label htmlFor="file">Cargar Imagen</label>
                    <div className="buttons">
                        <button>Guardar como borrador</button>
                        <button>Actualizar</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Categorias</h1>
                    <div className="cat">
                    <input type="radio" name="cat" value="art" id="art" />
                    <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                    <input type="radio" name="cat" value="science" id="science" />
                    <label htmlFor="science">science</label>
                    </div>
                    <div className="cat">
                    <input type="radio" name="cat" value="technology" id="technology" />
                    <label htmlFor="technology">technology</label>
                    </div>
                    <div className="cat">
                    <input type="radio" name="cat" value="cinema" id="cinema" />
                    <label htmlFor="cinema">cinema</label>
                    </div>
                    <div className="cat">
                    <input type="radio" name="cat" value="food" id="food" />
                    <label htmlFor="food">food</label>
                    </div>                                      
                    
                </div>
            </div>
        </div>
    )
}

export default Write