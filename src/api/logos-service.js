class LogosApi {
    endpoint = 'https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json'
    async getInterviewData() {
        const response = await fetch(this.endpoint);
        const { data } = await response.json();
        return data;
    }
}

export const logosApi = new LogosApi();
