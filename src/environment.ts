type Environment = {
    apiBaseUrl: string;
};

export const environment: Environment = {
    apiBaseUrl: process.env.CHUCKNORRIS_API_BASE_URL as string,
};