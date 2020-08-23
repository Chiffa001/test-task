import React from "react";
import {ServiceConsumer} from "../service-context";

export const withService = (Wrapped) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (service) => <Wrapped {...props} service={service}/>
                }
            </ServiceConsumer>
        );
    };
};
