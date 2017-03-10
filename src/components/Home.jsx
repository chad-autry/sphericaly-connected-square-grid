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
            cells.push(<tr key={'row'+i} style={{border:'1px solid black'}}>{columns}</tr>);
        }
        return (
            /* jshint ignore:start */
                <div>
                <div className="form-group">
                    <label>Edge Wrap Style:</label>
                    <select value={this.props.wrapStyle} onChange={this.props.onWrapStyleChange} className="form-control">
                        <option>Traditional</option>
                        <option>Spherical</option>
                    </select>
                </div>
                <table style={{marginLeft:'auto',marginRight:'auto',borderCollapse:true,border:'1px solid black', tableLayout:'fixed'}}>
                   <tbody>
                      {cells}
                   </tbody>
                </table>
                <table style={{marginLeft:'auto',marginRight:'auto'}}>
                    <tbody>
                        <tr>
                            <td style={{width:'40px', height:'40px'}}>
                            </td>
                            <td style={{width:'40px', height:'40px', textAlign:'center'}}>
                                <i className="fa fa-arrow-up fa-5x" onClick={() => this.props.arrowClicked("up")}></i>
                            </td>
                            <td style={{width:'40px', height:'40px'}}>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'40px', height:'40px', textAlign:'center'}}>
                                <i className="fa fa-arrow-left fa-5x" onClick={() => this.props.arrowClicked("left")}></i>
                            </td>
                            <td style={{width:'40px', height:'40px'}}>
                            </td>
                            <td style={{width:'40px', height:'40px', textAlign:'center'}}>
                                <i className="fa fa-arrow-right fa-5x" onClick={() => this.props.arrowClicked("right")}></i>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'40px', height:'40px'}}>
                            </td>
                            <td style={{width:'40px', height:'40px', textAlign:'center'}}>
                                <i className="fa fa-arrow-down fa-5x" onClick={() => this.props.arrowClicked("down")}></i>
                            </td>
                            <td style={{width:'40px', height:'40px'}}>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            /* jshint ignore:end */
        );
    }
});
