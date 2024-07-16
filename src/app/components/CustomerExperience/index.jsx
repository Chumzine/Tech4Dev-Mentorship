import { companyValuesA, companyValuesB } from "./info";
import React from "react";

export const CustomerExperience = () => {
    const RenderTextWithBr = ({ text }) => (
        <div>
            {text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </div>
    );
    const renderCompanyValuesA = (props) => {
        return (
            <div>
                <props.icon />
                <h5>{props.value}</h5>
                <RenderTextWithBr text={props.text} />
            </div>
        )
    }
    const renderCompanyValuesB = (props) => {
        return (
            <div>
                <props.icon />
                <h5>{props.value}</h5>
                <RenderTextWithBr text={props.text} />
            </div>
        )
    }
    return (
        <section>
            <h3>Creating Extraordinary Customer Experience</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi <br />
            dignissim eu pharetra consequat montes, sagittis.</p>
            <div>
                {
                    companyValuesA.map(renderCompanyValuesA)
                }
            </div>
            <div>
                {
                    companyValuesB.map(renderCompanyValuesB)
                }
            </div>
        </section>
    )
}