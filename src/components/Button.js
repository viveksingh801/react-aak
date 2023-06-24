import './Button.css';

const Button = (props) => {

    const clickHandler = () => {

        let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
        let result = specialChars.test(props.submit);

        if (props.submit.length === 0 || result) {
            console.log("Invalid!");
            return;
        }
        else
            console.log("You have submitted: " + props.submit);
    }

    return (
        <div>
            <button className='submitbutton' type='submit' onClick={clickHandler}>Submit</button>
        </div>

    );

}
export default Button;