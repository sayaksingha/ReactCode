const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
 function AboutMe() {
    return (
        <>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={
                {
              width: user.imageSize,
              height: user.imageSize
            }
        }
          />
          <Mapping/>
        </>
      );
  }
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  function Mapping(){
    const listItems = products.map(product =>
        <li key={product.id}>
          {product.title +" : "+ product.id}
        </li>
      );
      
      return (
        <ul>{listItems}</ul>
      );
  }
  

  export default AboutMe;