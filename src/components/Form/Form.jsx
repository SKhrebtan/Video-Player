export const Form = ({onSubmit}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e.target.elements.video.value)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label name='video'>
                <input name='video' type='text'/>
            </label>
            <button type='submit'>Load</button>
        </form>
    )
}