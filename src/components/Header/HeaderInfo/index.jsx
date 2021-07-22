import Logo from './Logo';
import ProjectName from './ProjectName';
import style from './style.module.css';

function HeaderInfo() {
  return (
    <div className={style.info}>
      <Logo />
      <ProjectName />
    </div>
  );
}

export default HeaderInfo;
