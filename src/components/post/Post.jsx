import "./post.css";
import rapha from "../post/assets/redrapha.jpeg";

export default function Post() {
  return (
    <div className="post">
      <img src={rapha} alt="" className="postImg" />
      <div className="postInfo">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>

        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
        perferendis, quaerat voluptatibus ipsam accusantium similique inventore
        modi esse vero ipsa? Aut minus expedita sunt ipsam accusamus quidem
        eveniet illo tempora. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Provident eveniet, corporis architecto tenetur accusantium ipsam
        adipisci, aliquid, consectetur a numquam aperiam ut maiores? Harum
        dolores sunt ab exercitationem, provident fugit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Sed enim, cupiditate alias eligendi
        ab unde dolorum quam sequi, fuga est repudiandae exercitationem, rerum
        incidunt saepe corrupti repellat nostrum cum similique? Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Nobis accusamus veniam
        suscipit rem ratione inventore quo deserunt assumenda nostrum delectus,
        corrupti saepe autem natus incidunt temporibus. Laboriosam saepe dolor
        odio?
      </p>
    </div>
  );
}
