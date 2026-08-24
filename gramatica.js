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
    }
];