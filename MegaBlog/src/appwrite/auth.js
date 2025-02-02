import conf from "../config/conf";

import { Client, Account, ID } from "appwrite";  /**this line from appwrite documentation page */

export class AuthService {
    client= new Client();
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appWriteProjectId)
        this.account=new Account(this.client)
    }


    async createAccount ({email, password, name}) {
        try {
            const userAccount = await this.account.create
            (ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
        
            }else {
                return userAccount;
        }
        } catch (error) {
            throw error;
        
        }
        
     }


     async login({email, password}) {
        try{
        
        return await this.account.createEmailPasswordSession(email,
        password);
        }catch (error) {
        throw error;
        }
 }

            async getCurrentUser(){
            try {
                return await this.account.get();
            } catch (error) {
                console. log ("Appwrite serive :: getCurrentUser :: error", error);
            }
            return null;
            }

            async logout(){
                try {
                    await this.account.deleteSessions();
                } catch (error) {
                    console.log("Appwrite serive :: logout :: error", error);  
                }
            }
}


const authservice= new AuthService();

export default authservice;