export interface TotalNumberResponse {
    data: {
        confirmed: number;
        deaths: number;
        lastChecked: string;
        lastReported: string;
        location: string;
    };
}
