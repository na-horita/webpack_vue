<template>
  <div>
    <h2>{{message}}</h2>
    <p>{{count}}</p>
    <p>
      <button @click="onClick">Add +1</button>
    </p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        count: 0
      }
    },
    props: ['message'],

    methods: {
      onClick() {
        console.log('クリックされました');
        this.count = this.count + 1;
      }
    }
  };

    function oddCheck(value) {
      return new Promise(function (resolve, reject) {
        if ((value % 2) == 1) {
          resolve('奇数です');
        } else {
          reject('奇数ではないです');
        }
      });
    }

    oddCheck(202).then(function (value) {
      console.log(value);
    }).catch(function (error) {
      console.log(error);
    });
</script>

<style scoped>
  h2 {
    font-weight: normal;
    font-size: 1.25rem;
  }
</style>
