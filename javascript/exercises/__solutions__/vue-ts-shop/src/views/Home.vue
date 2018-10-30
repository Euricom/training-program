<template>
  <div class="home">
      <h3>Panel View</h3>
      {{person.name}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {
  person: any = [];

  constructor() {
    super();
  }

  mounted() {
    this.person.name = 'luc';
    this.person = {
      name: 'peter',
    };
  }
}

/*
{
  data() {
    return {
      person: {}
    }
  }
}

*/
</script>
