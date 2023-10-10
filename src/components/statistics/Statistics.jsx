import styles from './Statistics.css'
export const Statistics = ({ data }) => {
  const { title = 'Upload stats'} = data;

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {data.map((data) => (
          <li className="items" key={data.id}>
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
