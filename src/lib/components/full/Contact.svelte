<script lang="ts">
	import { onMount } from 'svelte';

	import Axios from 'axios';
	
	import contactBackup from '$lib/data/contact.json';
	import { APIURL } from '$lib/data/common';
	import Loading from '$lib/components/common/Loading.svelte';
	
	let contactData: any = contactBackup;

	let loaded = false;
	
	onMount(async () => {
		await Axios.get(APIURL + "/data/contact")
		.then((res: any) => {
			contactData = res.data;
			loaded = true;
		})
		.catch(() => {
			contactData = contactBackup;
			loaded = true;
		});
	});
</script>

<div class="h-full min-h-screen w-full flex flex-col items-center justify-center">
	<Loading loading={loaded} />
	
	<div class="w-3/4 h-full mb-72 flex flex-col items-start gap-4 sm:w-7/12 lg:w-2/3 xl:w-1/2">
		<h1 class="font-ms font-bold text-4xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase md:text-5xl xl:text-6xl">
			{contactData.header}
		</h1>
		<h1 class="font-ms font-bold text-2xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase md:text-3xl xl:text-4xl">
			{contactData.subheader}
		</h1>
		<p class="w-5/6 font-op font-medium text-lg text-grayWhite md:w-2/3">
			{contactData.description}
		</p>
		<div class="grid grid-cols-4 gap-3 text-[#fff]">
			{#each contactData.contacts as contact}
				<a href={contact.href} class="flex justify-center items-center text-grayWhite transition-all hover:text-YellowGreen">
					{@html contact.icon}
				</a>
			{/each}
		</div>
	</div>
</div>
