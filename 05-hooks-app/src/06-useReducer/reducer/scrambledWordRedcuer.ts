export interface ScrambledWordState {
  words: string[],
  currentWord: string,
  scrambledWord: string,
  guess: string,
  points: number,
  errorCounter: number,
  maxAllowErrors: number,
  skipCounter: number,
  maxSkips: number,
  isGameOver: boolean,
  totalWords: number
}

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

export const getInitialState = (): ScrambledWordState => {

  const shuffleArrayWords = shuffleArray([...GAME_WORDS])

  return {
    words: shuffleArrayWords,
    currentWord: shuffleArrayWords[0],
    scrambledWord: scrambleWord(shuffleArrayWords[0]),
    guess: '',
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    maxSkips: 3,
    isGameOver: false,
    totalWords: shuffleArrayWords.length
  }
}

export type ScrambleWordAction =
  { type: 'SET_GUESS', payload: string } |
  { type: 'CHECK_ANSWER' } |
  { type: 'SKIP_WORD' } |
  { type: 'PLAY_AGAIN', payload: ScrambledWordState }

export const scrambledWordsReducer = (state: ScrambledWordState, action: ScrambleWordAction): ScrambledWordState => {
  switch (action.type) {

    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase()
      }

    case 'CHECK_ANSWER': {
      if (state.guess === state.currentWord) {
        const newWords = state.words.slice(1)

        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: '',
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0])
        }
      }

      return {
        ...state,
        errorCounter: state.errorCounter + 1,
        guess: '',
        isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors
      }
    }

    case 'SKIP_WORD': {
      const shuffleArrayWords = shuffleArray(state.words)

      if (state.skipCounter < state.maxSkips) {
        return {
          ...state,
          currentWord: shuffleArrayWords[0],
          scrambledWord: scrambleWord(shuffleArrayWords[0]),
          skipCounter: state.skipCounter + 1
        }
      }

      return {
        ...state,
      }
    }

    case "PLAY_AGAIN":
      return action.payload

    default:
      return state
  }
}
