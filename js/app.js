gsap.registerPlugin(ScrollTrigger, ScrollSmoother) /*реєстрація розширень ScrollTrigger та ScrollSmoother для використання в GSAP*/

if (ScrollTrigger.isTouch !== 1) { /*перевірка, чи пристрій має сенсорний екран з метою визначення, чи застосовувати плавний ефект прокрутки*/

	ScrollSmoother.create({/*створення плавної прокрутки*/
		wrapper: '.wrapper',/*обгортка*/
		content: '.content',/*вміст*/
		smooth: 1.5,/*плавність*/
		effects: true/*ефекти*/
	})

	gsap.fromTo('.diva-section', { opacity: 1 }, {/*анімація, яка відбувається під час прокрутки*/
		opacity: 0,/*прозорість*/
		scrollTrigger: {/*тригер прокручування*/
			trigger: '.diva-section',/*тригер*/
			start: 'center',/*початок*/
			end: '820',/*кінець*/
			scrub: true/*повернення попереднього значення*/
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')/*вибір всіх елементів за класом зі списку лівого контенту галереї*/

	itemsL.forEach(item => {/*цикл, що застосовує анімацію до кожного елемента знайденого в лівій частині галереї*/
		gsap.fromTo(item, { opacity: 0, x: -50 }, {/*анімація, яка відбувається під час прокрутки*/
			opacity: 1, x: 0,/*прозорість*/
			scrollTrigger: {/*тригер прокручування*/
				trigger: item,/*тригер*/
				start: '-850',/*початок*/
				end: '-100',/*кінець*/
				scrub: true/*повернення попереднього значення*/
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')/*Вибір всіх елементів за класом зі списку правого контенту галереї*/

	itemsR.forEach(item => {/*цикл, що застосовує анімацію до кожного елемента знайденого в правій частині галереї*/
		gsap.fromTo(item, { opacity: 0, x: 50 }, {/*анімація, яка відбувається під час прокрутки*/
			opacity: 1, x: 0,/*прозорість*/
			scrollTrigger: {/*тригер прокручування*/
				trigger: item,/*тригер*/
				start: '-750',/*початок*/
				end: 'top',/*кінець*/
				scrub: true/*повернення попереднього значення*/
			}
		})
	})
}
