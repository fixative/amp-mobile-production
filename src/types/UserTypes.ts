export interface User {
    first_name: string,
    last_name: string,
    username: string,
    password: string,
    birthdate?: string,
    email: string,
    ethnicity_ids?: string[],
    ethnicity_other?: string,
    gender_identity_ids?: string[],
    gender_identity_other?: string,
    how_long?: string,
    state?: string,
    topic_ids?: string[]
    zip_code?: string,
}