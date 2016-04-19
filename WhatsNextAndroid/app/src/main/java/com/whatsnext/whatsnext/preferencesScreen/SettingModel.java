package com.whatsnext.whatsnext.preferencesScreen;

/**
 * Created by Abdurahman(android sensei) on 17/04/16.
 */
public class SettingModel {
    private String awesomeFontIconName;
    private String settingName;
    private boolean settingTurnedOn;

    public String getAwesomeFontIconName() {
        return awesomeFontIconName;
    }

    public void setAwesomeFontIconName(String awesomeFontIconName) {
        this.awesomeFontIconName = awesomeFontIconName;
    }

    public String getSettingName() {
        return settingName;
    }

    public void setSettingName(String settingName) {
        this.settingName = settingName;
    }

    public boolean settingTurnedOn() {
        return settingTurnedOn;
    }

    public void setSettingTurnedOn(boolean settingTurnedOn) {
        this.settingTurnedOn = settingTurnedOn;
    }
}
