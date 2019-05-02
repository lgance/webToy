import React from 'react';

const BoardListItem = ({
    children,
    imgUrl,
    itemTitle,
    registeredDate,
    comments,
    onClick,
    ...rest
}) => {
  return (
      <div>
           {children} 
      </div>
  )

}

export default BoardListItem;