<script lang="ts">
	import { area_manifest } from '$lib/data/areas/area_manifest';

	let area: 'Ruins' | 'Warrens' | 'Weald' | 'Cove' = 'Ruins';
	let length: 'Short' | 'Medium' | 'Long' = 'Short';

	$: provisions = area_manifest['cove'].provisions.filter(
		(provision) => provision.length === length
	);
</script>

<h2>Location</h2>

<label>
	<input type="radio" bind:group={area} value="Ruins" />
	Ruins
</label>

<label>
	<input type="radio" bind:group={area} value="Warrens" />
	Warrens
</label>

<label>
	<input type="radio" bind:group={area} value="Weald" />
	Weald
</label>

<label>
	<input type="radio" bind:group={area} value="Cove" />
	Cove
</label>

<h2>Length</h2>

<label>
	<input type="radio" bind:group={length} value="Short" />
	Short
</label>

<label>
	<input type="radio" bind:group={length} value="Medium" />
	Medium
</label>

<label>
	<input type="radio" bind:group={length} value="Long" />
	Long
</label>

<h2>Provisions</h2>

<p>Total cost : {provisions[0].total_cost}</p>

<ul>
	{#each provisions[0].items as { name, quantity, image }}
		<li>
            <div> 
                <span>{name}</span>
                <span>{quantity}</span>
                <img alt="{name} asset" src="">
            </div>
        </li>
	{/each}
</ul>
