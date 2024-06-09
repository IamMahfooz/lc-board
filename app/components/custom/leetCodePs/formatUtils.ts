type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';

interface Question {
    content: string;
    companyTagStats: string[];
    difficulty: Difficulty;
    dislikes: number;
    exampleTestcases: {}[];
    hints: {}[];
    isPaidOnly: boolean;
    likes: number;
    questionId: number;
    questionFrontendId: number;
    solution: string;
    similarQuestions: {}[];
    title: string;
    titleSlug: string;
    topicTags: string[];
}

export interface SelectProblemData {
    question: Question;
}

export const formatQuestionData = (data: SelectProblemData) => ({
    link: `https://leetcode.com/problems/` + data.question.titleSlug,
    questionId: data.question.questionId,
    questionFrontendId: data.question.questionFrontendId,
    questionTitle: data.question.title,
    titleSlug: data.question.titleSlug,
    difficulty: data.question.difficulty,
    isPaidOnly: data.question.isPaidOnly,
    question: data.question.content,
    exampleTestcases: data.question.exampleTestcases,
    topicTags: data.question.topicTags,
    hints: data.question.hints,
    solution: data.question.solution,
    companyTagStats: data.question.companyTagStats,
    likes: data.question.likes,
    dislikes: data.question.dislikes,
    similarQuestions: data.question.similarQuestions,
});