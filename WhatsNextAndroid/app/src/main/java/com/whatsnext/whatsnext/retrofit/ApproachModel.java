package com.whatsnext.whatsnext.retrofit;

import com.google.gson.annotations.SerializedName;

/**
 * Created by Abdurahman(android sensei) on 17/04/16.
 */
public class ApproachModel {
    @SerializedName("id")
    private int approachId;

    public int getApproachId() {
        return approachId;
    }

    public void setApproachId(int approachId) {
        this.approachId = approachId;
    }
}
