import AbstractComponent from './abstrackt-component.js';
export const createTaskTemplate = ({
  description,
  dueDate,
  repeatingDays,
  tags,
  color,
  isFavorite,
  isArchive
}) => {
  return (
    `<article class="card card--${color} ${Object.keys(repeatingDays).some((day) => repeatingDays[day]) ? `card--repeat` : ``}">
      <div class="card__form">
         <div class="card__inner">
            <div class="card__control">
               <button type="button" class="card__btn card__btn--edit">
               edit
               </button>
               <button type="button" class="card__btn card__btn--archive ${isArchive ? `` : `card__btn--disabled`}">
               archive
               </button>
               <button type="button" class="card__btn card__btn--favorites ${isFavorite ? `` : `card__btn--disabled`}">
               favorites
               </button>
            </div>
            <div class="card__color-bar">
               <svg class="card__color-bar-wave" width="100%" height="10">
                  <use xlink:href="#wave"></use>
               </svg>
            </div>
            <div class="card__textarea-wrap">
               <p class="card__text">${description}</p>
            </div>
            <div class="card__settings">
               <div class="card__details">
                  <div class="card__dates">
                     <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                           <span class="card__date">${new Date(dueDate).toDateString()}</span>
                           <span class="card__time">${new Date().getHours(dueDate)}.</span>
                        </p>
                     </div>
                  </div>
                  <div class="card__hashtag">
                     <div class="card__hashtag-list">
                     ${Array.from(tags).map((tag) => `<span class="card__hashtag-inner">
                     <span class="card__hashtag-name">
                       #${tag}
                     </span>
                   </span>`).join(``)}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>`);
};

export default class Task extends AbstractComponent {
  constructor(task) {
    super();
    this._task = task;
  }

  getTemplate() {
    return createTaskTemplate(this._task);
  }
  setEditButtonClickHendler(hendler) {
    this.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, hendler);
  }
}
