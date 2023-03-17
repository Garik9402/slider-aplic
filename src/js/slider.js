export class Slider {
   offset = 0
   constructor() {
      this.images = document.querySelectorAll('.slider__img')
      this.sliderList = document.createElement('div')
      this.sliderList.classList = 'slider__list'
      this.current = 0
   }
   init() {
      const app = document.getElementById('app')
      app.append(this.createSlider())
   }

   createSlider() {
      const slider = document.createElement('div')
      slider.classList = 'slider'
      const sliderCont = document.createElement('div')
      sliderCont.classList = 'slider__cont'
      const arrows = this.createArrowsCont();
      const slList = this.sliderList
      this.images.forEach(el => {
         slList.append(el)
      })
      sliderCont.append(slList)
      slider.append(sliderCont, arrows)
      return slider
   }

   createMovingElems() {

   }



   createArrowsCont() {
      const arrows = document.createElement('div')
      arrows.classList = 'slider__arrows'
      let btnPrev = this.createBtnPrev()
      let btnNext = this.createBtnNext()
      arrows.append(btnPrev, btnNext)
      this.prevFrame()
      this.nextFrame()
      return arrows

   }
   createBtnPrev() {
      this.arrowBtnPrev = document.createElement('button')
      this.arrowBtnPrev.classList = 'btn btn--prev'
      return this.arrowBtnPrev
   }

   prevFrame() {
      this.arrowBtnNext.addEventListener('click', () => {
         this.offset += this.images[0].clientWidth
         this.sliderList.style.left = -this.offset + 'px'
         this.sliderList.style.transition = 'all 1s'
         let calcRes = this.images[0].clientWidth * this.images.length - this.images[0].clientWidth
         if (this.offset > calcRes) {
            this.offset = 0;
            this.sliderList.style.left = this.offset + 'px'
         }
      })
      return this.arrowBtnNext
   }

   createBtnNext() {
      this.arrowBtnNext = document.createElement('button')
      this.arrowBtnNext.classList = 'btn btn--next'
      return this.arrowBtnNext
   }


   nextFrame() {
      this.arrowBtnPrev.addEventListener('click', () => {
         this.offset -= this.images[0].clientWidth
         this.sliderList.style.left = -this.offset + 'px'
         this.sliderList.style.transition = 'all 1s'
         if (this.offset < 0) {
            let calc = this.images[0].clientWidth * this.images.length - this.images[0].clientWidth
            this.offset = calc;
            this.sliderList.style.left = -this.offset + 'px'
         }
      })
      return this.arrowBtnPrev
   }
}