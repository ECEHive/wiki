<script>
  import Fuse from "fuse.js";

  let { pages } = $props();
  let search = $state("");

  let fuse = $derived(
    new Fuse(pages, {
      keys: ["data.title"],
      threshold: 0.3,
    }),
  );

  let searched = $derived(
    search.trim()
      ? fuse.search(search).map((result) => ({
          page: result.item,
        }))
      : pages.map((page) => ({
          page,
          indices: [],
        })),
  );
</script>

<label for="search">Search:</label>
<input
  id="search"
  name="search"
  bind:value={search}
  placeholder="Project Name"
/>

<ul>
  {#each searched as result}
    <li>
      <a href={`/projects/${result.page.id}`}>
        <strong>
          {result.page.data.title}
        </strong>
      </a>
    </li>
  {/each}
</ul>
