function getItemsFromDB(_partnerId, onDone){
	setTimeout(() => {
		onDone([
			{ id: 5, price: 1000 },
			{ id: 7, price: 2000 },
			{ id: 8, price: 4000 }
		]);
	}, Math.random() * 300 + 200);
}


function main(){
	let i = 0;
	let items1;
	let items2;
	let items3;

	getItemsFromDB('shop1', data => {
		i++;
		items1 = data;
		
		if(i >= 3){
			onResult();
		}
	})

	getItemsFromDB('shop2', data => {
		i++;
		items2 = data;

		if(i >= 3){
			onResult();
		}
	})

	getItemsFromDB('shop3', data => {
		i++;
		items3 = data;

		if(i >= 3){
			onResult();
		}
	})

	function onResult(){
		console.log(items1, items2, items3);
	}
}

main();