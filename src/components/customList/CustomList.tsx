interface Props {
  listItems: {
    url: string;
    text: string;
  }[]
}

const CustomList = ({ listItems }: Props) => {

  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={`item-${index}`}>
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.text}
            </a>
          ) : (
            <p>{item.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CustomList;

