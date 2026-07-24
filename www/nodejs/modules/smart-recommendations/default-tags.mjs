/**
 * Default Tags — Configuração padrão de keywords + scores por idioma
 * 
 * Usado como fallback quando o usuário não tem histórico de visualização (cold start).
 * As keywords representam interesses comuns do público geral:
 *   - Esportes (futebol, F1, basquete)
 *   - Séries e filmes (gêneros, franquias)
 *   - Entretenimento em geral
 * 
 * Scores: 0.1 (baixo) a 1.0 (alto)
 */

// Tags genéricas que funcionam em qualquer idioma
const GLOBAL_TAGS = {
    // Esportes
    'futebol': 0.9,
    'football': 0.9,
    'fútbol': 0.9,
    'sport': 0.7,
    'sports': 0.7,
    'esporte': 0.7,
    'deportes': 0.7,
    'f1': 0.5,
    'formula 1': 0.5,
    'mma': 0.5,
    'ufc': 0.5,
    'basquete': 0.4,
    'basketball': 0.4,
    'volei': 0.3,
    'volleyball': 0.3,
    'tenis': 0.3,
    'tennis': 0.3,
    'boxe': 0.3,
    'boxing': 0.3,
    'nfl': 0.4,
    'nba': 0.4,

    // Filmes e séries
    'filme': 0.8,
    'filmes': 0.8,
    'movie': 0.8,
    'movies': 0.8,
    'película': 0.8,
    'série': 0.8,
    'series': 0.8,
    'serie': 0.8,
    'tv': 0.4,
    'episodio': 0.6,
    'episode': 0.6,
    'temporada': 0.6,
    'season': 0.6,
    'capitulo': 0.5,
    'chapter': 0.5,
    'documentario': 0.5,
    'documentary': 0.5,
    'documental': 0.5,

    // Gêneros de filmes
    'acão': 0.7,
    'action': 0.7,
    'accion': 0.7,
    'comedia': 0.7,
    'comedy': 0.7,
    'comédia': 0.7,
    'drama': 0.6,
    'romance': 0.5,
    'terror': 0.5,
    'horror': 0.5,
    'suspense': 0.5,
    'thriller': 0.5,
    'aventura': 0.6,
    'adventure': 0.6,
    'aventura': 0.6,
    'ficção': 0.6,
    'sci-fi': 0.6,
    'scifi': 0.6,
    'fantasia': 0.5,
    'fantasy': 0.5,
    'animação': 0.5,
    'animation': 0.5,
    'infantil': 0.4,
    'kids': 0.4,
    'policial': 0.5,
    'crime': 0.5,
    'guerra': 0.4,
    'war': 0.4,

    // Música e entretenimento
    'musica': 0.5,
    'music': 0.5,
    'música': 0.5,
    'show': 0.5,
    'concert': 0.4,
    'ao vivo': 0.5,
    'live': 0.4,
    'entretenimento': 0.3,
    'entertainment': 0.3,

    // Notícias e atualidades
    'noticia': 0.5,
    'notícia': 0.5,
    'news': 0.5,
    'jornal': 0.4,
    'reportagem': 0.3,
    'talk show': 0.3,

    // Canais e redes populares (como gênero, não como canal específico)
    'novela': 0.6,
    'soap opera': 0.4,
    'reality show': 0.4,
    'variedades': 0.3,
    'variety': 0.3,
}

