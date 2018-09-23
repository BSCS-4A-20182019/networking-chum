//note_routes.js
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
//actual API implem
//Create
app.post ('/api/notes/create', (req, res) => {
const note = {
	title: req.body.title,
	message: req.body.message
};
db.collection('notes').insert(note, (err, result) => {
if(err){
	res.send({"error": "An unexpected error..."});
}else{
	res.send(result.ops[0]);
}
});
});

app.get('/api/notes/:id',(req,res)=>{
const notesId = req.params.id;
if(ObjectID.isValid(notesId)){
	const notesDetails = {'_id': new ObjectID(notesId)};
db.collection('notes').findOne(notesDetails, (err, result) => {
if(err){
res.send({"error": "An unexpected error..."});
}else{
	res.send(result);
}
});
}else{
res.send(result);
}
});

app.put('/api/notes/update/:id',(req,res)=>{
const notesId = req.params.id;
const notesDetails = {'_id': new ObjectID(notedId)};
const notesMessage = {'message': req.body.message}
if(notesMessage!=null){
	db.collection('notes').update(notesDetails,{$set:notesMessage},(err, result) =>{
		consol.log("UPDATED");
		res.send(result)
	});
} else{
	res.send({"error": "An unauthorized error has occured"});
}
});
};
