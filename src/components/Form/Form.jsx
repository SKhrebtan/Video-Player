import css from './form.module.css'

export const Form = ({ onSubmit }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e.target.elements.video.value)
        e.target.reset()
    }

    return (
        <form className={css.form}  onSubmit={handleSubmit}>
            <label className={css.label}  name='video'>
                <input className={css.input} name='video' type='text'/>
            </label>
            <button className={css.button} type='submit'>Load</button>
        </form>
    )
}