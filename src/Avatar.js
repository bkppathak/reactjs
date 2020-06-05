import React from 'react' ;
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';
const Avatar = (props) => {

    const avatarlistarray = [
        {
            id:1,
            name:"BHarat",
            work:"frontend developer"
        },
        {
            id:2,
            name:"dev",
            work:"database"
        }, 
        {
            id:3,
            name:"abhishek",
            work:"backend developer"
        },
        {
            id:4,
            name:"anurag",
            work:"frontend developer"
        },
        {
            id:5,
            name:"tushar",
            work:"frontend developer"
        }
    ]
    const arrayavatarcard = avatarlistarray.map((avatarcard, i) =>{
        return<Avatarlist id={avatarlistarray[i].name}
                            name={avatarlistarray[i].name}
                            work={avatarlistarray[i].work}/>
    })




    return( 
        
        <div className="mainpage">
            <h1> Welocome to avatar world </h1>
                {avatarlistarray}
             
            <button>Subscribe</button>
        </div>

        )
}
export default Avatar;