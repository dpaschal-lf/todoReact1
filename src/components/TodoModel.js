

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
				this.data = {count:0, records:{}};
			}
		} else {
			this.data = {count:0, records:{}};
		}
	}
	saveData(){
		localStorage.todoData = JSON.stringify(this.data);
	}
	getRecordList(){
		return this.data.records;
	}
	deleteRecord(id){
		console.log('deleted:',id);
		delete this.data.records[id];
		this.data.count--;
		this.saveData();
		return !this.data.records[id];
	}
	getSingleRecord(id){
		if(this.data[id]){
			return this.data.records[id];
		} else {
			return false;
		}
	}
	getRecordCount(){
		return this.data.count;
	}
	addRecord(dataRecord){
		if(dataRecord.id){
			var newID = dataRecord.id;
			var dueDate = dataRecord.dueDate;
		} else {
			newID = (new Date()).getTime();
			dueDate = newID+3600*24*7;
		}
		const recordSet = {
			title: 'default title',
			description: 'default description',
			dueDate: dueDate, 
			complete: false
		}
		for(let field in recordSet){
			if(!dataRecord[field]){
				dataRecord[field] = recordSet[field];
			}
		}
		dataRecord.id = newID;
		this.data.records[newID] = dataRecord;
		this.data.count++;
		this.saveData();
		return true;
	}
}

export default TodoModel;