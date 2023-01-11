import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>DrunkCyclist</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          perferendis officia, saepe exercitatione. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatum cupiditate, odio voluptates
          earum, doloremque natus repellat fugiat eos minus consequatur laborum
          accusantium voluptatem quidem quisquam aspernatur placeat aut, nobis
          atque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium consectetur molestiae commodi eius natus deserunt.
          Assumenda, doloremque eos? Cum ullam, maiores animi enim quia quidem
          totam dolorem consectetur iste omnis?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
