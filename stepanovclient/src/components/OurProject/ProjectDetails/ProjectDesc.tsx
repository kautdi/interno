import React, { FC } from 'react'


export interface IProjectDesc{
    client:string;
    category:string;
    tags:string;
    date:string;
    link:string;
    head:string;
    desc:string;
    
}
const ProjectDesc:FC<IProjectDesc> = ({client, category, tags, date, link, head, desc}) => {
  return (
    <section className="aboutProject">
    <table className="main-info aboutProject__main-info">
        <tr>
          <td className="head"><h1 className="content__head aboutProject__content-head content__head__heaFour">
                Client
              </h1></td>
          <td><p className="content__desc prices-content__desc content__desc__lergeDesc">{client}</p></td>
        </tr>
        <tr>
            <td className="head"><h1 className="content__head aboutProject__content-head content__head__heaFour">
                Category
              </h1></td>
              <td>
                <p className="content__desc prices-content__desc content__desc__lergeDesc">
                    {category === "0" ? "Bathroom" :
                    category === "1" ? "Bedroom" :
                    category === "2" ? "Kitchen" :
                    category === "3" ? "Living Area" :
                    "Unknown Category"}
                </p>
                </td>

        </tr>
        <tr>
            <td className="head"><h1 className="content__head aboutProject__content-head content__head__heaFour">
                Tags
              </h1></td>
          <td><p className="content__desc prices-content__desc content__desc__lergeDesc">{tags}</p></td>
        </tr>
        <tr>
            <td className="head"><h1 className="content__head aboutProject__content-head content__head__heaFour">
                Date
              </h1></td>
          <td><p className="content__desc prices-content__desc content__desc__lergeDesc">{date}
        </p></td>
        </tr>
        <tr>
            <td className="head"><h1 className="content__head aboutProject__content-head content__head__heaFour">
                Link
              </h1></td>
          <td><p className="content__desc prices-content__desc content__desc__lergeDesc">{link}</p></td>
        </tr>
    </table>
    <div className="text-block aboutProject__text-block">
        <h1 className="content__head aboutProject__content-head content__head__headOne">
            {head}        </h1>
        <p className="content__desc prices-content__desc content__desc__lergeDesc">{desc}</p>
    </div>
    </section>
  )
}

export default ProjectDesc
