import spinner from '../assets/images//Spin-1s-200px.gif';

const Spinner = () => {
    return (
             <div>
      <img
        src={spinner}
        style={{ width: '100px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
    );
};

export default Spinner;