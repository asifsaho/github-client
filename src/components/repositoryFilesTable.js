import React from 'react';
import {Table} from 'reactstrap';
import _ from 'lodash';

export default (props) => {
    return (
        <div>
            <div className="space"/>
            <div className="space"/>

            <h3>{props.singleRepoDetails.name}</h3>
            <p>Description: {props.singleRepoDetails.description}</p>
            <p>Updated at: {props.singleRepoDetails.updatedAt}</p>

            <div className="space"/>
            <div className="space"/>

            <Table>
                <thead>
                <tr>
                    <th>Files and Folders</th>
                </tr>
                </thead>
                <tbody>
                {props.singleRepoDetails.defaultBranchRef.target.tree.entries.map((file, index) => (
                    <tr key={index}>
                        <td>{file.name}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <h4>{_.get(props.singleRepoDetails, 'readMe.text') ? "readme.md" : ""}</h4>
            <p>{_.get(props, 'singleRepoDetails.readMe.text')}</p>
        </div>
    );
}


// import React, { Component } from 'react';
// import { Table } from 'reactstrap';
//
// export default class RepositoryFilesTable extends Component {
//     componentDidMount(){
//         console.log('Single Repo Details', this.props.repoDetails);
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="space"/>
//                 <div className="space"/>
//
//                 <h3>Europass CV HTML</h3>
//
//                 <div className="space"/>
//                 <div className="space"/>
//
//                 <p>Latest commit 48ewfioj434 on 13 May</p>
//                 <Table>
//                     <thead>
//                     <tr>
//                         <th>Files and Folders</th>
//                         <th>Commit</th>
//                         <th>Last Commit</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <td>Mark</td>
//                         <td>Otto</td>
//                         <td>@mdo</td>
//                     </tr>
//                     <tr>
//                         <td>Jacob</td>
//                         <td>Thornton</td>
//                         <td>@fat</td>
//                     </tr>
//                     <tr>
//                         <td>Larry</td>
//                         <td>the Bird</td>
//                         <td>@twitter</td>
//                     </tr>
//                     </tbody>
//                 </Table>
//
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus enim illo laboriosam pariatur, quidem similique ut voluptatibus. Aspernatur, atque dolorum ex ipsam non quam quas quisquam quo quod sed!</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus enim illo laboriosam pariatur, quidem similique ut voluptatibus. Aspernatur, atque dolorum ex ipsam non quam quas quisquam quo quod sed!</p>
//             </div>
//         );
//     }
// }