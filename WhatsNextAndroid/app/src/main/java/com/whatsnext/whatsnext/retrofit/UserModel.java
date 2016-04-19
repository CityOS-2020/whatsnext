package com.whatsnext.whatsnext.retrofit;

import com.google.gson.annotations.SerializedName;

import java.util.List;

/**
 * Created by Abdurahman(android sensei) on 17/04/16.
 */
public class UserModel {
    @SerializedName("FKUser")
    private int userId;
    @SerializedName("interests")
    private List<InterestModel> interests;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List<InterestModel> getInterests() {
        return interests;
    }

    public void setInterests(List<InterestModel> interests) {
        this.interests = interests;
    }
}
