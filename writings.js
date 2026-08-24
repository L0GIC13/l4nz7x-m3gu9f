const writingErrorsUpdated = [
    {
        "error": "Therefore, is not only the responsibility of the school teaching these skills.",
        "correct": "Therefore, it is not only the responsibility of the school teaching these skills.",
        "explanation": "Falta el sujeto impersonal it antes de is.",
        "category": "subject"
    },
    {
        "error": "Theoretical subjects should be mentioned since allow us to learn more complex concepts.",
        "correct": "Theoretical subjects should be mentioned since they allow us to learn more complex concepts.",
        "explanation": "Falta el pronombre they para hacer referencia a las asignaturas (theoretical subjects).",
        "category": "subject"
    },
    {
        "error": "It is worth noting the importance of telling the truth if someone is a witness on a trial.",
        "correct": "It is worth noting the importance of telling the truth if someone is a witness in a trial.",
        "explanation": "Para referirse a un proceso judicial o juicio, la preposición correcta es in (o during), no on.",
        "category": "preposition"
    },
    {
        "error": "The schools have an important role for preparing young people for adult life.",
        "correct": "The schools have an important role in preparing young people for adult life.",
        "explanation": "La estructura fija es to have a role IN doing something, no for.",
        "category": "preposition"
    },
    {
        "error": "Sometimes telling a lie has less impact on them than truth.",
        "correct": "Sometimes telling a lie has less impact on them than the truth.",
        "explanation": "En inglés siempre se dice tell the truth / the truth cuando nos referimos a «la verdad».",
        "category": "article"
    },
    {
        "error": "First and foremost, transport plays a big role in the pollution.",
        "correct": "First and foremost, transport plays a big role in pollution.",
        "explanation": "Al hablar de la contaminación en general (sustantivo incontable), no se debe colocar the.",
        "category": "article"
    },
    {
        "error": "Nowadays, it’s unbelievable to having a day without any online input.",
        "correct": "Nowadays, it’s unbelievable to have a day without any online input.",
        "explanation": "Aquí to forma parte del infinitivo (to have), por lo que el verbo no lleva -ing.",
        "category": "infinitive"
    },
    {
        "error": "Without them, the students won’t be able for learning other important ones.",
        "correct": "Without them, the students won’t be able to learn other important ones.",
        "explanation": "La regla gramatical es be able TO + infinitivo, no able for + gerundio.",
        "category": "infinitive"
    },
    {
        "error": "It is widely believed that our type of education should be change into a more practical type.",
        "correct": "It is widely believed that our type of education should be changed into a more practical type.",
        "explanation": "Tras should be, el verbo requiere la terminación de participio (changed).",
        "category": "passive"
    },
    {
        "error": "Before teaching practical skills, the students need to have basic knowledges.",
        "correct": "Before teaching practical skills, the students need to have basic knowledge.",
        "explanation": "Knowledge es incontable y no existe en plural (knowledges).",
        "category": "uncountable"
    },
    {
        "error": "I believe that in many cases people will need to tell a lie because the consequence can be worst than the profits of the truth.",
        "correct": "I believe that in many cases people will need to tell a lie because the consequence can be worse than the profits of the truth.",
        "explanation": "Al haber una comparación directa con la palabra than, corresponde la forma comparativa worse.",
        "category": "comparison"
    },
    {
        "error": "Many jobs require you to have an all day connection.",
        "correct": "Many jobs require you to have an all-day connection.",
        "explanation": "All-day actúa como adjetivo compuesto del sustantivo connection, por lo que requiere el guion.",
        "category": "hyphenation"
    },
    {
        "error": "Maybe, in a democratic society don’t make sense to continue paying for art.",
        "correct": "Maybe, in a democratic society it does not make sense to continue paying for art.",
        "explanation": "Falta el sujeto impersonal it y la concordancia en singular requiere does not, no don't.",
        "category": "subject"
    },
    {
        "error": "If people can’t access to art and culture, our society will be less educated over time.",
        "correct": "If people can’t access art and culture, our society will be less educated over time.",
        "explanation": "Se elimina la preposición to porque access ya funciona como verbo directo transitivo.",
        "category": "transitive"
    },
    {
        "error": "They are responsible for manage the citizens' taxes.",
        "correct": "They are responsible for managing citizens' taxes.",
        "explanation": "Tras la preposición for, el verbo manage debe conjugarse en gerundio (managing).",
        "category": "gerund"
    },
    {
        "error": "Art and culture are the basis of every society and we need to take care on them.",
        "correct": "Art and culture are the basis of every society and we need to take care of them.",
        "explanation": "La colocación obligatoria con take care es siempre of (take care of), nunca on.",
        "category": "preposition"
    },
    {
        "error": "Which education we want for our children?",
        "correct": "What kind of education do we want for our children?",
        "explanation": "Falta el auxiliar do para formular la pregunta directa (do we want) y se usa what (kind of) para una elección abierta.",
        "category": "question_order"
    },
    {
        "error": "They are responsible for managing the citizen’s taxes.",
        "correct": "They are responsible for managing citizens' taxes.",
        "explanation": "Al referirse a los impuestos de los ciudadanos en plural, el apóstrofo va tras la s (citizens'), mientras que citizen's indicaría un único ciudadano.",
        "category": "possessive"
    },
    {
        "error": "It is widely believed that all the museums and art galleries should be free for everyone to visit.",
        "correct": "It is widely believed that all museums and art galleries should be free for everyone to visit.",
        "explanation": "Al referirse a los museos y galerías en general, el artículo the es redundante tras all.",
        "category": "article"
    },
    {
        "error": "As well as that, they are also aware of the students budget and have special offers for them with a cheaper prices.",
        "correct": "As well as that, they are also aware of the students' budget and have special offers for them with cheaper prices.",
        "explanation": "Se elimina el artículo a porque prices está en plural.",
        "category": "article"
    },
    {
        "error": "They are specialists in every type of rice, but if you come there you must try the famous Valencian’s Traditional Paella.",
        "correct": "They are specialists in every type of rice, but if you come there you must try the famous traditional Valencian paella.",
        "explanation": "Se elimina el posesivo 's en Valencian y se coloca como adjetivo (traditional Valencian paella).",
        "category": "possessive"
    },
    {
        "error": "Their dishes are nothing short of a culinary masterpiece for fans of rices.",
        "correct": "Their dishes are nothing short of a culinary masterpiece for fans of rice.",
        "explanation": "La palabra rice es incontable y nunca debe llevar plural (rices).",
        "category": "uncountable"
    },
    {
        "error": "Also you can find other spanish traditional dishes like Andalusian Gazpacho or the Spanish Tortilla.",
        "correct": "You can also find other traditional Spanish dishes like Andalusian Gazpacho or the Spanish Tortilla.",
        "explanation": "Spanish debe escribirse con mayúscula inicial (S) y el orden habitual del adverbio also es tras el sujeto.",
        "category": "capitalization"
    },
    {
        "error": "As well as that, they are also aware of the students budget.",
        "correct": "As well as that, they are also aware of the students' budget.",
        "explanation": "Falta el apóstrofo después de la s (students') para indicar posesión en un sustantivo plural regular.",
        "category": "possessive"
    },
    {
        "error": "It would be amazing if we could take a beer with good music at Jazz House.",
        "correct": "It would be amazing if we could have a beer with good music at Jazz House.",
        "explanation": "La colocación natural para consumir bebidas es have a beer / have a drink, no take a beer.",
        "category": "collocation"
    },
    {
        "error": "It would be amazing if we could have a beer with good music on Jazz’s House.",
        "correct": "It would be amazing if we could have a beer with good music at Jazz House.",
        "explanation": "Se emplea la preposición at para referirse a locales o puntos específicos (at Jazz House).",
        "category": "preposition"
    },
    {
        "error": "I think that the best way is to do some outdoor activities like running across the park or maybe a yoga class on the beach.",
        "correct": "I think that the best way is to do some outdoor activities like running through the park or maybe a yoga class on the beach.",
        "explanation": "Para hacer deporte desplazándote por un parque se utiliza through (o in), no across.",
        "category": "preposition"
    }
];