import React from 'react'
import ReactDOM from 'react-dom'
import './css_styles/main.css'

const App = () => {
    return(
        <div>
            <div className="header">
                <div className="logo">
                    <p className="title">Blocco Note</p>
                </div>
                <div className="add-section">
                    <a className="add-btn" href='#'>Aggiungi Nota</a>
                </div>
            </div>
            <div className="posts">
                <div className="centerText">Non ci sono appunti
                </div>
            </div>
            <div className="modal">
                <div className="form">
                    <div className="form-header">
                        <div>
                            <p className="form-header-text"> Crea una nota</p>
                        </div>
                        <div>
                            <a href="#"className="close-btn">x</a>
                        </div>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="title">Titolo</label>
                                <input type="text" name="title" id="title" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenuto</label>
                                <textarea name="content" id="content" cols="30" rows="5" className='form-control'></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="SALVA" className='btn'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    )
}   

// per avere suggereminte se fai cosi.head.centerText ti crea div head con classe di nome centerText

// inserendo cosi il sugerimento input:text.form-control ti da come div input, type = text, className form-control

ReactDOM.render(<App/>,document.querySelector('#root')); // questo render serve a richiamare l'html della cartella di default che trovi in guestbook_fontend_react/public/index.html
// e come quando usi django stock con javascript che metti nel url_api il link alla pagina html e nella html c'è il collegamento alle funzioni java
// React ti permette di scrivere html e java nello stello file javascript vedi i tutorial è un formato che si chaima jsx (puoi anche solo scrivere.js lo prendeo lo stesso bne il formato poi vai sotto a destra di vsc e cambia il linguaggio con jsx) 
// se cambi solo il formato del file poi react non lo riconosce più cosi se fai ad esempio .header ti mette in automatico tutto il codice html del header chissa se funziona anche con html stock ? 