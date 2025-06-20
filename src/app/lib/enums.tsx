export enum EVENT_STATE {
  CONNECTED = 'connected',
  USER_DISCONNECTED = 'userDisconnected',
  START_QUIZ = 'startQuiz',
  QUIZ_STARTED = 'quizStarted',
  START_ROUND = 'startRound',
  ROUND_STARTED = 'roundStarted',
  SHOW_QUESTION = 'showQuestion',
  QUESTION_SHOW = 'questionShown',
  SUBMIT_ANSWER = 'submitAnswer',
  ANSWER_SUBMITED = 'answerSubmitted',
  REVEAL_ANSWER = 'revealAnswer',
  ANSWERED_REVEALED = 'answerRevealed',
  SHOW_LEADERBOARD = 'showLeaderboard',
  LEADERBOARD_SHOWN = 'leaderboardShown',
  NEXT_ROUND = 'nextRound',
}

export enum QUIZ_STATUS {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  ENDED = 'ended',
}
