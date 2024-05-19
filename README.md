
# ZIDIO_WEB_DEVELOPMENT

1.> Create a folder, inside that folder create again create two folder one is of client and another one is of server.

2.> then open the terminal and type the following command 
     	cd server
	npm init --yes
	npm i express
	npm i nodemon

3.> create a new file Index.js inside the server folder
        const express= require('express');
const app= express();

app.post("/",async(req,res)=>{
    console.log("port Run");
})

app.listen (4000);

4.> put the command in the terminal    		(To terminate the server press CTRL + C)
 	npx nodemon Index.js

  	terminate batch job (Y/N)?  Y
	
	npm i mongoose
	
5.> create a folder 'db' in server folder and create a file inside db folder name connection.js
	
	const mongoose= require('mongoose');
	mongoose.connect('mongodb://127.0.0.1/example');
	
	then open the mongodb compass software and click on connect
	create a database with name as example and collection name as users

6.> Now go to Index.js and type the following command under const app=express();
	require('./db/connection');
    

7.> Now create a folder name Models inside Server folder and create a file User.js inside Models folder.

8.> 	const mongoose=require('mongoose');
	const usersSchema=new mongoose.Schema({
	name:String,
	email:String,
	password:String
	});
	module.exports=mongoose.model("users",usersSchema);

9.> goto Index.js file,  copy and paste the following command

 	        const express= require('express');
		const app= express();
		app.use(express.json());

		require('./db/connection');

		const User= require('./Models/User');
		app.post("/", async(req,res)=>{
		
  		   let user=new User(req.body);
		   let result=await user.save();
		   res.send(result); 
		})
		app.listen(4000);
	
10.> Do not close the terminal  inside "server" folder "npx nodemon Index.js" command will be in running condition.

11.> Now download and install the POSTMAN software 

12.> now open mongodb Click on create new collection and give the same name as previous 'example' 

13.> After opening of the software POSTMAN now click on Plus icon on the upper left corner "create new collection" give the collection    	name example.

14.> on the upper tab beside example collection click on plus icon and select the POST method and enter the URL "http://localhost:4000/ 
      and then click on save button. 

15.> then Select the example database and type the request name POST, click on save 

16.> go to body click on raw and select the JSON type and type the following command inside the blank space below
     
  		{
			"name": "Karan",
			"email":"karangupta13287@gmail.com",
			"password":"Kanpur26@#"
		}
	
      and then click on Send (blue colour button)  on the upper right corner

17.> go to the mongodb software and refresh the screen and the given data will be reflect there. 

18.> Go to the client folder via my computer and open the Cmd panel inside that folder and type the following command
		 	
		npx create-react-app . 
		
			(after installing)  type 
		
		npm install bootstrap

			(after installing)  type -
		
		npm i bootstrap@5.0.0-alpha1

			(after installing)

19.> Go to VScode and split the terminal (one is of server and another one is of client)

		on the server terminal type (if nodemon server is not running)

			cd Server
			npx nodemon index.js


		on the client terminal type
			
			cd client
			npm start

20.> Now inside the src folder delete the file logo.svg and open the App.js file

21.> type the following command 
		
			import 'bootstrap/dist/css/bootstrap.min.css';
			import './App.css';
			import Form from './components/Form';
			function App(){
			return (
			<div className="App">
			<Form/>
			</div>
			);
			}
			export default App;

22.> now create the folder components inside the src folder and create the file inside the component folder name as Form.js

23.> type the command 

		import React from 'react';
		import './Style.css';
		export default function Form(){
		return(
		<div className='container'>
		  <form onSubmit={collectData}> 
 			<h1 className='text-center pt-3'> SIGNUP FORM </h2>
			<div className='mb-3 mt-3'>
			<label className='form-label'> Username</label> 
			<input type='text' className='form-control'
			value={name}
			onChange={(e) => setName(e.target.value)}/>
			</div>

			<div className='mb-3'>
			<label className='form-label'> Email Address</label> 
			<input type='email' className='form-control' value={email}
			onChange={(e) => setEmail(e.target.value)}/>
			</div>

			<div className='mb-3'>
			<label className='form-label'> Password</label> 
			<input type='password' className='form-control' value={password}
			onChange={(e) => setPassword(e.target.value)}/>
			</div>
			<button type='submit' className='btn btn-success'>Submit</button>
		</form> 
		</div> 
		)
		} 

24.> now inside the components folder create a file name Style.css

25.> .container{
 	width: 36%;
	margin-top: 5rem;
	padding:2.8rem 3.5rem;
	border: 0.16rem solid #bebebe;
	border-radius: 0.5rem
      }
	
	form{
	text-align:left;
	}
	
	label{
	font-size:18px;
	font-weight:600;
	}

	h2{
	font-weight:800;
	}

26.> Now go to Form.js file and under the export default function Form() type the below command

	const [name, setName]=useState("");
	const [email, setEmail]=useState("");
	const [password, setPassword]=useState("");

	const collectData=async (e) => {
		e.preventDefault();
		let result=await fetch('http://localhost:4000/',{
			method:'post',
			body: JSON.stringyfy({name, email, password}),
			headers:{
				'Content-Type': 'application/json'
		    },
		});
		result=await result.json;
		localStorage.setItem("user", JSON.stringify(result));
  	}

27.> Now install the CORS on the server terminal by the following command 
		npm install cors

28.> after installation go to Index.js file after the app.use(express.json()) type the following command 

	const cors=require('cors');
	app.use(cors());



 
	
	
	
