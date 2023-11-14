<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const add = () => {
	num.value++
}
</script>

<template>
	<div class="freestyle">
		<span class="title">法必帮-专业版</span>
		<span class="sub-title">法律行业专属AI大模型，1.4亿+国内法条案例</span>
		<div class="card-container px-4">
			<div class="card">
				<span class="title">智能咨询</span>
				<span class="sub-title">所有法律问题，回答有理有据，注明来源出处。</span>
			</div>
			<div class="card">
				<span class="title">类案检索</span>
				<span class="sub-title">只需描述案情，即可检索出类案判决。</span>
			</div>
			<div class="card">
				<span class="title">文档录音总结</span>
				<span class="sub-title">高效总结，迅速锁定重点，高效办案。</span>
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
	padding-left: 2rem/* 16px */;
    padding-right: 2rem/* 16px */;

	.card {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		border-width: 1px;
		border-radius: 0.375rem/* 6px */;
		background-color: rgb(241 245 249);

		.title {
			text-align: center;
			margin-top: 1rem/* 16px */;
			margin-bottom: 1rem/* 16px */;
			color: black;
			font-size: 32px;
			font-weight: 700;
		}
		.sub-title {
			text-align: start;
			margin-bottom: 0.25rem/* 4px */;
			font-size: 24px;
			color:black;
		}
	}
}

.btn {
	width: 50px;
	height: 50px;
	border: 1px solid green;
}
</style>
