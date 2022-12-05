import Image from 'next/image';
import styles from '../../../styles/general.module.scss';
export default function Page() {
    return (
    <>
        <Image className={styles.image} src="/adhd.jpg" alt="let's go to therapy" width={800} height={450} />

        <Image className={styles.image} src="/ahdh2.jpg" alt="let's go to therapy" width={800} height={450} />
        <p>como me cuesta dinero?
el curso online que nunca terminé o terminé después de pagar meses y meses
comida que se te olvida y se pasa de su fecha
compra impulsiva de ropa que nunca te pones
cancelar demasiado y pagar gastos
compra de productos que nunca usas</p>
<p>chronic boredom?
buying supllies for new hobbies and just suddenly uninsterested
cannot be able to see just one show (movil y tv al mismo tiempo)

tdah no siempre es deficit de atention
sino que no podemos "deploy", enfocar o ponerlo en el lugar correct en el momento correcto.
no siempre tenemos hiperactividad,
sino que empezar una tarea y disponer de la energia hasta acabarlo es lo complejo,
y mas con tareas que no tenemos interés
se conoce como paralysis of will


solia leer mucho de pequeña, y ahora llevo años sin terminar un libro
aunque era mi hobby favorita, y mi escape del dia a dia,
me he dado cuenta que esto era una estrategia de afrontamiento,
y de disosiacion
y ahora tengo otras fuentes más "entretenidas" que me ofrecen una diversión más inmediata
</p>
    </>
    )
}