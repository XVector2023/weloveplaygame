<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const add = () => {
	num.value++
}
</script>

<template>
	<div class="freestyle">
		<span class="title">法必帮-大众版</span>
			<span class="sub-title">有法律问题就找法必帮</span>
			<div class="card-container py-4">
				<div class="card">
					<span class="card-title">连接信息</span>
					<span class="card-sub-title">让用户找到自己最需要的信息。</span>
				</div>
				<div class="card">
					<span class="card-title">连接律师</span>
					<span class="card-sub-title">基于自身案情，快速匹配合适的律师。</span>
				</div>
				<div class="card">
					<span class="card-title">连接法友</span>
					<span class="card-sub-title">基于自身案情，快速匹配类似用户。</span>
				</div>
			</div>
	</div>
</template>

<style scoped>
.freestyle {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 36px;
	flex-direction: column;

	.title {
		text-align: center;
		margin-top: 1rem/* 16px */;
        margin-bottom: 1rem/* 16px */;
		color: black;
		font-size: 32px;
		font-weight: 700;
	}
	.sub-title {
		text-align: center;
        margin-bottom: 0.25rem/* 4px */;
		font-size: 24px;
		color:black;
	}
}

.card-container{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 1rem/* 8px */;
	padding-top: 1rem/* 16px */;
    padding-bottom: 1rem/* 16px */;
	padding-left: 2rem/* 16px */;
    padding-right: 2rem/* 16px */;

	.card {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		padding-top: 1rem/* 16px */;
    	padding-bottom: 1rem/* 16px */;
		padding-left: 2rem/* 16px */;
    	padding-right: 2rem/* 16px */;
		border-width: 1px;
		border-radius: 0.375rem/* 6px */;
		background-color: rgb(241 245 249);

		.card-title {
			text-align: center;
			margin-top: 1rem/* 16px */;
			margin-bottom: 1rem/* 16px */;
			color: black;
			font-size: 24px;
			font-weight: 700;
		}
		.card-sub-title {
			text-align: start;
			margin-bottom: 0.25rem/* 4px */;
			font-size: 20px;
			color:black;
		}
	}
}
</style>
