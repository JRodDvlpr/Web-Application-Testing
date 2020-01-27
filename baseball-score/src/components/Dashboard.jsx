import React from 'react';

const Dashboard = ({balls, hit, strikes, foul}) => {


    return(

    <section>
        <h2>Dashboard</h2>
        <div className="dashboard-btn">
            <button onClick={strikeHandle}>Strike</button>
            <button onClick={ballHandle}>Ball</button>
            <button onClick={hitHandle}>Hit</button>
            <button onClick={foulHandle}>Foul Ball</button>
        </div>
    </section>
    )
}

export default Dashboard;