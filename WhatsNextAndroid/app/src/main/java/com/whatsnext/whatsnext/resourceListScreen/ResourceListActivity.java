package com.whatsnext.whatsnext.resourceListScreen;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.Vibrator;
import android.support.design.widget.Snackbar;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.WindowManager;
import android.widget.Toast;

import com.whatsnext.whatsnext.R;
import com.whatsnext.whatsnext.preferencesScreen.UserSettingsActivity;
import com.whatsnext.whatsnext.retrofit.ApproachModel;
import com.whatsnext.whatsnext.retrofit.NextApi;
import com.whatsnext.whatsnext.retrofit.UserModel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import retrofit.Callback;
import retrofit.RestAdapter;
import retrofit.RetrofitError;
import retrofit.client.Response;

public class ResourceListActivity extends AppCompatActivity{

    private BluetoothAdapter mBtAdapter;
    private String beacon1Address = "EC:11:27:2A:56:B3";
    private String beacon2Address = "EC:11:27:29:B5:63";
    private boolean scanRunning;
    private int mInterval = 1000;
    private int secondsPassed = 0;
    private Handler mHandler;
    private List<String> visibleDevices = new ArrayList<>();
    private ArrayList<ResourceModel> resourceList;
    private ResourceListAdapter resourceListAdapter;
    private AlertDialog coffeeDialog;
    private AlertDialog wallDeialog;
    private boolean beaconOneModelShown;
    private Vibrator vibrator;
    private RestAdapter restAdapter;
    private NextApi nextApi;
    private ApproachModel lastApproach;
    private Toolbar toolbar;

    Runnable mStatusChecker = new Runnable() {
        @Override
        public void run() {
            try {
                System.out.println("repeating task");
                secondsPassed += 1;

                if(secondsPassed == 15){
                    secondsPassed = 0;
                    finishDiscovery();
                    //Toast.makeText(ResourceListActivity.this, " finish discovery ", Toast.LENGTH_SHORT).show();
                }
                if(!scanRunning){
                    visibleDevices.clear();
                    secondsPassed = 0;
                    doBeaconDiscovery();
                    Snackbar.make(toolbar, "Scanning now", Snackbar.LENGTH_SHORT).show();
                    System.out.println("scanning will be run now");
                }
            } finally {
                mHandler.postDelayed(mStatusChecker, mInterval);
            }
        }
    };


    private final BroadcastReceiver mReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();

