import Link from "next/link";

export default function Page() {
return (
<>
      <h1>
            ¿Por qué el té no es para personas con tdah?
      </h1>
      <h2>Si naciste incendiario, no mueras bombero</h2>

      <ul>

            <li> Modo supervivencia
                  <ul style={{ display: 'none' }}>
                        <li>Falta de concentración, aparece la niebla mental y es más difícil terminar una actividad.
                        </li><li>Una visión negativa de sí mismos, sentimientos de indefensión, culpa o vergüenza.
                        </li><li>Cambios en la memoria: cuesta más recordar las cosas que han sucedido a lo largo del día.
                        </li><li>Fatiga física y mental. </li><li>
                              Reacciones más emocionales de lo habitual, ataques de ira o tristeza.
                              Descuidar las necesidades básicas como lavarse los dientes, hacer ejercicio o cambiar las sábanas.
                              Impulsividad, como por ejemplo gastar en exceso, comer más, o hacer cosas fuera de lo acostumbrado.
                              Problemas con las relaciones y tendencia a involucrarse en relaciones poco saludables.
                        </li><li>Alteraciones del sueño e hipervigilancia, estar siempre en alerta.</li>
                        <li>si piensas que cada decisión debe ser la correcta, y te culpas de ello</li>
                  </ul>
            </li>
            <li>La opinión de los demás no es la tuya, y no me corresponde</li>
            <li>Los problemas son como hacienda, por mucho que te alejes de ellos, siempre te acaban encontrando</li>
            </ul>
            <Link href='/self-reflection/self-knowledge'>
                  <h3>¿Te conoces a ti mismo?</h3>
            </Link> 


      
</>)
}