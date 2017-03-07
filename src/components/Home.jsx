var React = require('react');

module.exports = React.createClass({
    render: function() {
        var cells = [];
        //Iterate over the view cells and render them from the map data
        //TODO Non-static number of cells
        for (var i = 0; i < 20; i++) {
            let columns = [];
            for (var j = 0; j < 20; j++) {
                columns.push(
                    <td style={{width:'20px', height:'20px',border:'1px solid black',textAlign:'center'}}>
                    </td>
                );
            }
            cells.push(<tr style={{border:'1px solid black'}}>{columns}</tr>);
        }
        return (
            /* jshint ignore:start */
            <table style={{marginLeft:'auto',marginRight:'auto',borderCollapse:true,border:'1px solid black', tableLayout:'fixed'}}>
               <tbody>
                  {cells}
               </tbody>
            </table>
            /* jshint ignore:end */
        );
    }
});
