export class Slider {
   offset = 0

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
      const movingList = this.createMovingElems()
      sliderCont.append(movingList)
      slider.append(sliderCont, arrows)
      return slider
   }

   createMovingElems() {
      this.sliderList = document.createElement('div')
      this.sliderList.classList = 'slider__list'
      this.imgFirst = document.createElement('img')
      this.imgFirst.setAttribute('src', './src/img/img1.jpg')
      this.imgSecond = document.createElement('img')
      this.imgSecond.setAttribute('src', './src/img/img2.jpg')
      this.imgLast = document.createElement('img')
      this.imgLast.setAttribute('src', './src/img/img3.jpg')
      this.strImgs = [this.imgFirst, this.imgSecond, this.imgLast]
      this.strImgs.forEach(img => {
         img.classList.add('slider__img')
         img.style.objectFit = 'cover'
      })
      this.sliderList.append(this.imgFirst, this.imgSecond, this.imgLast)
      return this.sliderList
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
         this.offset += 800
         this.sliderList.style.left = -this.offset + 'px'
         this.sliderList.style.transition = 'all 1s'
         if (this.offset > 1600) {
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
         this.offset -= 800
         this.sliderList.style.left = -this.offset + 'px'
         this.sliderList.style.transition = 'all 1s'
         if (this.offset < 0) {
            this.offset = 1600;
            this.sliderList.style.left = -this.offset + 'px'
         }
      })
      return this.arrowBtnPrev
   }
}