import React, { Component } from "react";

class Item extends Component {
  state = {
    input: {
      id: "",
      name: "",
    },
    update: {
      id: "",
      name: "",
    },
  };

  render() {
    let listData = [];
    if (this.props.items) {
        listData = this.props.items.map((item, key) => {
            return(
                <tr>
                    <td>{key+1}</td>
                    <td>{item.name}</td>
                    <td>
                        <button onClick={() => {
                            this.setState({
                                ...this.state.update,
                                update:{
                                    id: item._id,
                                    name : item.name
                                }
                            })
                        }}>SUA</button>                       
                    </td>
                    <td>
                        <button onClick={() => {
                            this.props.deleteDispatch({id: item._id})
                        }}>
                            XOA
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <div>
            <input onChange={(e) => {
                this.setState({
                    ...this.state.input,
                    input: {
                        name : e.target.value
                    }
                })
            }}/>
            <button onClick={()=>{
                this.props.addDispatch({name : this.state.input.name})
            }}>ADD</button>
            <table>
                <thead>
                    <th>STT</th>
                    <th>NAME</th>
                </thead>
                <tbody>
                    {listData}
                </tbody>
            </table>
            <input value={this.state.update.name} onChange={(e) => {
                this.setState({
                    ...this.state.update,
                    update: {
                        id: this.state.update.id,
                        name: e.target.value
                    }
                })
            }}/>
            <button onClick={() => {
                this.props.updateDispatch({
                    id: this.state.update.id,
                    name: this.state.update.name
                })
            }}>UPDATE</button>
        </div>
    )
  }
}

export default Item;











// import React, { Component } from 'react'

// class Item extends Component {
//     state = {
//         add: {
//             id: "",
//             name: ""
//         },
//         objUpdate: {
//             id: "",
//             name: ""
//         }
//     }

//     render() {
//         console.log("state: ",this.state);
//         let listData = []
//         if (this.props.items) {
//             listData = this.props.items.map((item, key) => {
//                 return (
//                     <tr key={key}>
//                         <td>{key + 1}</td>
//                         <td>{item._id}</td>
//                         <td>{item.name}</td>
//                         <td>
//                             <button onClick={(e) => {
//                                 this.setState({
//                                     ...this.state,
//                                     objUpdate: {
//                                         id: item._id,
//                                         name: item.name
//                                     }
//                                  })
//                             }}>
//                                 EDIT
//                             </button>
//                         </td>
//                         <td>
//                             <button onClick={(e) => {
//                                 this.props.deleteDispatch(item._id);
//                             }}>
//                                 DELETE
//                             </button>
//                         </td>
//                     </tr>
//                 )
//             })
//         }

//         return (
//             <div className="list-item">
//                 <input type="text" onChange={(e) => {
//                     const val = e.target.value
//                     this.setState({
//                         add: {
//                             ...this.state.add,
//                             name: val
//                         }
//                     })
//                 }} />
//                 <button onClick={(e) => {
//                     this.props.addDispatch({ name: this.state.add.name })
//                 }}>ADD Item</button>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <th>STT</th>
//                             <th>ID</th>
//                             <th>Name</th>
//                         </tr>
//                         {listData}
//                     </tbody>
//                 </table>
//                 <input value={this.state.objUpdate.name} onChange={(e) => {
//                     this.setState({
//                         ...this.state,
//                         objUpdate: {
//                             id: this.state.objUpdate.id,
//                             name: e.target.value
//                         }
//                     })
//                 }} />
//                 <button onClick={(e) => {
//                     this.props.updateDispatch({
//                         id: this.state.objUpdate.id,
//                         name: this.state.objUpdate.name
//                     });
//                 }}>
//                     UPDATE
//                 </button>
//             </div>
//         )
//     }
// }

// export default Item;
