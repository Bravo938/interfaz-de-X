import'./App.css'
import { TwitterFollowCard} from './TwitterFollowCard.jsx'
//pasamos props en userName, name y una prop buleana isDollowing que como se ve si lo colocamos solo asi esta en true y para negarlo si o si debemos poner isFollowing ={false}

//renderizar componentes
const users =[
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName:'jMilei',
        name: 'Javier Milei',
        isFollowing: false
    },
    {
        userName: 'VickyVillarruel',
        name:'Victoria Villarruel',
        isFollowing: true
    }
]

export function App(){
    //puedo tambien pasar datos con restoPereitor
    //lo que hace es pasar los datos de las prop que yo asigne a una variable 
    //se escribe asi {...nombreVariable}

   

    
    return(
        <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
        key={userName}//key es la posicion de mi dato generalmente usaremos Id de base de datoss
            userName={userName}
            initialIsFollowing={isFollowing}
            name = {name}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
      
       
       
       
       
       //los que no cambiaron son porque etan usando una prop y los que si cambiaron estan usando un huk que hace que cambie el estado al clikear
    )
}