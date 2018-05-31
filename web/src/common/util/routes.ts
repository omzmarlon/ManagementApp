export class ManagementAppRoute {
    public static LOGIN: string = "/auth/login";
    public static REGISTER: string = "/auth/create";
    public static LOGOUT: string = "/auth/logout";
    public static STUDENT_CURRENT_GROUP: string = "/groups/current";

    public static studentGetCurrentQuiz(groupId: number): string {
        return `/groups/${groupId}/quizzes/now/`;
    }
    public static studentAnswerCurrentQuiz(groupId: number): string {
        return `/groups/${groupId}/quizzes/answer/`;
    }
}
