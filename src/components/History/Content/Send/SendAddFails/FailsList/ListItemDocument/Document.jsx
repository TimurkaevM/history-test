import React from 'react';
import style from './style.module.css';

function Document(props) {

  let reader = new FileReader();
      reader.onload = () => {
      }
      reader.readAsDataURL(props.application.file);

  return (
    <div className={style.img__block}>
      <div className={style.document}>
      {
        props.application.file.type.match("pdf") ? 
        (
          <svg className={style.logo} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532.83 710">
            <path fill="#e6e6e6" d="M590.43,107H353.49A94.5,94.5,0,0,0,259,201.49v521A94.5,94.5,0,0,0,353.49,817h300A94.5,94.5,0,0,0,748,722.51V269.25a21.33,21.33,0,0,0-6-14.82L605.77,113.5A21.35,21.35,0,0,0,590.43,107Z" transform="translate(-216.1 -107)"/>
            <path fill="#b7b7b7" d="M630.07,259c-19.88-3.7-32.55-18.43-32.8-39.89-.43-35.41-.15-70.83-.06-106.25,0-1.6,1.16-3.19,1.78-4.79q23.93,24.07,47.85,48.14,48.84,48.93,97.75,97.78c1.41,1.41,2.89,2.74,4.34,4.12l-.87,1.82,0,0Z" transform="translate(-216.1 -107)"/>
            <path fill="#d1d1d1" d="M630.07,259l118,1V370c-1.48-.54-2.57-.61-3.15-1.19q-22.1-22-44.08-44.1c-6.71-6.7-13.5-13.32-20.23-20-12.77-12.65-25.59-25.25-38.24-38C638.79,263.11,635.48,259.46,630.07,259Z" transform="translate(-216.1 -107)"/>
            <path fill="#e25e5e" d="M672.11,416.53a46.16,46.16,0,0,1,.86-6.34c0-1.07.11-2.14.17-3.22-3.58-10.88-9.46-15-21.83-14.94q-181.17,0-362.35.07c-18,0-36-.13-54-.19-12.57,1.73-18.87,8.82-18.88,21.52q0,92.51,0,185c0,14.82,7.63,22.43,22.45,22.49l53.48.2,2,0c2.5,0,5-.12,7.5-.12q174,0,348,0c10.12,0,18.41-2.77,22.71-12.84.23-1.07.46-2.13.7-3.2l0-2.94a44.5,44.5,0,0,1-.87-6.34Q672,506.1,672.11,416.53Zm-152,54.13c0-8.81,3.17-12.37,11.9-12.48,17.16-.22,34.32-.19,51.48,0,7.6.08,11.7,3.82,11.52,9.62s-4.88,10-12,10.08c-12.66.14-25.33.16-38,0-3.67-.05-5.11,1.08-4.91,4.84a125.56,125.56,0,0,1,0,14c-.24,4.06,1.09,5.61,5.32,5.5,9.83-.25,19.66-.12,29.49,0a27.07,27.07,0,0,1,6.42.72c5,1.29,8.76,6.07,8.44,10.46s-4.65,8.42-10.19,8.58c-10,.27-20,.08-30,.18-10.62.1-9.33-1.37-9.42,9.19-.06,7,.06,14,0,21-.11,7.23-3.44,11.05-9.41,11.07-6.63,0-10.48-3.91-10.54-11.21-.11-13.83,0-27.67,0-41.5C520.09,497.32,520.06,484,520.1,470.66Zm-118.17-1.08c0-6.54,3-10.93,9.12-11,16.29-.16,32.86-1.2,48.82,1.3,24.29,3.81,40.3,26.73,39.05,52.43-.95,19.53-8.23,35.86-26.26,45.22a53.44,53.44,0,0,1-20.44,5.6c-12.94.9-26,.43-39,.3-8-.07-11.25-3.41-11.3-11.34-.09-13.83,0-27.67,0-41.51C401.91,496.92,401.85,483.25,401.93,469.58Zm51.85,95.28H411.32v-.44h42.46ZM299.27,470.6c.05-10.19,3.71-13.82,13.92-13.84,11.16,0,22.34-.38,33.46.25,22.34,1.27,36.26,16.87,35.64,39.22-.58,20.89-13.83,34.95-34.8,36.43-7.79.55-15.64.35-23.47.25-3.45,0-4.79,1.26-4.7,4.67.12,5,.14,10-.08,15-.3,6.88-3.67,10.65-9.29,10.8-6.05.16-10.4-3.89-10.54-10.84-.26-14.15-.07-28.31-.07-42.46h-.08C299.26,496.91,299.21,483.75,299.27,470.6ZM652.78,619.83H295.33v-.44H652.78Z" transform="translate(-216.1 -107)"/>
            <path fill="#e25e5e" d="M424.73,544.76c10.28-.11,20.84.76,30.78-1.27,16-3.24,24.73-19.2,22.8-38.21-1.64-16.16-12.86-27.19-29-28.31-3.8-.26-7.65,0-11.47,0v-.14c-4,0-8,.07-12,0-2.76-.07-3.86,1.13-3.86,3.86,0,20.14,0,40.27.13,60.41C422.15,542.33,423.84,544.76,424.73,544.76Z" transform="translate(-216.1 -107)"/>
            <path fill="#e25e5e" d="M319.36,494.93c0,5,.05,10,0,15,0,2.65,1,4,3.79,4,7.49-.1,15,.25,22.48-.21A18.26,18.26,0,0,0,363,495.24c0-10.5-7.35-18.62-17.81-19.14-7.15-.36-14.33,0-21.49-.17-3.29-.07-4.43,1.41-4.36,4.51C319.43,485.27,319.36,490.1,319.36,494.93Z" transform="translate(-216.1 -107)"/>
          </svg>
        ) : 
        
        (
          <svg className={style.logo} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 609.61 597.11">
            <path fill="#2a5598" d="M781.33,295.5v-.76c.21-13.37-11.74-22.13-21.84-22.44-9.46-.29-18.94-.54-28.4-.55q-95.6-.18-191.18-.07c-1.27,0-2.54,0-3.8,0a2.68,2.68,0,0,1-2.84-2.9c0-1.1,0-2.2,0-3.3,0-14.81,0-29.62,0-44.42,0-3.47-.36-3.72-3.8-3.72-9.48,0-19,.18-28.44-.05C489,217,196.09,267.62,175.68,271.2c-1.17.21-2.36.38-3.06,1.53a7.7,7.7,0,0,0-.36,3.5L172,584.66a5.29,5.29,0,0,1,.24,2.73q0,12.81,0,25.61,0,70.75,0,141.49c0,1.33-.26,2.73.77,3.86a6.34,6.34,0,0,0,3.05,1.14q42.61,7.46,85.26,14.79Q301,781.17,340.62,788c45.76,7.95,91.51,15.93,137.2,24.25,4.65.85,9.25,2.12,14,2.13q17.64,0,35.29,0c5.68,0,6.06-.39,6.07-6.08,0-14.47,0-28.94,0-43.41,0-6.35,0-6.39,6.33-6.35,47.46.28,94.93-.36,142.4.4,23.51.38,47,.64,70.55-.42a52.1,52.1,0,0,0,14.72-2.44c3.19-1.1,6.66-2.19,8.68-5a25.85,25.85,0,0,0,4.87-11.87,111.8,111.8,0,0,0,.77-14.16C781.5,581.86,781.82,438.68,781.33,295.5ZM449,410.15c-11.32,49.74-22.49,99.52-33.84,149.26-3.66,16.05-7.78,32-11.65,48a3.51,3.51,0,0,1-2.5,2.79c-6.76,2.44-13.67,1.82-20.58,1.13-6.06-.61-12.09-1.65-18.2-1.31-1.63.08-2-.62-2.26-1.92q-5.87-28.15-11.8-56.3c-5.37-25.38-10.81-50.74-15.37-76.27-.1-.57-.29-1.13-.62-2.37-1.49,7.66-2.86,14.64-4.22,21.63-6,31-13.06,61.82-19.71,92.7-1.16,5.37-2.31,10.74-3.35,16.13-.34,1.74-.89,2.51-2.91,2.37-11.81-.82-23.64-1.5-35.46-2.14-1.81-.1-2.37-.81-2.71-2.51q-10.94-55.2-22-110.37-6.77-33.8-12.93-67.71c-.3-1.61,0-2.14,1.79-2.21,10.32-.36,20.63-.83,30.94-1.33,1.75-.09,2.6.09,2.94,2.22,5.79,35.79,12.2,71.47,17.66,107.32,1,6.76,2,13.54,3,20.31.3.41.6.42.9,0l15.54-71.82q6.45-29.73,12.84-59.45c.37-1.76,1-2.31,2.75-2.39q17.51-.8,35-1.84c1.86-.11,2.38.46,2.73,2.22q9.72,48.58,19.6,97.14c2.64,13,5.45,26,8.19,39,.84-.22.76-.88.84-1.38,6.43-39.71,13.55-79.29,20.44-118.92,1.18-6.74,2.41-13.48,3.53-20.23.24-1.44.81-1.88,2.28-1.95,12.34-.56,24.67-1.22,37-1.88C448.48,408,449.58,407.7,449,410.15ZM757.39,736.88q-111.2-.12-222.4,0c-2.4,0-3.1-.52-3.08-3q.2-24.75,0-49.5c0-2.44.57-3.06,3-3.06q86.84.12,173.65.05c3.82,0,3.33.43,3.35-3.4,0-7.2-.11-14.39.07-21.58.06-2.36-.72-2.71-2.84-2.71q-87,.09-173.91,0c-3.29,0-3.29,0-3.29-3.39,0-9.39.08-18.79-.06-28.18,0-2.39.47-3.07,3-3.06q86.69.12,173.39.05c4.12,0,3.63.65,3.65-3.61,0-7-.14-14,.08-21.07.08-2.69-.81-3.14-3.27-3.13q-86.82.11-173.65.11c-2.47,0-3.26-.47-3.21-3.12.19-9.56.15-19.12,0-28.68,0-2.27.51-2.92,2.87-2.92q78.45.12,156.9.06c6.09,0,12.19,0,18.28,0,1.53,0,2-.37,2-2q-.12-11.94,0-23.87c0-1.43-.45-2-1.88-1.87a21.87,21.87,0,0,1-2.29,0H535.18c-3.74,0-3.19.35-3.19-3.28,0-9.48.09-19-.08-28.43,0-2.56.76-3,3.11-3q86.7.11,173.4.05c4.05,0,3.51.55,3.52-3.46,0-7.2-.07-14.39.07-21.58,0-2.11-.53-2.66-2.65-2.65q-63.35.09-126.69.05c-16.08,0-32.16,0-48.24.05-2,0-2.52-.56-2.5-2.54.1-9.81.14-19.63,0-29.44,0-2.36.73-2.71,2.84-2.71q86.82.09,173.65,0c3.93,0,3.54.52,3.55-3.48,0-7.2-.1-14.39.06-21.58.06-2.32-.68-2.74-2.84-2.74q-87,.09-173.91.05c-3.28,0-3.28,0-3.28-3.4,0-9.4.08-18.79-.06-28.18,0-2.37.44-3.08,3-3.07q86.82.12,173.65.05c3.82,0,3.39.62,3.41-3.3,0-7.2-.1-14.39.06-21.58.06-2.42-.73-2.9-3-2.89q-86.82.09-173.65,0c-3.39,0-3.39,0-3.39-3.32,0-14.21,0-28.43-.05-42.65,0-2,.54-2.48,2.51-2.48q111.7.07,223.41,0c2.41,0,2.67.8,2.67,2.86q-.07,109.41,0,218.83,0,109.15.06,218.32C760.54,736.17,760,736.88,757.39,736.88Z" transform="translate(-172 -217.25)"/>
          </svg>
        )
      }
      <p>{props.application.file.name.slice(0, 14) + '...'}</p>
      <div className={style.remove} onClick={() => props.handleDeleteFail(props.application.id, "application", props.amount, props.groupId)}>
        <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <path className={style.path} id="_8_copy" data-name="8 copy" d="M761.161,793.907C602.711,952.3,345.808,952.3,187.353,793.9s-158.45-415.2,0-573.592,415.353-158.392,573.8,0S919.614,635.513,761.161,793.907ZM223.216,256.163c-138.643,138.593-138.643,363.3,0,501.891s363.434,138.594,502.077,0,138.648-363.3,0-501.9S361.864,117.567,223.216,256.163ZM599.775,417.484l-89.656,89.625,89.658,89.626a25.354,25.354,0,0,1-35.863,35.849l-89.658-89.626L384.6,632.583a25.354,25.354,0,0,1-35.863-35.85L438.4,507.109l-89.658-89.625a25.354,25.354,0,0,1,35.861-35.85l89.658,89.627,89.658-89.625A25.353,25.353,0,1,1,599.775,417.484Z"/>
        </svg>
      </div>
    </div>
    </div>
  )
}

export default Document;
