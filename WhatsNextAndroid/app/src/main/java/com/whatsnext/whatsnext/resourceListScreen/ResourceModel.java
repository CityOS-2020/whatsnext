package com.whatsnext.whatsnext.resourceListScreen;

/**
 * Created by Abdurahman(android sensei) on 16/04/16.
 */
public class ResourceModel {
    private String cardTitle;
    private String cardDistance;
    private String cardDescription;
    private String cardTag;
    private int picutureResourceId;

    public String getCardTitle() {
        return cardTitle;
    }

    public void setCardTitle(String cardTitle) {
        this.cardTitle = cardTitle;
    }

    public String getCardDistance() {
        return cardDistance;
    }

    public void setCardDistance(String cardDistance) {
        this.cardDistance = cardDistance;
    }

    public String getCardDescription() {
        return cardDescription;
    }

    public void setCardDescription(String cardDescription) {
        this.cardDescription = cardDescription;
    }

    public int getPicutureResourceId() {
        return picutureResourceId;
    }

    public void setPicutureResourceId(int picutureResourceId) {
        this.picutureResourceId = picutureResourceId;
    }

    public String getCardTag() {
        return cardTag;
    }

    public void setCardTag(String cardTag) {
        this.cardTag = cardTag;
    }
}
