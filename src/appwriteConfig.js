import { Client, Databases, Account } from 'appwrite';


export const PROJECT_ID = '64fee302378dafa9a96f'
export const DATABASE_ID = '64fee469afa4ea4837e9'
export const COLLECTION_ID_MESSAGES = '64fee47f2ffb880e7fe7'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64fee302378dafa9a96f');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;    