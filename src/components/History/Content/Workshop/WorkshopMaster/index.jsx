import style from './style.module.css'

function WorkshopMaster() {
  return (
    <div className={style.master}>


      <div className={style.original}>
        <div className={style.original__tusks}>
          
        </div>
        <div className={style.original__file}>
          
        </div>
      </div>


      <div className={style.processed}>
        <div className={style.processed__file}>
          <div className={style.processed__add}>
            +
          </div>
        </div>
        <button className={style.processed__button}>
          принять на обработку
        </button>
      </div>


    </div>
  )
}

export default WorkshopMaster;
