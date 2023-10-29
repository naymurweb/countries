
  // get item
  const searchItems = () => {
    const items = localStorage.getItem("items");
    if (items) {
      const convertItems = JSON.parse(items);
      return convertItems;
    } else {
      return [];
    }
  };

  // set items
  const saveLs = (items) => {
    const itemStr = JSON.stringify(items);
    localStorage.setItem("items", itemStr);
  };

  // update and set local storage
  const addToLs = (id) => {
    const items = searchItems();
    items.push(id);
    saveLs(items);
  };

  export {
    addToLs
 }
 

