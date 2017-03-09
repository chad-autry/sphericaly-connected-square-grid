var React = require('react');

module.exports = React.createClass({
    render: function() {
        var cells = [];
        //Iterate over the view cells and render them from the map data
        //TODO Non-static number of cells
        for (var i = 0; i < 22; i++) {
            let columns = [];
            for (var j = 0; j < 22; j++) {
                columns.push(
                    <td key={i+':'+j} style={{width:'20px', height:'20px',border:'1px solid black',textAlign:'center'}}>
                        <i className={this.props.mapData.getEntity(i, j)}></i>
                    </td>
                );
            }
            cells.push(<tr style={{border:'1px solid black'}}>{columns}</tr>);
        }
        return (
            /* jshint ignore:start */
            <table tabIndex="0" onKeyDown={this.props.onKeyPress} style={{marginLeft:'auto',marginRight:'auto',borderCollapse:true,border:'1px solid black', tableLayout:'fixed'}}>
               <tbody>
                  {cells}
               </tbody>
            </table>
            /* jshint ignore:end */
        );
    }
});
