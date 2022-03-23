import React from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";
import InGameHeader from "./InGameHeader";
import HighScoreTableRow from "./HighScoreTableRow";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

function HighScoreTable(props) {
  const [highscore, setHighscore] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = collection(db, "highscore");
    const q = query(collectionRef, orderBy("scoreInDB", "desc"), limit(10));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let highscoreArray = [];
      querySnapshot.forEach((doc) => {
        highscoreArray.push({ ...doc.data(), id: doc.id });
      });
      setHighscore(highscoreArray);
    });
    return () => unsub();
  }, []);

  function renderTable() {
    return (
      <tbody>
        {highscore.map((highscore) => (
          <HighScoreTableRow key={highscore.id} highscore={highscore} />
        ))}
      </tbody>
    );
  }

  return (
    <>
      <Section>
        <InGameHeader />
        <Div>
          <H3>Punktetabelle - Top Ten</H3>
          <InsetShadow>
            <Box>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Datum</th>
                    <th>Punkte</th>
                  </tr>
                </thead>
                {renderTable()}
              </Table>
            </Box>
          </InsetShadow>
        </Div>
      </Section>
    </>
  );
}

export default HighScoreTable;

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -40px;
`;

const Div = styled.div`
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const H3 = styled.h3`
  text-align: center;
  color: ${COLORS.text};
`;
const InsetShadow = styled.div`
  box-shadow: inset 1px 1px 2px 0px rgba(${COLORS.light}, 0.8);
  margin: 20px;
  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    width: 50vw;
    align-self: center;
  }
`;

const Box = styled.div`
  background-color: rgba(${COLORS.light}, 0.2);

  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(
      to bottom,
      rgba(${COLORS.light}, 0) 1%,
      rgba(${COLORS.light}, 0.8) 10%,
      rgba(${COLORS.light}, 0) 100%
    )
    1 100%;

  height: auto;

  box-shadow: 1px 1px 8px 3px ${COLORS.shadow_RGBA};

  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    width: 50vw;
  }
`;

const Table = styled.table`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 10px;
  color: white;
  font-weight: bold;

  padding: 10px;

  & td,
  th {
    margin: 50px;
    width: 30vw;
  }
  & td {
    background-color: #393c8060;
    padding: 10px;
  }
  ${VIEWPORT.small} {
    & td,
    th {
      width: 23vw;
    }
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    & td {
      width: 14vw;
    }
  }
`;
