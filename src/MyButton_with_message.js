function MyButton_with_message(props)
{
     if (!props.message) {
         return (<button onClick={() => alert('hi .. input was undefined')}>I'm a button</button>);
     }
    else
    {
        return (
            <button onClick={() => alert(props.message)}>Im a button with a message</button>
        );
    

    }
}

export default MyButton_with_message;
