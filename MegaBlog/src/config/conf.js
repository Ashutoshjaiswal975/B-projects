/** sometimes enviromental variable cant be load in App.jsx, so we have to export the key-value pair for every IDs , here evry
 * enviroment variables are export so that its a perfect garunty that evry things come with string
 */
const conf={

    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
    
}


export default conf