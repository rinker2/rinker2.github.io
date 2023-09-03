setInterval(() => {
	let d = new Date();
	let midnight = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
	midnight = midnight.getTime();
	let now_ms = d.getTime();
	let ms_inday = now_ms - midnight;
	let weekday = d.toLocaleString('ru-RU', {weekday: 'short'});
	let date = d.toLocaleDateString('ru-RU');
	let time = d.toLocaleTimeString('ru-RU');
	dt.textContent = `${weekday} ${date} ${time}`;
	function cabinet(weekday, midnight, ms_inday){
		// Данные
		// Пн
		let name11 = `Языки программирования и компиляторы (Лекция)`;
		n11.textContent = name11;
		let cab11 = 317;
		c11.textContent = cab11;
		let name12 = `Теория вероятности и математическая статистика (Лекция)`;
		n12.textContent = name12;
		let cab12 = 316;
		c12.textContent = cab12;
		let name13 = `Теория вероятности и математическая статистика (Семинар)`;
		n13.textContent = name13;
		let cab13 = 319;
		c13.textContent = cab13;

		// Вт
		let name21 = `Английский язык B1 (Семинар)`;
		n21.textContent = name21;
		let cab21 = 410;
		c21.textContent = cab21;
		let name22 = `Английский язык B1 (Семинар)`;
		n22.textContent = name22;
		let cab22 = 410;
		c22.textContent = cab22;

		// Ср
		let alt = true;
		let name31 = `Комплексный анализ (Лекция)`;
		n31.textContent = name31;
		let cab31 = 319;
		c31.textContent = cab31;
		let name321 = `Комплексный анализ (Семинар)`;
		n321.textContent = name321;
		let cab321 = 319;
		c321.textContent = cab321;
		let name322 = `Физика (Лаборатория)`;
		n322.textContent = name322;
		let cab322 = 319;
		c322.textContent = cab322;
		let name33 = `Языки программирования и компиляторы (Семинар)`;
		n33.textContent = name33;
		let cab33 = 319;
		c33.textContent = cab33;

		// Чт
		// let name41 = `Операционные системы (Лекция)`;
		// n41.textContent = name41;
		// let cab41 = 323;
		// c41.textContent = cab41;
		// let name42 = `Операционные системы (Семинар)`;
		// n42.textContent = name42;
		// let cab42 = 318;
		// c42.textContent = cab42;

		// Пт
		let name51 = `Физика (Лекция)`;
		n51.textContent = name51;
		let cab51 = 318;
		c51.textContent = cab51;
		let name52 = `Анализ алгоритмов и меторы их построения (Лекция)`;
		n52.textContent = name52;
		let cab52 = 320;
		c52.textContent = cab52;
		let name53 = `Анализ алгоритмов и меторы их построения (Семинар)`;
		n53.textContent = name53;
		let cab53 = 318;
		c53.textContent = cab53;

		let end1 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 9, 50);
		end1 = end1.getTime() - midnight;
		let end2 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 30);
		end2 = end2.getTime() - midnight;
		let end3 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 50);
		end3 = end3.getTime() - midnight;
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
		else if (weekday == `вт` && ms_inday < end3) {
			cab = cab23;
			name = name23;
		}
		else if (weekday == `ср` && ms_inday < end1) {
			cab = cab31;
			name = name31;
		}
		else if (weekday == `ср` && ms_inday < end2) {
			if (alt){
				cab = cab321;
				name = name321;
				note = `Верхняя неделя (Alt həftə)`;
			}
			else{
				cab = cab322;
				name = name322;
				note = `Нижняя неделя (Üst həftə)`;
			}
		}
		else if (weekday == `чт` && ms_inday < end1) {
			cab = cab41;
			name = name41;
		}
		else if (weekday == 'чт' && ms_inday < end2) {
			cab = cab42;
			name = name42;
		}
		else if (weekday == 'пт' && ms_inday < end3) {
			name = name53;
			cab = cab53;
		}
		else {
			cab = 0;
			name = ` `;
			note = `Учебный день окончен. Удачи!`;
		}

		let period;
		if (ms_inday < end1 && cab != 0) {
			period = `[8:30 - 9:50]`;
		}
		else if (ms_inday < end2 && cab != 0) {
			period = `[10:00 - 11:20]`;
		}
		else if (ms_inday < end3 && cab != 0) {
			period = `[11:30 - 12:50]`;
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
  
  
