 import React, {useState} from 'react';


 const AddTodoForm = ({addNewTodo}) => {
   const [addTodo , setAddTodo ]= useState('');
      const handelTodo=()=> {
        console.log('ok')
      }
 return(
          <form className='mt-4'  onSubmit={handelTodo}>
                <div className="card  card-body " > 
                       <div className='form-group'>
                          <label className='mr-4'> Ajouter to do </label> 
                          <input className="form-control" value={addTodo} type='text' onChange = {(e)=> setAddTodo (e.target.value)}/> <br/>
                          <input className='btn btn-success  mt-1' type='submit'/>
                       </div>
                </div>           
          </form>
 ) 
 } 
 export default AddTodoForm;