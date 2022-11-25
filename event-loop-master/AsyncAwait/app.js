// const getNombre=(idPost)=>{

//   fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
//   .then((res)=>{
//       // respuesta=res.json()
//       // console.log(res)
//       return res.json()
//   })

//   .then((post)=>{
//       console.log(post);
//       console.log(post.id);
//       fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`)
//       .then((res)=>res.json())
//       .then((user)=>{
//           console.log(user.name)
//       })
//   })
// }

// getNombre(7)

const getNombreAsync = async (idPost) => {
	try {
  	const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    const post = await resPost.json()
    const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`)).json()
    console.log(user.name )
  } catch(error) {
  	console.log(error)
  }
}

getNombreAsync(5)

getNombreAsync(7)