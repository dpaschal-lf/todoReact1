

class TodoModel {
	constructor(){
		this.data = null;
		this.loadData();
	}
	loadData(){
		console.log('data loaded');
		if(localStorage.todoData){
			try{
				this.data = JSON.parse(localStorage.todoData);
			} catch(error){
				console.error('invalid data parse',error);
				this.data = {};
			}
		} else {
			this.data = {};
		}
	}
	saveData(){
		localStorage.todoData = JSON.stringify(this.data);
	}
	getRecordList(){
		return this.data;
	}
	getSingleRecord(id){
		if(this.data[id]){
			return this.data[id];
		} else {
			return false;
		}
	}
	addRecord(dataRecord){
		const newID = (new Date()).getTime();
		const recordSet = {
			title: 'default title',
			description: 'default description',
			dueDate: newID+3600*24*7, 
			complete: false
		}
		for(let field in recordSet){
			if(!dataRecord[field]){
				dataRecord[field] = recordSet[field];
			}
		}
		dataRecord.id = newID;
		this.data[newID] = dataRecord;
		this.saveData();
		return true;
	}
}

export default TodoModel;