            boolean newDeviceFound = BluetoothDevice.ACTION_FOUND.equals(action);
            boolean discoveryFinished = BluetoothAdapter.ACTION_DISCOVERY_FINISHED.equals(action);
            if (newDeviceFound) {
                BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                checkIfBeaconOne(device);
                checkIfBeaconTwo(device);
            }
            if (discoveryFinished) {
                finishDiscovery();
            }
        }

        private void checkIfBeaconTwo(BluetoothDevice device) {
            if(device.getAddress().equals(beacon2Address)){
                visibleDevices.add(device.getAddress());
                if(beaconOneModelShown){
                    System.out.println("BeaconDetectionActivity.open wall");
                    //showDialog(wallDeialog);
                    //informServerThatUserApproachedBeacon();
                    beaconOneModelShown = false;
                    vibrate();
                }
            }
        }

        private void checkIfBeaconOne(BluetoothDevice device) {
            if(device.getAddress().equals(beacon1Address)){
                visibleDevices.add(device.getAddress());
                Snackbar.make(toolbar, "Beacon detected", Snackbar.LENGTH_SHORT).show();
                informServerThatUserApproachedBeacon();
                System.out.println("BeaconDetectionActivity.open coffee");
                if(!beaconOneModelShown){
                    showDialog(wallDeialog);
                    beaconOneModelShown = true;
                }
            }
        }
    };

    private void vibrate() {
        vibrator.vibrate(500);
    }

    private void informServerThatUserApproachedBeacon() {
        UserModel userModel = new UserModel();

        int userId = getIntent().getIntExtra("user_id", 1);

        System.out.println("userId = " + userId);

        userModel.setUserId(userId);

        nextApi.postJson(userModel, new Callback<ApproachModel>() {
            @Override
            public void success(ApproachModel approachModel, Response response) {
                System.out.println("approachModel = " + approachModel.getApproachId());
                lastApproach = approachModel;
            }

            @Override
            public void failure(RetrofitError error) {
                System.out.println("error = " + error);
            }
        });

    }

    private void finishDiscovery() {
        System.out.println("discovery finished");
        boolean beaconOneFound = false;
        boolean beaconTwoFound = false;

        for(String detectedDeviceAddress : visibleDevices){
            if(detectedDeviceAddress.equals(beacon1Address)){
                beaconOneFound = true;
            }
            if(detectedDeviceAddress.equals(beacon2Address)){
                beaconTwoFound = true;
            }

            System.out.println("beacon one not found " + !beaconOneFound);
            System.out.println("last approac not null " + lastApproach != null);
            System.out.println("last approac id " + lastApproach.getApproachId());

            //Toast.makeText(this, "Last approach id, beacon one found "+lastApproach.getApproachId()+beaconOneFound, Toast.LENGTH_SHORT).show();

            if(!beaconOneFound && lastApproach != null){
                System.out.println("deleting beacon");
                nextApi.delete(lastApproach.getApproachId(), new Callback<ApproachModel>() {

                    @Override
                    public void success(ApproachModel approachModel, Response response) {
                        lastApproach = null;
                        System.out.println("delete approach success ");
                    }

                    @Override
                    public void failure(RetrofitError error) {
                        System.out.println("error on delete approach = " + error);
                    }
                });
            }
        }
        scanRunning = false;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_beacon_detection);
        setUpToolbar();
        setUpFloatButton();
        setStatusTextView();
        setUpBluetoothEvents();
        setUpRecyclerView();
        setUpDialogs();
        setUpRetrofit();
        setUpVibratorService();
        initDiscoveryService();

        int userId = getIntent().getIntExtra("user_id", 1);
        System.out.println("userId = " + userId);
    }

    private void setUpVibratorService() {
        vibrator = (Vibrator)this.getSystemService(Context.VIBRATOR_SERVICE);
    }

    private void setUpRetrofit() {
        restAdapter = new RestAdapter.Builder().setEndpoint("http://whatsnextapi.azurewebsites.net").build();
        restAdapter.setLogLevel(RestAdapter.LogLevel.FULL);
        nextApi = restAdapter.create(NextApi.class);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu_resource_list, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_settings:
                openSettingsActivity();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    private void openSettingsActivity() {
        Intent settingsActivity = new Intent(this, UserSettingsActivity.class);
        startActivity(settingsActivity);
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    private void setUpDialogs() {
        LayoutInflater inflater = getLayoutInflater();
        View coffeeLayout = inflater.inflate(R.layout.popup_coffee_view_layout, null);
        View wallLayout = inflater.inflate(R.layout.popup_wall_view_layout, null);


        coffeeDialog = new AlertDialog.Builder(this)
                .setIcon(R.drawable.logo)
                .setView(coffeeLayout).create();

        wallDeialog = new AlertDialog.Builder(this)
                .setIcon(R.drawable.logo)
                .setView(wallLayout)
                .create();
    }

    private void showDialog(AlertDialog alertDialog){
        if(!alertDialog.isShowing()){
            alertDialog.show();

            WindowManager.LayoutParams lp = alertDialog.getWindow().getAttributes();
            lp.dimAmount=0.0f;
            alertDialog.getWindow().setAttributes(lp);
            alertDialog.getWindow().addFlags(WindowManager.LayoutParams.FLAG_BLUR_BEHIND);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        stopRepeatingTask();
    }

    private void setUpRecyclerView() {
        final SwipeRefreshLayout swipeRefreshLayout = (SwipeRefreshLayout) findViewById(R.id.swipeRefreshLayout);
        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                randomizeList();
                swipeRefreshLayout.setRefreshing(false);
            }
        });

        RecyclerView recyclerView = (RecyclerView) findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        resourceList = new ArrayList<ResourceModel>();

        ResourceModel resourceModel = new ResourceModel();
        resourceModel.setCardTitle("Dubrovnik Mountine Climbing");
        resourceModel.setCardDistance("2.2 km away");
        resourceModel.setCardTag("Nature");
        resourceModel.setCardDescription("WhatsNext would like to suggest you seeing this location. Since you like climbing it could make your stay exceptional");
        resourceModel.setPicutureResourceId(R.drawable.hiking_bg_3);

        resourceList.add(resourceModel);

        ResourceModel resourceModel2 = new ResourceModel();
        resourceModel2.setCardTitle("Splash in hot poool");
        resourceModel2.setCardDistance("1 km away");
        resourceModel2.setCardDescription("Check this location, we noticed that you like swimming. This place can offer you a discount if you go there within next hour");
        resourceModel2.setCardTag("Sports");
        resourceModel2.setPicutureResourceId(R.drawable.pool_bg);

        resourceList.add(resourceModel2);

        ResourceModel resourceModel3 = new ResourceModel();
        resourceModel3.setCardTitle("Fresh vegetables next by");
        resourceModel3.setCardDistance("0.5 km away");
        resourceModel3.setCardTag("Health");
        resourceModel3.setCardDescription("What is better than buying fresh vegetables, homegrown in Dubrovnik, since you are vegan check this place out");
        resourceModel3.setPicutureResourceId(R.drawable.vegetables_bg);

        resourceList.add(resourceModel3);

        ResourceModel resourceModel4 = new ResourceModel();
        resourceModel4.setCardTitle("Morning coffee, the way you like it");
        resourceModel4.setCardDistance("1.2 km away");
        resourceModel4.setCardTag("Coffee");
        resourceModel4.setCardDescription("Drink your first Dubrovnik coffee in the amazing sunset today. Observe the beauty around you with double espresso");
        resourceModel4.setPicutureResourceId(R.drawable.coffee_bg);

        resourceList.add(resourceModel4);

        resourceListAdapter = new ResourceListAdapter(resourceList);

        recyclerView.setAdapter(resourceListAdapter);
    }

    private void randomizeList() {
        long seed = System.nanoTime();
        Collections.shuffle(resourceList, new Random(seed));
        resourceListAdapter.notifyDataSetChanged();
    }

    private void initDiscoveryService() {
        mHandler = new Handler();
        startRepeatingTask();
    }

    void startRepeatingTask() {
        mStatusChecker.run();
    }

    void stopRepeatingTask() {
        mHandler.removeCallbacks(mStatusChecker);
    }

    private void setStatusTextView() {
//        beaconOneTextView = (TextView) findViewById(R.id.beacon1_textView);
//        beaconTwoTextView = (TextView) findViewById(R.id.beacon2_textView);
    }

    private void setUpBluetoothEvents() {
        IntentFilter filter = new IntentFilter(BluetoothDevice.ACTION_FOUND);
        this.registerReceiver(mReceiver, filter);
        filter = new IntentFilter(BluetoothAdapter.ACTION_DISCOVERY_FINISHED);
        this.registerReceiver(mReceiver, filter);
        mBtAdapter = BluetoothAdapter.getDefaultAdapter();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        stopRepeatingTask();
    }

    private void setUpToolbar() {
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
    }

    private void setUpFloatButton() {
//        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
//        fab.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                doBeaconDiscovery();
//                Snackbar.make(view, "Searching beacons", Snackbar.LENGTH_LONG)
//                        .setAction("Action", null).show();
//            }
//        });
    }

    private void doBeaconDiscovery() {
        mBtAdapter.startDiscovery();
        scanRunning = true;
    }
}
