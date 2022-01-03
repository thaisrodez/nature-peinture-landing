import React from "react";
import "../stylesheets/cards.css";

const cards_data = [
  {
    // key: 1,
    title: "communication digitale engagée",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus vitae lacus, ornare sed interdum. At sit viverra ipsum, sodales egestas dolor vel adipiscing ullamcorper. Velit ultrices leo, viverra elit, nunc consequat sagittis, faucibus tempus. Laoreet velit nec parturient odio. Scelerisque felis, lectus lacus sed orci mattis. Elit quam pellentesque mauris lacus facilisi interdum ligula eleifend lorem. Est eget eleifend quis lectus placerat lorem suspendisse cursus nec. Non lectus eu viverra velit, massa risus. Risus, donec porta non fames. Lorem quisque curabitur imperdiet sem nulla.",
  },
  {
    // key: 2,
    title: "relation presse militante",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus vitae lacus, ornare sed interdum. At sit viverra ipsum, sodales egestas dolor vel adipiscing ullamcorper. Velit ultrices leo, viverra elit, nunc consequat sagittis, faucibus tempus. Laoreet velit nec parturient odio. Scelerisque felis, lectus lacus sed orci mattis. Elit quam pellentesque mauris lacus facilisi interdum ligula eleifend lorem. Est eget eleifend quis lectus placerat lorem suspendisse cursus nec. Non lectus eu viverra velit, massa risus. Risus, donec porta non fames. Lorem quisque curabitur imperdiet sem nulla.",
  },
  {
    //key: 3,
    title: "stratégie de communication d'impact",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus vitae lacus, ornare sed interdum. At sit viverra ipsum, sodales egestas dolor vel adipiscing ullamcorper. Velit ultrices leo, viverra elit, nunc consequat sagittis, faucibus tempus. Laoreet velit nec parturient odio. Scelerisque felis, lectus lacus sed orci mattis. Elit quam pellentesque mauris lacus facilisi interdum ligula eleifend lorem. Est eget eleifend quis lectus placerat lorem suspendisse cursus nec. Non lectus eu viverra velit, massa risus. Risus, donec porta non fames. Lorem quisque curabitur imperdiet sem nulla.",
  },
];

const Cards = () => {
  return (
    <div className="cards">
      {cards_data.map(({ title, text }) => (
        <div key={title}>
          <div className="card-title">
            <p>{title}</p>
          </div>
          <div className="card-text">
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
