
import { useState } from "react"//huk o estados

export function TwitterFollowCard({userName,name, initialFollowing}){

    //usare un huck para que cambie el estado del boton de seguir a siguiendo cada ves que clikee
    const [isFollowing, setIsFollowing] = useState(initialFollowing)

    //cambia el texto cuando clikeamos en seguir
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  

    //si estas siguiendo tendras el css de followCard-button y ademas la classe is-following, si no tendras el css de tw-followCard-button
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    //tambien puedo darle un valor por defecto a una prop como en name = 'no tiene nombre'

    const handleClick = () => {//esto es un estado interno porque clikeo en un seguidor pero eso no hace que siga a los demas
        setIsFollowing(!isFollowing)//cuando clikee cambiara el estadod e false a true
        //osea cuando clikea el boton llama esta funcion handdleClick que dice que setisFollowing contiene el valor contrario de isFollowin por eso el "!"
    }
return(

    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        alt= "El avatar de midudev"
        //para declarar bien userName devo utilizar esas comillas
        src={`https://unavatar.io/${userName}`}></img>   
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
    </header>

    <aside>
        
        <button className={buttonClassName} onClick={handleClick} //estoy llamando a buttonClassName que hace el cambio del boton cuando clikeo osea cambia el estado
        //lo que embuelve el elemento button es el texto que dice seguir en este caso ese texto se le dice children osea es el hijo del elemento anterior 
        //llamando a text que es una constante que llama a isFolowin para cambiar cuando clikeamos osea seguir o siguiendo 
        > 
            <samp className="tw-followCard-text">{text}</samp>
              
            <samp className="tw-followCard-stopFollow">Dejar de Seguir</samp>
                                                   
        </button>

    </aside>
</article>
)

}