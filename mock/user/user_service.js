class UserSercice{
    constructor(userClient){
        this.userClient = userClient;
        this.isLogindIn = false;
    }
    login(id, password){
        if(!this.isLogindIn){
            return this.userClient
                .login(id, password)
                .then((data)=> this.isLogindIn = true);
        }
    }
}
module.exports = UserSercice;