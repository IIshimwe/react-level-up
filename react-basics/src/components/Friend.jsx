import React from "react";

export const Friend = () => {
  const friends = [
    { name: "JIS 👑", age: 20 },
    { name: "Gad", age: 26 },
    { name: "Patrick", age: 26 },
    { name: "Daniel", age: 28 },
    { name: "Terrence", age: 26 },
  ];

  return (
    <div>
      {friends.map((friend, key) => {
        return (
          <>
            <h2 key={key}>
              {friend.name} has {friend.age} of age{" "}
            </h2>
          </>
        );
      })}
    </div>
  );
};
