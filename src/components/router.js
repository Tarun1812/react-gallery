import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ListImagesComponent from "./listImageView";
import SingleImageView from "./singleImageView";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListImagesComponent}/>
                <Route path="/ImageView/:imageId" exact component={SingleImageView} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router