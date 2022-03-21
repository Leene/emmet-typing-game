import React from "react";

function HighScoreTableRow(props) {
  const { key, highscore } = props;

  const [newTitle, setNewTitle] = React.useState(highscore.nameOfPlayer);
  const [newTime, setNewTime] = React.useState(highscore.createdAt);

  return (
    <tr>
      <td>
        {highscore.nameOfPlayer === "" ? newTitle : highscore.nameOfPlayer}
      </td>
      <td>{highscore.createdAt.toDate().toLocaleDateString()}</td>
      <td>{highscore.scoreInDB === "" ? newTitle : highscore.scoreInDB}</td>
    </tr>
  );
}

export default HighScoreTableRow;
