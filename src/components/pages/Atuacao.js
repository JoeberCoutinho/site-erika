import styles from './Atuacao.module.css'



function Atuacao() {
  return (
    <section className={styles.home_container}>
      <h1>
        <span>Teste da Linguinha</span>
      </h1>
      <p>
        O objetivo do teste da Linguinha é a identificação de problemas que possam resultar em dificuldades na sucção, deglutição, mastigação e fala.
      </p>
      <p>
      O teste é realizado por profissional capacitado, seja ele um fonoaudiólogo, pediatra ou odontopediatra, que deve examinar tanto o movimento da língua quanto a posição da membrana (frênulo). A recomendação é que o exame seja realizado em até 30 dias de vida.
      </p>
      <p>
      Se após uso do protocolo de avaliação for constatado alteração do frênulo lingual, encaminhamos para odontopediatria, para realização da frenectomia.
      </p>
     </section>
  )
}

export default Atuacao