// Tags específicas por idioma
const LANG_TAGS = {
    'pt': {
        // Futebol — paixão nacional
        'brasileirão': 0.8,
        'libertadores': 0.7,
        'copa do brasil': 0.7,
        'champions league': 0.8,
        'liga dos campeões': 0.8,
        'premier league': 0.6,
        'la liga': 0.6,
        'serie a': 0.6,
        'bundesliga': 0.5,
        'flamengo': 0.5,
        'corinthians': 0.5,
        'são paulo': 0.5,
        'palmeiras': 0.5,
        'santos': 0.4,
        'grêmio': 0.4,
        'internacional': 0.4,
        'cruzeiro': 0.4,
        'atlético mineiro': 0.4,
        'botafogo': 0.3,
        'fluminense': 0.3,
        'vasco': 0.3,
        'bahia': 0.3,

        // TV aberta brasileira
        'globo': 0.4,
        'record': 0.3,
        'sbt': 0.3,
        'band': 0.3,
        'rede tv': 0.2,

        // Streamings
        'netflix': 0.5,
        'prime video': 0.5,
        'disney+': 0.4,
        'hbo': 0.5,
        'max': 0.4,
        'star+': 0.3,
        'telecine': 0.5,
        'megapix': 0.3,
        'paramount+': 0.3,

        // Conteúdo adulto (com score baixo por padrão)
        'adulto': 0.1,
        '18': 0.1,

        // Culinária
        'culinaria': 0.3,
        'culinária': 0.3,
        'receita': 0.3,
        'cooking': 0.3,
        'gastronomia': 0.3,
    },

    'en': {
        'nfl': 0.6,
        'super bowl': 0.6,
        'nba': 0.6,
        'mlb': 0.4,
        'nhl': 0.3,
        'premier league': 0.6,
        'champions league': 0.6,
        'netflix': 0.5,
        'hbo': 0.5,
        'disney+': 0.4,
        'paramount+': 0.3,
        'peacock': 0.3,
        'cnn': 0.4,
        'fox news': 0.3,
        'bbc': 0.4,
        'cooking': 0.3,
        'food': 0.3,
        'travel': 0.3,
    },

    'es': {
        'fútbol': 0.9,
        'la liga': 0.8,
        'champions league': 0.7,
        'liga mx': 0.7,
        'barcelona': 0.6,
        'real madrid': 0.6,
        'river plate': 0.5,
        'boca juniors': 0.5,
        'novela': 0.7,
        'telenovela': 0.7,
        'netflix': 0.5,
        'hbo': 0.5,
        'disney+': 0.4,
        'telemundo': 0.3,
        'univision': 0.3,
        'azteca': 0.3,
        'televisa': 0.3,
        'cocina': 0.3,
        'viajes': 0.3,
    },

    'fr': {
        'ligue 1': 0.7,
        'champions league': 0.7,
        'psg': 0.5,
        'tour de france': 0.5,
        'roland garros': 0.4,
        'netflix': 0.5,
        'canal+': 0.5,
        'tf1': 0.4,
        'france 2': 0.3,
        'france 3': 0.3,
        'cuisine': 0.3,
    },

    'de': {
        'bundesliga': 0.8,
        'champions league': 0.7,
        'bayern': 0.5,
        'dortmund': 0.4,
        'formel 1': 0.5,
        'netflix': 0.5,
        'disney+': 0.4,
        'das erste': 0.3,
        'zdf': 0.3,
        'kochen': 0.3,
    },

    'it': {
        'serie a': 0.8,
        'champions league': 0.7,
        'juventus': 0.5,
        'milan': 0.5,
        'inter': 0.5,
        'napoli': 0.4,
        'formula 1': 0.5,
        'netflix': 0.5,
        'rai': 0.3,
        'mediaset': 0.3,
        'cucina': 0.3,
    },

    'ja': {
        'anime': 0.7,
        'animación': 0.6,
        'j-drama': 0.4,
        'netflix': 0.5,
        'nhk': 0.3,
    },
}

/**
 * Retorna as tags padrão para o idioma especificado
 * @param {string} locale - Código do idioma (pt, en, es, fr, de, it, ja)
 * @param {number} limit - Número máximo de tags (0 = todas)
 * @returns {Object} Tags com scores { tag: score }
 */
export function getDefaultTags(locale = 'pt', limit = 0) {
    const langCode = locale?.split('-')[0] || 'en' // Fallback to 'en' if locale is undefined or empty
    
    // Merge global + language-specific tags
    const merged = { ...GLOBAL_TAGS, ...(LANG_TAGS[langCode] || LANG_TAGS['en']) }
    
    if (limit > 0) {
        return Object.fromEntries(
            Object.entries(merged)
                .sort(([, a], [, b]) => b - a)
                .slice(0, limit)
        )
    }
    
    return merged
}

/**
 * Retorna os idiomas que possuem tags personalizadas
 * @returns {string[]} Lista de códigos de idioma
 */
export function getSupportedLocales() {
    return Object.keys(LANG_TAGS)
}
