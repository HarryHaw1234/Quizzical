export default function IntroPage(props) {

    return (
        <div className="introPage">
            <h2 className="introPage--title">Quizzical</h2>
            <p className="introPage--text">Challenge yourself with our general knowledge quizzes!</p>
            <button className="introPage--button" onClick={props.toggleClick}>Start quiz</button>
        </div>
        )
}