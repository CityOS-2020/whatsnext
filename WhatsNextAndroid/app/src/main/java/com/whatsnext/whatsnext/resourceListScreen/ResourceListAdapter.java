package com.whatsnext.whatsnext.resourceListScreen;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.whatsnext.whatsnext.R;

import java.util.ArrayList;

/**
 * Created by Abdurahman(android sensei) on 16/04/16.
 */
public class ResourceListAdapter extends RecyclerView.Adapter<ResourceListAdapter.ViewHolder> {

    private final ArrayList<ResourceModel> resourceList;

    public ResourceListAdapter(ArrayList<ResourceModel> myDataset) {
        this.resourceList = myDataset;
    }


    public static class ViewHolder extends RecyclerView.ViewHolder {
        public TextView cardTitle;
        public TextView cardDistance;
        public TextView cardDescription;
        public TextView cardTag;
        public ImageView imageView;
        public View holder;
        public ViewHolder(View v) {
            super(v);
            holder = v;
            cardTitle = (TextView) holder.findViewById(R.id.card_title);
            cardDistance = (TextView) holder.findViewById(R.id.distance_text);
            cardDescription = (TextView) holder.findViewById(R.id.card_description);
            cardTag = (TextView) holder.findViewById(R.id.cardTag);
            imageView = (ImageView) holder.findViewById(R.id.cardViewBackground);
        }
    }

    @Override
    public ResourceListAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.resource_list_row, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(ResourceListAdapter.ViewHolder holder, int position) {
        holder.cardTitle.setText(resourceList.get(position).getCardTitle());
        holder.cardDistance.setText(resourceList.get(position).getCardDistance());
        holder.cardDescription.setText(resourceList.get(position).getCardDescription());
        holder.cardTag.setText(resourceList.get(position).getCardTag());
        holder.imageView.setImageResource(resourceList.get(position).getPicutureResourceId());
    }

    @Override
    public int getItemCount() {
        return resourceList.size();
    }
}
