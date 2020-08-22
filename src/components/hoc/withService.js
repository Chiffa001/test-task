import React from "react";
import {Consumer} from "../service-context";

export const withService = () => (Wrapped) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (service) => <Wrapped {...props} sevice={service}/>
                }
            </Consumer>
        );
    };
};
