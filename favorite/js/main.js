import { BASE_API_URL } from "./constants.js";
import { 
  createMovieRecord, 
  deleteMovieRecord, 
  getAllMovieRecords, 
  updateMovieRecord, 
  uploadPoster 
} from "./api.js"

const openPopUp = document.querySelector('.open-pop-up');
const closePopUp = document.querySelector('.close-pop-up');
const savePopUp = document.querySelector('.save-pop-up');
const popUp = document.querySelector('.pop-up');
const whatToWatch = document.querySelector('.what-to-watch');

const closeEditCard = document.querySelector('.close-pop-up_edit');
const editPopUp = document.querySelector('.edit-wrapper');

const movieRecordListElement = document.querySelector('.movies');
const overlayContainer = document.querySelector(".overlay-container");

const searchField = document.querySelector(".search-line__search");

let isAppInit = false;


function arrowUp() {
  let t;
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('arrowUp()',20);
	} else clearTimeout(t);
	return false;
}

let currentYear = (new Date()).getFullYear();
let midFooterInfo = document.querySelector('p.copy').innerHTML =`&copy; ${currentYear}  ООО “Фаворит”`;

class Dialog {
  constructor(actionClass, addClass, showClass) {
    this.actionClass = actionClass;
    this.addClass = addClass;
    this.showClass = showClass;
  }

  openPopUp() { 
      this.actionClass.addEventListener('click', (e) => {
          e.preventDefault();
          this.showClass.classList.add(this.addClass);
          })
      }

  closePopUp() {
      this.actionClass.addEventListener('click', (e) => {
          e.preventDefault();
          this.showClass.classList.remove(this.addClass);
          let form = document.forms;
          for(let i = 0; i < form.length; i++)
          form[i].reset();
          })
      }
};

const dialogOpen = new Dialog(openPopUp, 'active', popUp);
dialogOpen.openPopUp();
const dialogClose = new Dialog(closePopUp, 'active', popUp);
dialogClose.closePopUp();

function formDataToObject(formData) {
  const result = {};
  
  formData.forEach((value, key) => {
    result[ key ] = value;
  });
  return result;
}

function reloadMovieRecord() {
  return getAllMovieRecords()
  .then((response) => response.json())
  .then((movieRecords) => {
    movieRecordListElement.innerHTML = "";

    for (const movieRecord of movieRecords) {
      movieRecordListElement.innerHTML += createMovieRecordItem(movieRecord);
    }

    // /**@type {Array<HTMLDiveElement>} */
    const moviePosterCards = Array.from(
      movieRecordListElement.querySelectorAll("div.card__film-preview_wrapper")
    );

    for (const card of moviePosterCards) {
      const movieId = parseInt(card.dataset.id);
      card.addEventListener('click', () => {
        const movieRecord = movieRecords.find((item) => item.id === movieId);
        
        if (typeof movieRecord === "undefined") {
          throw new Error(`Movie record with id="${ movieId }" not defined`);
        }

        openMovieCard(overlayContainer, movieRecord);
      });
      }

    const likeButtons = Array.from(movieRecordListElement.querySelectorAll(".heart__svg"));
      
      for (let likeButton of likeButtons) {
        const movieRecordId = parseInt(likeButton.dataset.id, 10);
        let movieRecord = movieRecords.find(item => item.id === movieRecordId);
      
        likeButton.addEventListener('click', () => {
          likeButton.classList.toggle("activity__heart-liked")
          
          updateMovieRecord(movieRecordId, {
            ...movieRecord,
            liked: !movieRecord.liked
          })
            .then((result) => movieRecord = result)
            .then(() => reloadMovieRecord())
            .catch((error) => {
              likeButton.classList.toggle("activity__heart-liked")
              console.error(error)
            })
        })
      }

      const sawButtons = Array.from(movieRecordListElement.querySelectorAll(".activity__saw"))
      for (let sawButton of sawButtons) {
        const movieRecordId = parseInt(sawButton.dataset.id, 10);
        let movieRecord = movieRecords.find((item) => item.id === movieRecordId);
        
        sawButton.addEventListener("click", () => {
          sawButton.classList.toggle("activity__saw-done")
          
          updateMovieRecord(movieRecordId, {
            ...movieRecord,
            viewed: !movieRecord.viewed
          })
            .then((result) => movieRecord = result)
            .then(() => reloadMovieRecord())
            .catch((error) => {
              sawButton.classList.toggle("activity__saw-done")
              console.error(error)
            })
        })
      }
      
      if (!isAppInit) {
        const url = new URL(location.href);
        const movieRecordIdAsString = url.searchParams.get("id");

        if (typeof movieRecordIdAsString === "string") {
          const movieRecordId = parseInt(movieRecordIdAsString, 10)

          if(!Number.isNaN(movieRecordId)) {
            const movieRecord = movieRecords.find(
              (item) => item.id === movieRecordId
            )

            if (typeof movieRecord !== "undefined") {
              openMovieCard(overlayContainer, movieRecord)
            }
          }
        }
      }
      isAppInit = true;
    });
  };

