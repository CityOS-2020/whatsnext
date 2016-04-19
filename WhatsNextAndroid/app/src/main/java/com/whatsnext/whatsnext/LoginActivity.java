package com.whatsnext.whatsnext;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.Window;
import android.widget.ProgressBar;

import com.whatsnext.whatsnext.preferencesScreen.Users;
import com.whatsnext.whatsnext.resourceListScreen.ResourceListActivity;
import com.whatsnext.whatsnext.retrofit.NextApi;
import com.whatsnext.whatsnext.retrofit.UserModel;

import java.util.List;

import retrofit.Callback;
import retrofit.RestAdapter;
import retrofit.RetrofitError;
import retrofit.client.Response;

public class LoginActivity extends AppCompatActivity {

    private RestAdapter restAdapter;
    private NextApi nextApi;
    private ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        progressBar = (ProgressBar) findViewById(R.id.progressBarr);
        setUpRetrofit();
    }

    private void setUpRetrofit(){
        restAdapter = new RestAdapter.Builder().setEndpoint("http://whatsnextapi.azurewebsites.net").build();
        restAdapter.setLogLevel(RestAdapter.LogLevel.FULL);
        nextApi = restAdapter.create(NextApi.class);
    }

    public void loginWithFacebook(View view) {
        progressBar.setVisibility(View.VISIBLE);
        getUsers(1);
    }

    public void loginWithEmail(View view) {
        progressBar.setVisibility(View.VISIBLE);
        getUsers(2);
    }

    private void getUsers(final int userId) {
        nextApi.getUsers(new Callback<List<UserModel>>() {
            @Override
            public void success(List<UserModel> userModels, Response response) {
                System.out.println("userModels = " + userModels);
                Users.getInstance().setUsers(userModels);
                Users.getInstance().setCurrentUser(userId);

                progressBar.setVisibility(View.INVISIBLE);

                Intent openMainScreen = new Intent(LoginActivity.this, ResourceListActivity.class);
                openMainScreen.putExtra("user_id", userId);
                startActivity(openMainScreen);
            }

            @Override
            public void failure(RetrofitError error) {
                System.out.println("error = " + error);
                progressBar.setVisibility(View.INVISIBLE);

                Intent openMainScreen = new Intent(LoginActivity.this, ResourceListActivity.class);
                openMainScreen.putExtra("user_id", userId);
                startActivity(openMainScreen);
            }
        });
    }
}
