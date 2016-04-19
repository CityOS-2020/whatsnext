package com.whatsnext.whatsnext.preferencesScreen;

import android.graphics.Color;
import android.os.Bundle;
import android.support.design.widget.CollapsingToolbarLayout;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.view.Gravity;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.whatsnext.whatsnext.R;

import java.util.ArrayList;

public class UserSettingsActivity extends AppCompatActivity {

    private ArrayList<SettingModel> settingsList;
    private CollapsingToolbarLayout collapsingToolbarLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_settings);
        //Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        //toolbar.setTitle("Settings");
        //setSupportActionBar(toolbar);

        collapsingToolbarLayout = (CollapsingToolbarLayout) findViewById(R.id.collapsing_toolbar);
        collapsingToolbarLayout.setTitle("Settings");
        collapsingToolbarLayout.setExpandedTitleColor(Color.WHITE);
        collapsingToolbarLayout.setExpandedTitleColor(getResources().getColor(android.R.color.transparent));


        RecyclerView recyclerView = (RecyclerView) findViewById(R.id.preferencesRecyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        settingsList = new ArrayList<>();

        SettingModel settingModel = new SettingModel();
        settingModel.setAwesomeFontIconName("fa-mobile");
        settingModel.setSettingName("Display ads on Phone");
        settingModel.setSettingTurnedOn(true);
        settingsList.add(settingModel);

        SettingModel settingModel2 = new SettingModel();
        settingModel2.setAwesomeFontIconName("fa-desktop");
        settingModel2.setSettingName("Display ads on Billboards");
        settingModel2.setSettingTurnedOn(false);
        settingsList.add(settingModel2);

        SettingModel settingModel3 = new SettingModel();
        settingModel3.setAwesomeFontIconName("fa-mobile");
        settingModel3.setSettingName("Display ads on Kiosk");
        settingModel3.setSettingTurnedOn(false);
        settingsList.add(settingModel3);

        SettingModel settingModel4 = new SettingModel();
        settingModel4.setAwesomeFontIconName("fa-facebook-square");
        settingModel4.setSettingName("Use Facebook account");
        settingModel4.setSettingTurnedOn(true);
        settingsList.add(settingModel4);

        SettingModel settingModel5 = new SettingModel();
        settingModel5.setAwesomeFontIconName("fa-twitter-square");
        settingModel5.setSettingName("Use Twitter account");
        settingModel5.setSettingTurnedOn(true);
        settingsList.add(settingModel5);

        SettingModel settingModel6 = new SettingModel();
        settingModel6.setAwesomeFontIconName("fa-user");
        settingModel6.setSettingName("Show name and picture");
        settingModel6.setSettingTurnedOn(true);
        settingsList.add(settingModel6);

        SettingModel settingModel7 = new SettingModel();
        settingModel7.setAwesomeFontIconName("fa-futbol-o");
        settingModel7.setSettingName("Sports");
        settingModel7.setSettingTurnedOn(false);
        settingsList.add(settingModel7);

        SettingModel settingModel8 = new SettingModel();
        settingModel8.setAwesomeFontIconName("fa-camera");
        settingModel8.setSettingName("Sightseeing");
        settingModel8.setSettingTurnedOn(false);
        settingsList.add(settingModel8);

        SettingModel settingModel9 = new SettingModel();
        settingModel9.setAwesomeFontIconName("fa-spoon");
        settingModel9.setSettingName("Food");
        settingModel9.setSettingTurnedOn(false);
        settingsList.add(settingModel9);

        SettingModel settingModel10 = new SettingModel();
        settingModel10.setAwesomeFontIconName("fa-ship");
        settingModel10.setSettingName("Boat trips");
        settingModel10.setSettingTurnedOn(false);
        settingsList.add(settingModel10);

        SettingModel settingModel11 = new SettingModel();
        settingModel11.setAwesomeFontIconName("fa-music");
        settingModel11.setSettingName("Nightlife");
        settingModel11.setSettingTurnedOn(false);
        settingsList.add(settingModel11);

//        SettingModel settingModel12 = new SettingModel();
//        settingModel12.setAwesomeFontIconName("fa-shopping-bag");
//        settingModel12.setSettingName("Fashion");
//        settingModel12.setSettingTurnedOn(false);
//        settingsList.add(settingModel12);

        SettingModel settingModel13 = new SettingModel();
        settingModel13.setAwesomeFontIconName("fa-coffee");
        settingModel13.setSettingName("Coffee");
        settingModel13.setSettingTurnedOn(false);
        settingsList.add(settingModel13);

        SettingModel settingModel14 = new SettingModel();
        settingModel14.setAwesomeFontIconName("fa-sun-o");
        settingModel14.setSettingName("Weather");
        settingModel14.setSettingTurnedOn(false);
        settingsList.add(settingModel14);

//        SettingModel settingModel15 = new SettingModel();
//        settingModel15.setAwesomeFontIconName("fa-television");
//        settingModel15.setSettingName("Movies");
//        settingModel15.setSettingTurnedOn(false);
//        settingsList.add(settingModel15);

        SettingsListAdapter settingsListAdapter = new SettingsListAdapter(settingsList);
        recyclerView.setAdapter(settingsListAdapter);
    }


    public void saveContent(View view) {
        Toast.makeText(this, "Preferences saved", Toast.LENGTH_SHORT).show();
    }
}