function createMovieRecordItem(movieRecord) {
  return `<li>
  <article class="card">
    <div class="card__film-preview_wrapper" data-id="${ movieRecord.id }">
    <img class="card__film-preview" src="${ BASE_API_URL + movieRecord.poster }" alt="${ movieRecord.name }">
    </div>
    <p class="card__grey-text card__grey-text_year">${ movieRecord.year }</p>
    <p class="card__films-name">${ movieRecord.name }</p>
    <p class="card__grey-text">${ movieRecord.genres }</p>
    <div class="card__activity activity">
      <button type="button" class="activity__heart">
        <svg data-id=" ${ movieRecord.id } " class="heart__svg ${movieRecord.liked ? "activity__heart-liked" : ""} " width="18" height="15" viewBox="0 0 20 18" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.34255 3.7779C1.5687 3.23194 1.90017 2.73586 2.31804 2.31799C2.7359 1.90012 3.23198 1.56865 3.77795 1.3425C4.32392 1.11635 4.90909 0.999954 5.50004 0.999954C6.09099 0.999954 6.67616 1.11635 7.22213 1.3425C7.7681 1.56865 8.26417 1.90012 8.68204 2.31799L10 3.63599L11.318 2.31799C12.162 1.47407 13.3066 0.999966 14.5 0.999966C15.6935 0.999966 16.8381 1.47407 17.682 2.31799C18.526 3.16191 19.0001 4.30651 19.0001 5.49999C19.0001 6.69347 18.526 7.83807 17.682 8.68199L10 16.364L2.31804 8.68199C1.90017 8.26413 1.5687 7.76805 1.34255 7.22208C1.1164 6.67611 1 6.09095 1 5.49999C1 4.90904 1.1164 4.32387 1.34255 3.7779Z"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button class="activity__saw ${movieRecord.viewed ? "activity__saw-done" : ""} " data-id="${ movieRecord.id }">
        <p>Просмотрено</p>
        <svg class="svg-mark-saw" width="20" height="16" viewBox="0 0 20 16" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2.125 9.125L6.625 13.625L17.875 2.375" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

  </article>
</li>`
};

