<template>
<div>
  <div class="from">



  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="img" v-for="g in imageList" :key="g.imgSrc">

          <img :src="g.isExternal ? g.imgSrc : getImgUrl(g.imgSrc)"
                @click="showLightbox(image.imgSrc)"/>
          
          <div class="desc"> 
            <template v-if="g.showDescription">
              {{g.description}}
              <button @click="g.showDescription = false" class="show-desc">Show less</button>
            </template>
            <template v-else>
              <button @click="g.showDescription = true" class="show-desc">Show more</button>
            </template>
        </div>

      </div>
    </div>

    <transition-group imgSrc="thumbnailfade" tag="div">
      <img v-for="thumb in filteredImages" 
          :key="thumb.id" 
          @click="showLightbox(thumb.imgSrc)"  
          :src="thumbnailDir + thumb.imgSrc" />
    </transition-group>

      <lightbox id="mylightbox" 
      ref="lightbox"
      :images="images"
      :directory="thumbnailDir"
      :timeoutDuration="5000"
      ></lightbox>
  </div>
</div>
</template>

<script> 


export default {
    name: 'Home',

    data() {
        return{ 
          img: 'https://www.silistra.bg/images/zabelejitelnosti/15.jpg',
          imageList: [
            { imgSrc: 'img_5terre.jpg', showDescription: false, description: 'Some lovely village by the sea.'   },
            { imgSrc: 'img_forest.jpg', showDescription: false, description: 'Deep dark forest. '  },
            { imgSrc: 'img_lights.jpg', showDescription: false, description: 'There`s some holes in this house. '  },
            { imgSrc: 'img_mountains.jpg', showDescription: false, description: 'Better than the dam where I got a flat tyre. '  }
          ],
            thumbnailDir: '../assets',
            images: imageList,
            image: '',
            imgSrc: ''

        }
    },
    // props: [
    //   'getImgUrl',
    //   'setImgSource', 
    //   'setImgDescription',
    //   'addImage'
    // ],
    methods: {
        showLightbox: function(imageName) {
            this.$refs.lightbox.show(imageName);
        },
        getImgUrl(img) {
            var images = require.context('../assets/', false, /\.jpg$/)
            return images('./' + img)
        },
        setImgSource(e){
            const value = e.target.value;
            this.imgSrc = value;
        }, 
        setImgDescription(e){
            const value = e.target.value;
            this.imgDescription = value;
        },
        addImage(){
            this.gallery.push({
                imgSrc: this.imgSrc,
                isExternal: true,
                description: this.imgDescription,
                showDescription: false,
            });
            this.imgSrc = ''
            this.imgDescription = ''

        }
      },
    computed: {
    filteredImages: function() {
      if (this.galleryFilter === 'all') {
        return this.images;
      } else {
        return this.images.filter(image => image.filter === this.galleryFilter);
      }
    }
  }
}
    var imageList = [
        { imgSrc: 'img_5terre.jpg', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '  },
        { imgSrc: 'img_forest.jpg', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
        { imgSrc: 'img_lights.jpg', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
        { imgSrc: 'img_mountains.jpg', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' }
    ];
</script>

<style scoped>
  .img:hover {
    border: 1px solid #777;
  }
  .img {
    display: flex;
    width: 33%;
    flex-direction: row; 
    flex-wrap: wrap;
    /* order: 3; */
  } 
  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
    transition: all 0.4s ease;
    border: 1px solid #cccccc;
    padding-top: 20px;
    padding-bottom: 40px;
    flex: auto;
  }
  .thumbnailfade-leave-active,
  .thumbnailfade-enter-active {
    transition: all 0.4s ease;
  }
  .thumbnailfade-enter-active {
    transition-delay: 0.4s;
  }
  .thumbnailfade-enter,
  .thumbnailfade-leave-to {
    opacity: 0;
  }
</style>