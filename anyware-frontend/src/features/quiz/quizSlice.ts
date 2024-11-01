import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
    _id: string;
    questionText: string;
    options: string[];
    correctAnswer: string;
    type: 'single-choice' | 'true/false' | string;
}

interface Attempt {
    name: string,
    score: number,
    status: string,
    finishTime: string
}

interface QuizState {
    questions: Question[];
    currentQuestionIndex: number;
    userAnswers: { [key: string]: string };
    score: number;
    attempts: Partial<Attempt>[] | null;
    courseName:string;
}

const initialState: QuizState = {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: {},
    score: 0,
    attempts: [],
    courseName:''
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        startQuiz(state, action: PayloadAction<{questons:Question[] , quizName:string}>) {
            state.questions = action.payload.questons;
            state.currentQuestionIndex = 0;
            state.userAnswers = {};
            state.score = 0;
            state.courseName = action.payload.quizName;
        },
        answerQuestion(state, action: PayloadAction<{ questionId: string; answer: string }>) {
            const { questionId, answer } = action.payload;
            state.userAnswers[questionId] = answer;
        },
        nextQuestion(state) {
            state.currentQuestionIndex += 1;
        },
        previousQuestion(state) {
            state.currentQuestionIndex -= 1;
        },
        calculateScore(state, action: PayloadAction<{ courseName: string; finishTime: string }>) {
            state.score = state.questions.reduce((score, question) => {
                return question.correctAnswer === state.userAnswers[question._id] ? score + 1 : score;
            }, 0);
            state.attempts?.push({ score: state.score, name: state.courseName, status: Math.round(state.questions.length / 2) <= state.score ? "Success 💚" : "Fail 💔", finishTime: action.payload.finishTime })
        },
        restQuiz(state) {
            state.userAnswers = {};
            state.score = 0;
        }
    }
});

export const { startQuiz, answerQuestion, nextQuestion, calculateScore, previousQuestion } = quizSlice.actions;
export default quizSlice.reducer;