function openMovieCard(container, movieRecord) {
  let url = new URL(location.href);
  url.searchParams.set("id", movieRecord.id);
  history.pushState({}, "", url);
  let localMovieRecord = movieRecord;

  container.innerHTML = `<div class="movies-wrapper_hidden active" id="${ localMovieRecord.id }">
  <div class="container_hidden">
    <article class="card_hidden">
    <button type="button" class="card__button_hidden">&times;</button>
      <div class="card__film-preview_hidden">
        <img class="img__film-preview_hidden" src="${ BASE_API_URL + localMovieRecord.poster }" alt="${ localMovieRecord.name }">
      </div>
      <p class="card__grey-text_hidden card__grey-text_year">${ localMovieRecord.year }</p>
      <p class="card__films-name_hidden">${ localMovieRecord.name }</p>
      <p class="card__grey-text_hidden">${ localMovieRecord.genres }</p>
      <p class="card__description_hidden">${ localMovieRecord.description }</p>
      <div class="activity_hidden">
        <button class=" activity_pencil">
          <svg class="activity__pencil_hidden" width="30" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.232 5.23199L18.768 8.76799M16.732 3.73199C17.2009 3.26309 17.8369 2.99966 18.5 2.99966C19.1631 2.99966 19.7991 3.26309 20.268 3.73199C20.7369 4.2009 21.0003 4.83687 21.0003 5.49999C21.0003 6.16312 20.7369 6.79909 20.268 7.26799L6.5 21.036H3V17.464L16.732 3.73199Z"
              stroke="#34343E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" class="activity__heart">
        <svg data-id=" ${ movieRecord.id } " class="heart__svg ${movieRecord.liked ? "activity__heart-liked" : ""} " width="18" height="15" viewBox="0 0 20 18" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.34255 3.7779C1.5687 3.23194 1.90017 2.73586 2.31804 2.31799C2.7359 1.90012 3.23198 1.56865 3.77795 1.3425C4.32392 1.11635 4.90909 0.999954 5.50004 0.999954C6.09099 0.999954 6.67616 1.11635 7.22213 1.3425C7.7681 1.56865 8.26417 1.90012 8.68204 2.31799L10 3.63599L11.318 2.31799C12.162 1.47407 13.3066 0.999966 14.5 0.999966C15.6935 0.999966 16.8381 1.47407 17.682 2.31799C18.526 3.16191 19.0001 4.30651 19.0001 5.49999C19.0001 6.69347 18.526 7.83807 17.682 8.68199L10 16.364L2.31804 8.68199C1.90017 8.26413 1.5687 7.76805 1.34255 7.22208C1.1164 6.67611 1 6.09095 1 5.49999C1 4.90904 1.1164 4.32387 1.34255 3.7779Z"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button class="activity__saw ${movieRecord.viewed ? "activity__saw-done" : ""} activity__saw_hidden" data-id="${ movieRecord.id }">
      <p>Просмотрено</p>
      <svg class="svg-mark-saw" width="20" height="16" viewBox="0 0 20 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2.125 9.125L6.625 13.625L17.875 2.375" stroke-width="3"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
      </div>
  </div>
  </article>
  </div>`

  container
  .querySelector(".card__button_hidden")
  .addEventListener('click', () => {
    url.searchParams.delete("id");
    history.pushState({}, "", url)

    container.innerHTML = "";
  })

  container
  .querySelector(".activity_pencil")
  .addEventListener("click", () => openEditMovieCard(container, localMovieRecord));

  const likeButton = container.querySelector(".heart__svg");
  const watchButton = container.querySelector(".activity__saw");

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle("activity__heart-liked");
    updateMovieRecord(localMovieRecord.id, {
      ...localMovieRecord,
      liked: !localMovieRecord.liked
    })
    .then((value) => localMovieRecord = value)
    .then(() => reloadMovieRecord())
    .catch(() => likeButton.classList.toggle("activity__heart-liked"));
  });

  watchButton.addEventListener('click', () => {
    watchButton.classList.toggle("activity__saw-done");
    updateMovieRecord(localMovieRecord.id, {
      ...localMovieRecord,
      viewed: !localMovieRecord.viewed
    })
    .then((value) => localMovieRecord = value)
    .then(() => reloadMovieRecord())
    .catch(() => watchButton.classList.toggle("activity__saw-done"));
  });
}

function openEditMovieCard(container, movieRecord) {
  container.innerHTML = `<div class="edit-wrapper">
    <div class="pop-up pop-up-edit active" id="pop-up-edit">
    <div class="pop-up__container pop-up-edit__container">
      <div class="pop-up__body pop-up-edit__body">
        <p class="pop-up__header pop-up-edit__header">Редактирование<br>закладки</p>
        <form action="" class="pop-up__form pop-up-edit__form" enctype="multipart/form-data" method="post"
          name="formEdit">
          <p class="form__sign">Название</p>
          <input name="name" type="text" placeholder="Type something here..." class="pop-up__input pop-up-edit__input">
          <p class="form__sign">Год выпуска</p>
          <input name="year" type="text" placeholder="Type something here..." class="pop-up__input pop-up-edit__input">
          <div class="form__poster_wrapper">
            <p class="form__sign">Постер</p>
            <input name="poster" type="file" placeholder="file not selected" accept="image/*"
            class="pop-up__input pop-up-edit__input pop-up-edit__input_poster">
          </div>
          <p class="form__sign">Жанры</p>
          <input name="genres" type="text" placeholder="Type something here..." class="pop-up__input">
          <p class="form__sign">Описание</p>
          <textarea name="description" placeholder="Type something here..." class="pop-up__input"></textarea>
          <p class="form__sign">Удалить закладку</p>
          <button type="button" class="pop-up__button-select pop-up-edit__button-select_delete">Удалить</button>
          <div class="pop-up__buttons">
            <button type="button" class="pop-up__button-select close-pop-up close-pop-up_edit">Отменить</button>
            <button type="submit" class="pop-up__button-select save-pop-up">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    <div>`
  
  let url = new URL(location.href);
  url.searchParams.set("id", movieRecord.id);
  history.pushState({}, "", url)

  /** @type {HTMLFormElement} */
  const form = container.querySelector("form.pop-up-edit__form");

  form.elements.namedItem("name").value = movieRecord.name;
  form.elements.namedItem("year").value = movieRecord.year;
  form.elements.namedItem("genres").value = movieRecord.genres;
  form.elements.namedItem("description").value = movieRecord.description;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formValue = formDataToObject(formData);
    console.log(formValue);

    if (formValue.poster.size > 0) {
      uploadPoster(formValue.poster)
      .then((posterUrl) => {
        return updateMovieRecord(movieRecord.id, {
          ...movieRecord,
          ...formValue,
          poster: posterUrl
        })
      })
      .then(() => {
        container.innerHTML = "";
      })
      .then(() => {
        reloadMovieRecord(container);
      })
      .catch((error) => {
        container.innerHTML = "";
        console.error(error);
      })
      } else {

      updateMovieRecord(movieRecord.id, {
        ...movieRecord,
        ...formValue,
        poster: movieRecord.poster
      })
      .then(() => {
        container.innerHTML = "";
      })
      .then(() => {
        reloadMovieRecord(container);
      })
      .catch((error) => {
        container.innerHTML = "";
        console.error(error);
      })
      }
  })

  form.querySelector(".close-pop-up_edit").addEventListener("click", () => {
    url.searchParams.delete("id");
    history.pushState({}, "", url)

    container.innerHTML = "";
  });


  form.querySelector(".pop-up-edit__button-select_delete").addEventListener('click', () => {
    deleteMovieRecord(movieRecord.id)
      .then(() => {
        container.innerHTML = "";
      })
      .then(() => {
        reloadMovieRecord(container);
      })
      .catch((error) => {
        container.innerHTML = "";
        console.error(error);
      })
  })
};

