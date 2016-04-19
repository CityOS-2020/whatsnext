package com.whatsnext.whatsnext.retrofit;

import java.util.List;

import retrofit.Callback;
import retrofit.http.Body;
import retrofit.http.DELETE;
import retrofit.http.GET;
import retrofit.http.POST;

/**
 * Created by Abdurahman(android sensei) on 17/04/16.
 */
public interface NextApi {
        @POST("/api/approach")
        void postJson(@Body UserModel userModel, Callback<ApproachModel> callback);

        @DELETE("/api/approach/{approachId}")
        void delete(@retrofit.http.Path("approachId") int id, Callback<ApproachModel> callback);

        @GET("/api/users")
        void getUsers(Callback<List<UserModel>> callback);
}
