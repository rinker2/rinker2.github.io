// Данные
// Пн
let name11 = `Методы оптимизации (Лекция)`;
let cab11 = 115;
n11.textContent = name11;
c11.textContent = cab11;

let name12 = `Методы оптимизации (Семинар)`;
let cab12 = 327;
n12.textContent = name12;
c12.textContent = cab12;

let name13 = `Веб-технологии (Лекция)`;
let cab13 = 323;
n13.textContent = name13;
c13.textContent = cab13;

// Вт
let name21 = `Компьютерная графика (Лекция)`;
let cab21 = 32;
n21.textContent = name21;
c21.textContent = cab21;

let name22 = `Компьютерная графика (Семинар)`;
let cab22 = 32;
n22.textContent = name22;
c22.textContent = cab22;

// Ср
let name31 = `Криптография (Лекция)`;
let cab31 = 418;
n31.textContent = name31;
c31.textContent = cab31;

let name32 = `Веб-технологии (Семинар)`;
let cab32 = 331;
n32.textContent = name32;
c32.textContent = cab32;

// Чт
let name41 = `Безопасное программирование (Лекция)`;
let cab41 = 323;
n41.textContent = name41;
c41.textContent = cab41;

let name42 = `Безопасное программирование (Семинар)`;
let cab42 = 324;
n42.textContent = name42;
c42.textContent = cab42;

let name43 = `Криптография (Семинар)`;
let cab43 = 316;
n43.textContent = name43;
c43.textContent = cab43;



setInterval(() => {
	let d = new Date();
	// d = new Date(d.getFullYear(), d.getMonth(), 19, 19, 0, 0);
	let midnight = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
	midnight = midnight.getTime();
	let now_ms = d.getTime();
	let ms_inday = now_ms - midnight;
	let weekday = d.toLocaleString('ru-RU', {weekday: 'short'});
	let date = d.toLocaleDateString('ru-RU');
	let time = d.toLocaleTimeString('ru-RU');
	dt.textContent = `${weekday} ${date} ${time}`;
	
	let end1 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 15, 20);
	end1 = end1.getTime() - midnight;
	let end2 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 16, 50);
	end2 = end2.getTime() - midnight;
	let end3 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 18, 20);
	end3 = end3.getTime() - midnight;
	function cabinet(weekday, midnight, ms_inday){
		// Применение данных
		let cab;
		let name;
		let note;
		if (weekday == `пн` && ms_inday < end1) {
			cab = cab11;
			name = name11
		}
		else if (weekday == `пн` && ms_inday < end2) {
			cab = cab12;
			name = name12;
		}
		else if (weekday == `пн` && ms_inday < end3) {
			cab = cab13;
			name = name13;
		}
		else if (weekday == `вт` && ms_inday < end1) {
			cab = cab21;
			name = name21;
		}
		else if (weekday == `вт` && ms_inday < end2) {
			cab = cab22;
			name = name22;
		}
		else if (weekday == `ср` && ms_inday < end1) {
			cab = cab31;
			name = name31;
		}
		else if (weekday == `ср` && ms_inday < end2) {
			cab = cab32;
			name = name32;
		}
		else if (weekday == 'чт' && ms_inday < end1) {
			name = name41;
			cab = cab41;
		}
		else if (weekday == 'чт' && ms_inday < end2) {
			name = name42;
			cab = cab42;
		}
		else if (weekday == 'чт' && ms_inday < end3) {
			name = name43;
			cab = cab43;
		}
		else {
			cab = 0;
			name = ` `;
			note = `Учебный день окончен. Удачи!`;
		}

		let period;
		if (ms_inday < end1 && cab != 0) {
			period = `[14:00 - 15:20]`;
		}
		else if (ms_inday < end2 && cab != 0) {
			period = `[15:30 - 16:50]`;
		}
		else if (ms_inday < end3 && cab != 0) {
			period = `[17:00 - 18:20]`;
		}
		else {
			period = ` `;
		}
		return [cab, name, period, note];
	}
	cab.textContent = cabinet(weekday, midnight, ms_inday)[0];
	subject.textContent = cabinet(weekday, midnight, ms_inday)[1];
	period.textContent = cabinet(weekday, midnight, ms_inday)[2];
	note.textContent = cabinet(weekday, midnight, ms_inday)[3];
})


// Открытие модального окна "Что это?"
document.getElementById("open-about-btn").addEventListener("click", function(){
	document.getElementById("about-modal").classList.add("open")
  })
  // Действие кнопки "Закрыть"
  document.getElementById("close-about-btn").addEventListener("click", function(){
	document.getElementById("about-modal").classList.remove("open")
  })
  // Закрыть модальное окно "Что это?" при клике вне его
  document.querySelector("#about-modal .about-window").addEventListener('click', event => {
	event._isClickInModal = true;
  });
  document.getElementById("about-modal").addEventListener('click', event => {
	if (event._isClickInModal) return;
	event.currentTarget.classList.remove('open');
  })
  // Закрыть модальное окно "Что это?" при нажатии на Esc
  window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
	  document.getElementById("about-modal").classList.remove("open")
	}
  });
  
  
  // Открытие модального окна "Расписание"
  document.getElementById("open-schedule-btn").addEventListener("click", function(){
	document.getElementById("schedule-modal").classList.add("open")
  })
  // Действие кнопки "Закрыть"
  document.getElementById("close-schedule-btn").addEventListener("click", function(){
	document.getElementById("schedule-modal").classList.remove("open")
  })
  // Закрыть модальное окно при клике вне его
  document.querySelector("#schedule-modal .schedule-window").addEventListener('click', event => {
	event._isClickInModal = true;
  });
  document.getElementById("schedule-modal").addEventListener('click', event => {
	if (event._isClickInModal) return;
	event.currentTarget.classList.remove('open');
  })
  // Закрыть модальное окно "Расписание" при нажатии на Esc
  window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
	  document.getElementById("schedule-modal").classList.remove("open")
	}
  });
  
  
