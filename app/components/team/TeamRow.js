var React = require('react'),
    helpers = require('./../utils/helpers'),
    Modal = require('react-materialize').Modal; // Modal component from react-materialize;

Modal.defaultProps = {
    actions: false
};

var TeamRow = React.createClass({
    handleRemoveMember: function(event) {
        this.props.memberRemove(event.target.id);
    },
    render: function () {
        return (

        <div>
            {/* Team Member */}
            <div className="team-member-div">
                <div className="team-member-icon">
                    <img src="jer.jpg" />
                </div>
                <div className="team-member-info">
                    <span className="team-member-name">Jeremiah Jackson</span>
                    <span className="team-member-title">Student-Back End Dev</span>
                    <span className="team-member-role">Admin</span>
                </div>
                <div className="team-member-options right hide-on-med-and-down">
                    <div>
                        <label>Change Member Role</label>
                        <select className="browser-default" defaultValue="1">
                            <option value="1">Admin</option>
                            <option value="2">Member</option>
                            
                          </select>
                    </div>
                    <div>
                        <a 
                            className="waves-effect waves-light btn" 
                            id="member name"
                            onClick={this.handleRemoveMember}>Remove Member
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )}
});

module.exports = TeamRow;