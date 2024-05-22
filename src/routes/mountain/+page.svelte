<script lang="ts">
  import App from '$lib/components/App.svelte'
  import { quoteOptions } from '$lib/stores.js';
  
  // load Quote data from server and save to store
  export let data;
  const quotes: Quote[] = data.values.map((val : string[]) => <Quote>{ author: val[0], material: val[1], text: val[3] });
  quoteOptions.set(quotes);
</script>

<App />