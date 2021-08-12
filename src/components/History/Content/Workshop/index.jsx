import style from './style.module.css';
import WorkshopMaster from './WorkshopMaster';
import WorkshopMenu from './WorkshopMenu';

function Workshop() {
  return (
    <div className={style.workshop}>
      {/* <WorkshopMenu /> */}
      <WorkshopMaster />
    </div>
  );
}

export default Workshop;
