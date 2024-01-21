import styles from './Home.module.css'



function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        <span>O que é a fonoaudiologia?</span>
      </h1>
      <p>
        O fonoaudiólogo é um profissional da Saúde, de atuação autônoma e independente, que exerce suas funções nos setores público e privado. É responsável por promoção da saúde, avaliação e diagnóstico, orientação, terapia (habilitação/reabilitação), monitoramento e aperfeiçoamento de aspectos fonoaudiólogicos envolvidos na função auditiva periférica e central, na função vestibular, na linguagem oral e escrita, na articulação da fala, na voz, na fluência, no sistema miofuncional orofacial e cervical e na deglutição. Exerce também atividades de ensino, pesquisa e administrativas.
        
      </p>
      <p>As áreas de atuação são: Unidades básicas de saúde, ambulatórios de especialidades, hospitais e maternidades, consultórios, clínicas, home care, domicílios, asilos e casas de saúde, creches e berçários, escolas regulares e especiais, instituições de ensino superior, empresas, meios de comunicação, associações e ONGs. Atuamos em todas as fases da vida: de bebês a idosos.</p>

    </section>


  )
}

export default Home
