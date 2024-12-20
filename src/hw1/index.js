const STORAGE_PROPABILITY = 1;
const CALC_PROPABILITY = 1;

function getItemsFromDB(){
	if(Math.random() > STORAGE_PROPABILITY){
		return null; // ошибка хранилища
	}

	return [
		{ id: 5, price: 1000 },
		{ id: 7, price: 2000 },
		{ id: 8, price: 4000 }
	]
}

function calcTotal(items){
	if(Math.random() > CALC_PROPABILITY){
		return null; // ошибка рассчёта
	}

	return items.reduce((total, item) => {
		return total + item.price;
	}, 0);
}

function calcYearBalance(total){
	if(Math.random() > CALC_PROPABILITY){
		return null; // ошибка рассчёта
	}

	return Math.floor(total * Math.random());
}

function main(){
	let items = getItemsFromDB();

	if(items === null){
		document.body.innerHTML = `Storage Error: cant get items from DB`;
	}
	else{
		let total = calcTotal(items);
		
		if(total === null){
			document.body.innerHTML = `Calc Error: cant get total of items`;
		}
		else{
			let balance = calcYearBalance(total);

			if(balance === null){
				document.body.innerHTML = `Calc Error: cant get balanse of total`;
			}
			else{
				document.body.innerHTML = `Nice! ${balance}`;
			}
		}
	}
}

main();

/* class CalcError extends Error{};
class StorageError extends Error{}; */