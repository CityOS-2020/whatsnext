package com.whatsnext.whatsnext.preferencesScreen;

import com.whatsnext.whatsnext.retrofit.UserModel;

import java.util.List;

/**
 * Created by Abdurahman(android sensei) on 17/04/16.
 */
public class Users {
    private List<UserModel> users;
    private int currentUser;
    private static Users ourInstance = new Users();

    public static Users getInstance() {
        return ourInstance;
    }

    private Users() {
    }

    public List<UserModel> getUsers() {
        return users;
    }

    public void setUsers(List<UserModel> users) {
        this.users = users;
    }

    public int getCurrentUser() {
        return currentUser;
    }

    public void setCurrentUser(int currentUser) {
        this.currentUser = currentUser;
    }

    public UserModel getCurrentUserModel(){
        if(currentUser == 1){
            return users.get(0);
        }

        return users.get(1);
    }
}
