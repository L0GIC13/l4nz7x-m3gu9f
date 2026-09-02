const grammarLessons = [
    {
        lessonTitle: "Lección 1: El Artículo THE",
        cards: [
            {
                badge: "🎯 Part 2 • Open Cloze",
                title: "1. La Fórmula Mágica de Part 2",
                formula: "THE + Sustantivo + OF",
                desc: "En el examen de Cambridge, casi siempre que veas un hueco antes de una estructura con <strong>OF</strong>, la palabra que falta es <strong>THE</strong>:",
                type: "examples",
                examples: [
                    { text: "... at <strong>the</strong> end of the street.", note: "Punto / Límite concreto" },
                    { text: "... <strong>the</strong> majority of people.", note: "Cuantificador formal" },
                    { text: "... <strong>the</strong> impact of technology.", note: "Sustantivo definido por 'of'" }
                ]
            },
            {
                badge: "🔍 Regla de Oro • Específico vs. General",
                title: "2. El truco de «¿Cuál de ellos?»",
                formula: "¿Hablo de uno en concreto o de cosas en general?",
                desc: "Hazte siempre esta pregunta antes de escribir o no el artículo:",
                type: "comparison",
                general: {
                    title: "❌ EN GENERAL",
                    sub: "Plural o Incontable ➔ NUNCA lleva THE",
                    items: [
                        { wrong: "The cars cause pollution.", right: "Cars cause pollution.", note: "Los coches en general" },
                        { wrong: "I love the music.", right: "I love music.", note: "La música en general" }
                    ]
                },
                specific: {
                    title: "✅ ESPECÍFICO",
                    sub: "Uno que el oyente conoce ➔ SIEMPRE lleva THE",
                    items: [
                        { right: "Look at <strong>the car</strong> over there.", note: "Ese coche concreto" },
                        { right: "I love <strong>the music</strong> you played yesterday.", note: "Esa canción/música concreta" }
                    ]
                }
            },
            {
                badge: "📌 Cambridge Fixed Rules",
                title: "3. Cosas Únicas, Superlativos y Números de Orden",
                formula: "Cambridge siempre exige THE en estos 3 casos obligatorios:",
                desc: "Memoriza estas 3 categorías porque aparecen sistemáticamente en Use of English y Writing:",
                type: "categories",
                categories: [
                    {
                        icon: "🌍",
                        title: "Cosas únicas en el mundo",
                        tags: ["the sun", "the world", "the environment", "the internet"]
                    },
                    {
                        icon: "🏆",
                        title: "Superlativos",
                        tags: ["the best", "the most important", "the easiest"]
                    },
                    {
                        icon: "🥇",
                        title: "Números Ordinales",
                        tags: ["the first", "the second", "the last"]
                    }
                ]
            }
        ]
    },
    {
        lessonTitle: "Lección 2: ¿Cuándo usar TO + -ING vs. Infinitivo?",
        cards: [
            {
                badge: "🔍 Regla del 95% vs. Preposiciones",
                title: "1. El Truco del Algodón («SOMETHING»)",
                formula: "TO + Infinitivo (95%) vs. TO + -ING (Preposición)",
                desc: "Detrás de <strong>TO</strong> casi siempre va infinitivo base. Solo lleva <strong>-ING</strong> cuando TO funciona como preposición. Si puedes sustituir lo que va detrás por «SOMETHING» (o un sustantivo) y tiene sentido, exige <strong>-ING</strong>:",
                type: "comparison",
                general: {
                    title: "✅ TO + INFINITIVO (95%)",
                    sub: "Verbos normales con infinitivo",
                    items: [
                        { right: "able <strong>to get</strong>", note: "Capaz de conseguir" },
                        { right: "expect <strong>to pay</strong>", note: "Esperar pagar" },
                        { right: "decide <strong>to go</strong>", note: "Decidir ir" }
                    ]
                },
                specific: {
                    title: "🎯 TO COMO PREPOSICIÓN",
                    sub: "Sustituye por «SOMETHING» y encaja",
                    items: [
                        { right: "used to <strong>something</strong> ➔ used to <strong>working</strong>", note: "Acostumbrado a algo" },
                        { right: "look forward to <strong>something</strong> ➔ look forward to <strong>seeing</strong>", note: "Esperar algo con ilusión" }
                    ]
                }
            },
            {
                badge: "📌 Cambridge Fixed Rules",
                title: "2. Las 5 Excepciones Fijas con TO + -ING",
                formula: "Si NO es una de estas 5 ➔ Pon siempre infinitivo normal",
                desc: "Memoriza estas 5 estructuras porque son las que Cambridge evalúa siempre:",
                type: "categories",
                categories: [
                    {
                        icon: "👀",
                        title: "Expectativa e Ilusión",
                        tags: ["look forward to + -ing"]
                    },
                    {
                        icon: "🔄",
                        title: "Hábito y Costumbre",
                        tags: ["be used to + -ing", "get used to + -ing"]
                    },
                    {
                        icon: "✋",
                        title: "Oposición y Confesión",
                        tags: ["object to + -ing", "admit to + -ing", "confess to + -ing"]
                    },
                    {
                        icon: "➕",
                        title: "Conectores de Adición",
                        tags: ["in addition to + -ing"]
                    }
                ]
            }
        ]
    },
    {
        lessonTitle: "Lección 3: Ortografía • Doble LL vs. Una sola L",
        cards: [
            {
                badge: "🔤 Word Formation • Part 3",
                title: "1. Cuándo poner DOBLE LL (-lly / -ically)",
                formula: "Palabras en -L (+ly) o palabras en -IC (+ally)",
                desc: "Aplica estas 2 reglas para transformar adjetivos en adverbios sin fallar la ortografía:",
                type: "categories",
                categories: [
                    {
                        icon: "🅰️",
                        title: "Terminadas en -L (L + LY = LL)",
                        tags: ["careful ➔ carefully", "final ➔ finally", "real ➔ really", "successful ➔ successfully"]
                    },
                    {
                        icon: "🔬",
                        title: "Terminadas en -IC (añade -ally)",
                        tags: ["basic ➔ basically", "dramatic ➔ dramatically", "scientific ➔ scientifically", "⚠️ Excepción: publicly"]
                    }
                ]
            },
            {
                badge: "🔤 Word Formation • Part 3",
                title: "2. Cuándo poner UNA SOLA L (-ly / -ily)",
                formula: "Consonante + -LE (quita -e, pon -y) | Consonante + -Y (cambia a -ily)",
                desc: "Solo llevan una L si transformas estas dos terminaciones:",
                type: "categories",
                categories: [
                    {
                        icon: "✂️",
                        title: "Consonante + -LE (elimina -e)",
                        tags: ["simple ➔ simply", "probable ➔ probably", "terrible ➔ terribly", "comfortable ➔ comfortably"]
                    },
                    {
                        icon: "🔄",
                        title: "Consonante + -Y (cambia a -ily)",
                        tags: ["easy ➔ easily", "happy ➔ happily", "lucky ➔ luckily", "steady ➔ steadily"]
                    }
                ]
            }
        ]
    },
    {
        lessonTitle: "Lección 4: El Pronombre IT Obligatorio",
        cards: [
            {
                badge: "🎯 Part 4 • Key Word Transformation",
                title: "1. La Trampa de Traducción Español vs. Inglés",
                formula: "Verbo + IT + Conector / Adjetivo",
                desc: "En español decimos «No me gusta cuando...», pero en inglés es <strong>obligatorio meter IT</strong> antes del conector:",
                type: "comparison",
                general: {
                    title: "❌ TRADUCCIÓN LITERAL",
                    sub: "Omitir el pronombre 'IT'",
                    items: [
                        { wrong: "I don't like when people shout.", right: "I don't like it when people shout.", note: "Falta el 'it'" },
                        { wrong: "I would appreciate if you helped.", right: "I would appreciate it if you helped.", note: "Falta el 'it'" }
                    ]
                },
                specific: {
                    title: "✅ ESTRUCTURA CORRECTA",
                    sub: "Obligatorio meter 'IT' en medio",
                    items: [
                        { right: "He does not like <strong>it</strong> when...", note: "Like / hate + it + when" },
                        { right: "I find <strong>it</strong> difficult to...", note: "Find + it + adjetivo + to" }
                    ]
                }
            },
            {
                badge: "⚡ Las 3 Fórmulas Fijas de Examen",
                title: "2. El Machete Visual de Part 4",
                formula: "LIKE / HATE / APPRECIATE / FIND + IT",
                desc: "Estas son las 3 combinaciones fijas que exige Cambridge en las transformaciones:",
                type: "categories",
                categories: [
                    {
                        icon: "😡",
                        title: "LIKE / HATE + IT + WHEN",
                        tags: ["I hate it when people shout.", "She likes it when it rains."]
                    },
                    {
                        icon: "🙏",
                        title: "APPRECIATE + IT + IF",
                        tags: ["I would appreciate it if you helped.", "We appreciate it if you reply."]
                    },
                    {
                        icon: "🧠",
                        title: "FIND + IT + Adjetivo + TO",
                        tags: ["I find it hard to understand.", "They found it difficult to finish."]
                    }
                ]
            }
        ]
    },
    {
        lessonTitle: "Lección 5: Concordancia con PEOPLE (Sustantivo Plural)",
        cards: [
            {
                badge: "👥 Sujeto Plural • Writing & Use of English",
                title: "1. People = THEY (¡Prohibido añadir -S al verbo!)",
                formula: "PEOPLE + Verbo en plural (sin -S)",
                desc: "En español «la gente» es singular («la gente quiere»). En inglés, <strong>people es el plural de person</strong> (equivale a <strong>they</strong>). Por tanto, en Present Simple el verbo <strong>NUNCA lleva la -s</strong>:",
                type: "comparison",
                general: {
                    title: "❌ ERROR TÍPICO (Traducción)",
                    sub: "Tratar 'people' como singular (-s)",
                    items: [
                        { wrong: "...people who only wants money...", right: "...people who only want money...", note: "People want (nunca wants)" },
                        { wrong: "...how many people follows you...", right: "...how many people follow you...", note: "People follow (nunca follows)" }
                    ]
                },
                specific: {
                    title: "✅ REGLA DE ORO",
                    sub: "Sustituye mentalmente 'people' por 'they'",
                    items: [
                        { right: "Most people <strong>prefer</strong> working from home.", note: "They prefer (no prefers)" },
                        { right: "People who <strong>live</strong> in cities suffer stress.", note: "They live (no lives)" }
                    ]
                }
            },
            {
                badge: "🧠 Machete Visual",
                title: "2. Person (Singular) vs. People (Plural)",
                formula: "1 PERSON (He/She) vs. 2+ PEOPLE (They)",
                desc: "Recuerda esta correspondencia rápida para revisar tus writings antes de entregarlos:",
                type: "categories",
                categories: [
                    {
                        icon: "👤",
                        title: "1 PERSON ➔ Lleva -S (He/She)",
                        tags: ["A person who wants...", "That person follows you...", "One person knows..."]
                    },
                    {
                        icon: "👥",
                        title: "PEOPLE ➔ SIN -S (They)",
                        tags: ["People who want...", "People follow you...", "Many people know..."]
                    }
                ]
            }
        ]
    }
];