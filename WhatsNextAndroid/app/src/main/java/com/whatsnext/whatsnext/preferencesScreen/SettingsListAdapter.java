package com.whatsnext.whatsnext.preferencesScreen;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.TextView;

import com.beardedhen.androidbootstrap.FontAwesomeText;
import com.whatsnext.whatsnext.R;

import java.util.ArrayList;

/**
 * Created by Abdurahman(android sensei) on 17/04/16.
 */
public class SettingsListAdapter extends RecyclerView.Adapter<SettingsListAdapter.ViewHolder>{

    private ArrayList<SettingModel> settingsList;

    public SettingsListAdapter(ArrayList<SettingModel> settingsList) {
        this.settingsList = settingsList;
    }


    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.setting_list_row, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        holder.settingIcon.setIcon(settingsList.get(position).getAwesomeFontIconName());
        holder.settingName.setText(settingsList.get(position).getSettingName());
        if(settingsList.get(position).settingTurnedOn()){
            holder.settingOnState.setChecked(true);
        }
        else{
            holder.settingOnState.setChecked(false);
        }
    }

    @Override
    public int getItemCount() {
        return settingsList.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public FontAwesomeText settingIcon;
        public TextView settingName;
        public CheckBox settingOnState;
        public ViewHolder(View v) {
            super(v);
            settingIcon = (FontAwesomeText) v.findViewById(R.id.settingIcon);
            settingName = (TextView) v.findViewById(R.id.settingName);
            settingOnState = (CheckBox) v.findViewById(R.id.settingCheckBox);
        }
    }
}