function findMovieCardByName(e) {

  let localMovieRecord = e;
  let searchInput = document.getElementById("searchInput").value.toLowerCase().trim(); //поисковый запрос в нижнем регистре

  let result = localMovieRecord.filter((item) => 
    item.name.toLowerCase().includes(`${searchInput}`))
    return result;

}

function openFinishMessage() {
  overlayContainer.innerHTML = `<div class="pop-up pop-up_finish active">
  <div class="pop-up__container">
    <div class="pop-up__body pop-up__body_finish">
    <span class="pop-up_finish">Вы посмотрели все фильмы. Отличная работа!</span>
    <img src="./images/good.png" alt="good job" class="pop-up_good">
    <button type="button" class="card__button_hidden">&times;</button>
    </div>
  </div>
</div>`

  overlayContainer
  .querySelector(".card__button_hidden")
  .addEventListener('click', () => {

    overlayContainer.innerHTML = "";
  })

  return overlayContainer;
}

function showRandomMovie(e) {
  let localMovieRecord = e;
  let viewedMovieCard = localMovieRecord.filter((item) => 
  item.viewed === false);
  
  if (viewedMovieCard.length > 0) {
    let randomCard = Math.floor(Math.random() * viewedMovieCard.length);
    let randomCardValue = viewedMovieCard[randomCard].id;
    localMovieRecord = localMovieRecord.find((item) => item.id === randomCardValue);
    return openMovieCard(overlayContainer, localMovieRecord);

  } else {
    openFinishMessage();
  }
}

searchField
.addEventListener('input', function () {
  
  getAllMovieRecords()
  .then((response) => response.json())
  .then((e) => findMovieCardByName(e))
  .then((result) => {
    movieRecordListElement.innerHTML = "";
    for (const item of result) {
      movieRecordListElement.innerHTML += createMovieRecordItem(item);
      }
       /**@type {Array<HTMLDiveElement>} */
    const moviePosterCards = Array.from(
      movieRecordListElement.querySelectorAll("div.card__film-preview_wrapper")
    );
    for (const card of moviePosterCards) {
      const movieId = parseInt(card.dataset.id);
      card.addEventListener('click', () => {
        const movieRecord = result.find((item) => item.id === movieId);
        
        if (typeof movieRecord === "undefined") {
          throw new Error(`Movie record with id="${ movieId }" not defined`);
        }

        openMovieCard(overlayContainer, movieRecord);
      });
  };
  });
})

whatToWatch
.addEventListener('click', () => {
  getAllMovieRecords()
  .then((response) => response.json())
  .then((e) => showRandomMovie(e))
})

savePopUp
.addEventListener("click", () => {
  const form = document.forms.namedItem("formCreate");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
    const formResult = {
    ...formDataToObject(formData),
    favorite: false,
    viewed: false
    };

    uploadPoster(formResult.poster)
      .then((posterUrl) => {
        return createMovieRecord({
          ...formResult,
          poster: posterUrl
        })
      })
      event.target.reset();
  } , { once: true });

  popUp.classList.remove('active');
  }, { once: true });

  reloadMovieRecord();
