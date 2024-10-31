import ".styles.scss"

const variants = {
    mainTitle: "main-title",
    mainTitleUnderlineStart: "main-title underline-start ",
    mainTitleUnderlineCenter: "main-title underline-center ",
    custom: ""
}

const Typography = ({ text, variant = "custom" }) => {
    return <div className={`main ${variants[variant]} `}>
        {text}
    </div>
}
export default Typography