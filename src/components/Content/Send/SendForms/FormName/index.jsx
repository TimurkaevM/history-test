import style from './style.module.css';

function FormName() {
  return (
    <div className={style.form__name}>
      <div className={style.form__title}>
        НАЗВАНИЕ МАТЕРИАЛА 
      </div>
      <input className={style['form__input-name']} type="text" name="name" placeholder="Введите название..." />
    </div>
  )
}

export default FormName;
