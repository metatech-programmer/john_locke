let numAleatorio = 0;

const preguntasRespuestasJohnLocke = [
  {
    pregunta: "¿Cuál fue la profesión de John Locke?",
    respuesta: "John Locke fue un filósofo, médico y político inglés.",
  },
  {
    pregunta: "¿En qué siglo vivió John Locke?",
    respuesta: "John Locke vivió en el siglo XVII.",
  },
  {
    pregunta: "¿Cuál fue la obra más conocida de John Locke?",
    respuesta:
      "'Ensayo sobre el entendimiento humano' es una de sus obras más conocidas.",
  },
  {
    pregunta: "¿Qué idea filosófica popularizó John Locke?",
    respuesta:
      "John Locke popularizó la idea de la 'tabula rasa', que sostiene que la mente humana es como una pizarra en blanco al nacer.",
  },
  {
    pregunta:
      "¿Qué concepto introdujo Locke en relación con los derechos naturales?",
    respuesta:
      "Locke introdujo la idea de que todos los individuos tienen derechos naturales, como el derecho a la vida, la libertad y la propiedad.",
  },
  {
    pregunta:
      "¿Cómo se conoce el trabajo en el que Locke argumenta sobre la separación de poderes?",
    respuesta:
      "El trabajo en el que Locke argumenta sobre la separación de poderes se conoce como 'Dos tratados sobre el gobierno civil'.",
  },
  {
    pregunta: "¿Qué influencia tuvo Locke en la Revolución Gloriosa?",
    respuesta:
      "Las ideas de Locke, especialmente su defensa del gobierno limitado y los derechos naturales, influyeron en la Revolución Gloriosa en Inglaterra en 1688.",
  },
  {
    pregunta: "¿Qué posición adoptó Locke sobre la tolerancia religiosa?",
    respuesta:
      "Locke abogaba por la tolerancia religiosa y argumentaba que la coerción religiosa no era compatible con la razón ni con los objetivos del gobierno.",
  },
  {
    pregunta: "¿Cómo describió Locke el 'estado de naturaleza'?",
    respuesta:
      "Locke describió el estado de naturaleza como un estado de igualdad y libertad, pero también de inseguridad y potencial conflicto.",
  },
  {
    pregunta:
      "¿Cuál fue la principal influencia de Locke en la filosofía política?",
    respuesta:
      "La principal influencia de Locke en la filosofía política fue su defensa del gobierno limitado, la separación de poderes y los derechos individuales.",
  },
  {
    pregunta:
      "¿Qué papel atribuyó Locke al gobierno en relación con los derechos naturales?",
    respuesta:
      "Locke consideraba que el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos, como el derecho a la vida, la libertad y la propiedad.",
  },
  {
    pregunta: "¿Qué argumentó Locke en su obra 'Carta sobre la tolerancia'?",
    respuesta:
      "En 'Carta sobre la tolerancia', Locke argumentó a favor de la tolerancia religiosa y la separación entre la religión y el gobierno.",
  },
  {
    pregunta:
      "¿Cómo influyeron las ideas de Locke en la Declaración de Independencia de Estados Unidos?",
    respuesta:
      "Las ideas de Locke sobre los derechos naturales y el contrato social influyeron en la redacción de la Declaración de Independencia de Estados Unidos.",
  },
  {
    pregunta: "¿Qué tipo de gobierno favorecía Locke?",
    respuesta:
      "Locke favorecía un gobierno limitado, basado en el consentimiento del pueblo y destinado a proteger los derechos naturales de los individuos.",
  },
  {
    pregunta:
      "¿Cuál fue la crítica principal que Locke dirigió hacia el absolutismo?",
    respuesta:
      "Locke criticó el absolutismo por su falta de límites y por violar los derechos naturales de los individuos.",
  },
  {
    pregunta:
      "¿Qué idea de Locke influyó en la formulación de la teoría de los derechos humanos?",
    respuesta:
      "La idea de Locke de que todos los individuos tienen derechos naturales inherentes influyó en la formulación de la teoría de los derechos humanos.",
  },
  {
    pregunta: "¿Qué pensaba Locke sobre el contrato social?",
    respuesta:
      "Locke argumentaba que el gobierno legítimo se basaba en un contrato social entre los gobernantes y los gobernados, donde el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos.",
  },
  {
    pregunta:
      "¿Cómo se diferenciaba Locke de Hobbes en su concepción del estado de naturaleza?",
    respuesta:
      "Locke creía que el estado de naturaleza era un estado de igualdad y libertad, mientras que Hobbes lo veía como un estado de guerra y conflicto constantes.",
  },
  {
    pregunta: "¿Qué se entiende por 'derechos naturales' según Locke?",
    respuesta:
      "Los derechos naturales, según Locke, son derechos inherentes a la condición humana, como el derecho a la vida, la libertad y la propiedad, que no pueden ser violados por ningún gobierno o autoridad.",
  },
  {
    pregunta: "¿Cómo influyó Locke en la teoría del liberalismo?",
    respuesta:
      "Locke es considerado uno de los padres del liberalismo debido a su énfasis en los derechos individuales, el gobierno limitado y la separación de poderes.",
  },
  {
    pregunta:
      "¿Qué impacto tuvieron las ideas de Locke en la teoría política moderna?",
    respuesta:
      "Las ideas de Locke, como el gobierno limitado y los derechos naturales, tuvieron un gran impacto en la teoría política moderna, influyendo en la forma en que se conciben y estructuran los gobiernos democráticos.",
  },
  {
    pregunta: "¿Cómo influyó Locke en la teoría del contrato social?",
    respuesta:
      "Locke influyó en la teoría del contrato social al argumentar que el gobierno legítimo se basaba en un contrato entre los gobernantes y los gobernados, donde el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos.",
  },
  {
    pregunta: "¿Cuál fue la principal crítica de Locke al absolutismo?",
    respuesta:
      "La principal crítica de Locke al absolutismo era que violaba los derechos naturales de los individuos y conducía a la opresión y la tiranía.",
  },
  {
    pregunta: "¿Qué propuso Locke como solución para evitar el absolutismo?",
    respuesta:
      "Locke propuso un gobierno limitado, basado en el consentimiento del pueblo y destinado a proteger los derechos naturales de los individuos, como una solución para evitar el absolutismo.",
  },
  {
    pregunta: "¿Cuál fue la posición de Locke sobre la libertad religiosa?",
    respuesta:
      "Locke abogaba por la libertad religiosa y argumentaba que el gobierno no tenía autoridad sobre las creencias religiosas de los individuos.",
  },
  {
    pregunta:
      "¿Qué importancia tuvieron las ideas de Locke en la formación de la democracia moderna?",
    respuesta:
      "Las ideas de Locke, como el gobierno limitado, la separación de poderes y los derechos naturales, tuvieron una gran importancia en la formación de la democracia moderna.",
  },
  {
    pregunta:
      "¿Cuál fue la influencia de Locke en la teoría del contrato social?",
    respuesta:
      "Locke influyó en la teoría del contrato social al argumentar que el gobierno legítimo se basaba en un contrato entre los gobernantes y los gobernados, donde el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos.",
  },
  {
    pregunta:
      "¿Qué creía Locke sobre la relación entre la religión y el gobierno?",
    respuesta:
      "Locke creía en la separación entre la religión y el gobierno, argumentando que el gobierno no tenía autoridad sobre las creencias religiosas de los individuos.",
  },
  {
    pregunta:
      "¿Qué influencia tuvieron las ideas de Locke en la Revolución Francesa?",
    respuesta:
      "Las ideas de Locke sobre los derechos naturales y el gobierno limitado influyeron en la Revolución Francesa, que buscaba limitar el poder absoluto del monarca.",
  },
  {
    pregunta: "¿Cuál fue la visión de Locke sobre la educación?",
    respuesta:
      "Locke abogaba por una educación basada en la experiencia y el razonamiento, en lugar de la memorización y la autoridad.",
  },
  {
    pregunta:
      "¿Qué propuso Locke en su obra 'Dos tratados sobre el gobierno civil'?",
    respuesta:
      "En 'Dos tratados sobre el gobierno civil', Locke argumentaba que el gobierno legítimo se basaba en un contrato entre los gobernantes y los gobernados, donde el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos.",
  },
  {
    pregunta:
      "¿Cómo influyeron las ideas de Locke en la teoría del liberalismo?",
    respuesta:
      "Las ideas de Locke, como la defensa de los derechos individuales y el gobierno limitado, influyeron en la teoría del liberalismo, que enfatiza la libertad individual y la limitación del poder del gobierno.",
  },
  {
    pregunta: "¿Cuál fue la principal crítica de Locke al absolutismo?",
    respuesta:
      "La principal crítica de Locke al absolutismo era que conducía a la opresión y la violación de los derechos naturales de los individuos.",
  },
  {
    pregunta: "¿Qué importancia tuvieron las ideas de Locke en la Ilustración?",
    respuesta:
      "Las ideas de Locke, como la defensa de la razón y la libertad, tuvieron una gran importancia en la Ilustración, un movimiento intelectual que promovía la razón, la ciencia y la libertad individual.",
  },
  {
    pregunta:
      "¿Cuál fue el principal argumento de Locke en contra del absolutismo?",
    respuesta:
      "El principal argumento de Locke en contra del absolutismo era que conducía a la opresión y violaba los derechos naturales de los individuos.",
  },
  {
    pregunta: "¿Qué opinaba Locke sobre la esclavitud?",
    respuesta:
      "Locke se oponía a la esclavitud y creía en la libertad individual como un derecho natural.",
  },
  {
    pregunta:
      "¿Qué influencia tuvieron las ideas de Locke en la Revolución Americana?",
    respuesta:
      "Las ideas de Locke sobre los derechos naturales y el gobierno limitado influyeron en la Revolución Americana, que buscaba limitar el poder del gobierno británico y establecer un gobierno basado en el consentimiento del pueblo.",
  },
  {
    pregunta: "¿Qué se entiende por 'tabula rasa' en la filosofía de Locke?",
    respuesta:
      "La 'tabula rasa' es la idea de que la mente humana al nacer es como una pizarra en blanco, sin ideas ni conocimientos preconcebidos, y que es a través de la experiencia sensorial que se adquieren los conocimientos y se desarrollan las ideas.",
  },
  {
    pregunta:
      "¿Qué papel atribuía Locke a la razón en el proceso de adquisición de conocimiento?",
    respuesta:
      "Locke reconocía el papel de la razón como una facultad importante en el proceso de adquisición de conocimiento, pero sostenía que la experiencia sensorial era la fuente primaria de todo conocimiento.",
  },
  {
    pregunta:
      "¿Cuál fue la crítica principal que Locke dirigió hacia la monarquía absoluta?",
    respuesta:
      "La principal crítica de Locke hacia la monarquía absoluta era que violaba los derechos naturales de los individuos y conducía a la opresión y la tiranía.",
  },
  {
    pregunta: "¿Qué opinaba Locke sobre el poder del gobierno?",
    respuesta:
      "Locke creía en un gobierno limitado, basado en el consentimiento del pueblo y destinado a proteger los derechos naturales de los individuos.",
  },

  {
    pregunta:
      "¿Qué influencia tuvieron las ideas de Locke en la teoría del contrato social?",
    respuesta:
      "Las ideas de Locke sobre el contrato social influyeron en la teoría política moderna, al argumentar que el gobierno legítimo se basaba en un contrato entre los gobernantes y los gobernados, donde el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos.",
  },
  {
    pregunta: "¿Cómo describía Locke el papel del gobierno?",
    respuesta:
      "Locke consideraba que el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos, como el derecho a la vida, la libertad y la propiedad.",
  },
  {
    pregunta:
      "¿Qué opinaba Locke sobre la relación entre la religión y el gobierno?",
    respuesta:
      "Locke creía en la separación entre la religión y el gobierno, argumentando que el gobierno no tenía autoridad sobre las creencias religiosas de los individuos.",
  },
  {
    pregunta: "¿Qué propuso Locke como solución para evitar el absolutismo?",
    respuesta:
      "Locke propuso un gobierno limitado, basado en el consentimiento del pueblo y destinado a proteger los derechos naturales de los individuos, como una solución para evitar el absolutismo.",
  },
  {
    pregunta: "¿Qué pensaba Locke sobre la tolerancia religiosa?",
    respuesta:
      "Locke abogaba por la tolerancia religiosa y argumentaba que el gobierno no tenía autoridad sobre las creencias religiosas de los individuos.",
  },
  {
    pregunta:
      "¿Qué importancia tuvieron las ideas de Locke en la formación de la democracia moderna?",
    respuesta:
      "Las ideas de Locke, como el gobierno limitado, la separación de poderes y los derechos naturales, tuvieron una gran importancia en la formación de la democracia moderna.",
  },
  {
    pregunta:
      "¿Cuál fue la influencia de Locke en la teoría del contrato social?",
    respuesta:
      "Locke influyó en la teoría del contrato social al argumentar que el gobierno legítimo se basaba en un contrato entre los gobernantes y los gobernados, donde el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos.",
  },
  {
    pregunta:
      "¿Qué creía Locke sobre la relación entre la religión y el gobierno?",
    respuesta:
      "Locke creía en la separación entre la religión y el gobierno, argumentando que el gobierno no tenía autoridad sobre las creencias religiosas de los individuos.",
  },
  {
    pregunta:
      "¿Qué influencia tuvieron las ideas de Locke en la Revolución Francesa?",
    respuesta:
      "Las ideas de Locke sobre los derechos naturales y el gobierno limitado influyeron en la Revolución Francesa, que buscaba limitar el poder absoluto del monarca.",
  },
  {
    pregunta: "¿Cuál fue la visión de Locke sobre la educación?",
    respuesta:
      "Locke abogaba por una educación basada en la experiencia y el razonamiento, en lugar de la memorización y la autoridad.",
  },
  {
    pregunta:
      "¿Qué propuso Locke en su obra 'Dos tratados sobre el gobierno civil'?",
    respuesta:
      "En 'Dos tratados sobre el gobierno civil', Locke argumentaba que el gobierno legítimo se basaba en un contrato entre los gobernantes y los gobernados, donde el gobierno tenía la responsabilidad de proteger los derechos naturales de los individuos.",
  },
  {
    pregunta:
      "¿Cómo influyeron las ideas de Locke en la teoría del liberalismo?",
    respuesta:
      "Las ideas de Locke, como la defensa de los derechos individuales y el gobierno limitado, influyeron en la teoría del liberalismo, que enfatiza la libertad individual y la limitación del poder del gobierno.",
  },
  {
    pregunta: "¿Cuál fue la principal crítica de Locke al absolutismo?",
    respuesta:
      "La principal crítica de Locke al absolutismo era que conducía a la opresión y violaba los derechos naturales de los individuos.",
  },
  {
    pregunta: "¿Qué importancia tuvieron las ideas de Locke en la Ilustración?",
    respuesta:
      "Las ideas de Locke, como la defensa de la razón y la libertad, tuvieron una gran importancia en la Ilustración, un movimiento intelectual que promovía la razón, la ciencia y la libertad individual.",
  },
  {
    pregunta:
      "¿Cuál fue el principal argumento de Locke en contra del absolutismo?",
    respuesta:
      "El principal argumento de Locke en contra del absolutismo era que conducía a la opresión y violaba los derechos naturales de los individuos.",
  },
  {
    pregunta: "¿Qué opinaba Locke sobre la esclavitud?",
    respuesta:
      "Locke se oponía a la esclavitud y creía en la libertad individual como un derecho natural.",
  },
  {
    pregunta:
      "¿Qué influencia tuvieron las ideas de Locke en la Revolución Americana?",
    respuesta:
      "Las ideas de Locke sobre los derechos naturales y el gobierno limitado influyeron en la Revolución Americana, que buscaba limitar el poder del gobierno británico y establecer un gobierno basado en el consentimiento del pueblo.",
  },
  {
    pregunta: "¿Como se dividió la separación de poderes?",
    respuesta: "en poder legislativo y poder ejecutivo",
  },
];
