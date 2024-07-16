import { CustomButton } from "../Button"

export const Newsletter = () => {
    return (
        <section>
            <h3>
                Newsletter
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.</p>
            <div className="">
                <input type="text" placeholder="Your email" />
                <CustomButton>Subscribe</CustomButton>
            </div>
        </section>
    )
}