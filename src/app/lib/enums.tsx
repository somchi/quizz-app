export enum EVENT_STATE {
  CONNECTED = 'connected',
  USER_DISCONNECTED = 'userDisconnected',
  QUIZ_STARTED = 'quizStarted',
  ROUND_STARTED = 'roundStarted',
  QUESTION_SHOW = 'questionShown',
  SUBMIT_ANSWER = 'submitAnswer',
  ANSWERED_REVEALED = 'answerRevealed',
  LEADERBOARD_SHOWN = 'leaderboardShown',
  NEXT_ROUND = 'nextRound',
  TIME_UP = 'timeUp',
}

export enum QUIZ_STATUS {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  ENDED = 'ended',
}
