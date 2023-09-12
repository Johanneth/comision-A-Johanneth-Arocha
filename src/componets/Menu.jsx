import React from 'react'

const Menu = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor  elit. Dolore, earum.",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur incidunt similique eligendi fugit ipsa nihil quibusdam voluptas.",
            img: "https://thumbs.dreamstime.com/b/paisaje-del-cielo-con-la-luna-llena-en-marino-noche-serenidad-n-103830806.jpg",
        },

        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing  earum.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci qui optio neque minima facilis beatae quam voluptatem! Non, maxime dolores! Esse!",
            img: "https://thumbs.dreamstime.com/b/paisaje-del-cielo-con-la-luna-llena-en-marino-noche-serenidad-n-103830806.jpg",

        },

        {
            id: 3,
            title: "Lorem iplor sit amet consecticing elit. Dolore, earum.",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia doloribus sequi veritatis tempora cum minima atque voluptate vitae! Aliquam, tenetur.",
            img: "https://thumbs.dreamstime.com/b/paisaje-del-cielo-con-la-luna-llena-en-marino-noche-serenidad-n-103830806.jpg",
        },

       
    ];

    return (
        <div className='menu'>
            <h1>Otras publicaciones que te pueden gustar</h1>

            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Leer más</button>
                </div>
                
            ))}

        </div>
    )
}

export default Menu