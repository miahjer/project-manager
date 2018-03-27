var React = require('react');

var ProjDescriptions = React.createClass({
    render: function() {
        return (
            <div className="list grid-item project-snapshot">
                <div className="task-title">
                    <a href="#!"><h5></h5>
                    <p>Total Tasks: <span></span><br />
                    Tasks Due: <span></span></p></a>
                </div>
            </div>
        )
    }
});

module.exports = ProjDescriptions;