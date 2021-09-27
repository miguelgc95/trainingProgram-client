import React from 'react';

// const DayTraining = ({ day, morning, lunch, evening, night }) => {
const DayTraining = ({ day }) => {
    return (
        <>
            <div>
                <h3>{day.day}</h3>
                <div>
                    {day.morning.map(exercise => {
                        return <li className="morning">{exercise}</li>;
                    })}

                    {day.lunch.map(exercise => {
                        return <li className="lunch">{exercise}</li>;
                    })}

                    {day.evening.map(exercise => {
                        typeof exercise == 'object' &&
                            console.log('keys', Object.keys(exercise));
                        return typeof exercise != 'object' ? (
                            <li className="evening">{exercise}</li>
                        ) : (
                            Object.keys(exercise).map(ul => {
                                <li>{ul}</li>;
                            })
                        );
                    })}

                    {day.night.map(exercise => {
                        return typeof exercise != 'object' ? (
                            <li className="night">{exercise}</li>
                        ) : (
                            <ul>{Object.keys(exercise)}</ul>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default DayTraining;
