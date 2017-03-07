var React = require('react');

module.exports = React.createClass({
    render: function() {
        var cells = [];
        //Iterate over the view cells and render them from the map data
        //TODO Non-static number of cells
        for (var i = 0; i++; i < 20) {
            let columns = [];
            for (var j = 0; j++; j < 20) {
                columns.push(
                    <td style={{width:'20px', height:'20px',border:'1px solid black',textAlign:'center'}}>
                    </td>
                );
            }
            cells.push(<tr style={{border:'1px solid black'}}>{columns}</tr>);
        }
        return (
            /* jshint ignore:start */
            <div className="span12">
            <table style={{borderCollapse:true,border:'1px solid black', tableLayout:'fixed'}}>
               <tbody>
                  {cells}
               </tbody>
            </table>
            </div>
            /* jshint ignore:end */
        );
    }
});