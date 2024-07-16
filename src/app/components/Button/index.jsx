import { combinedClasses } from "../../../utils/format";

export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        outline: 'btn-outline',
        secondary: 'btn-secondary'
    }
    const className = classNames[props.type] || classNames.primary;
    const classes = combinedClasses(className, props.className);
    return (
    <button onClick={props.onClick} className={classes}>
        {props.children}
    </button>
    )
}