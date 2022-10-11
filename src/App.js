// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Create a React app with create-react app tool, this app will contain one Component than the App,
// in side this component you should render this array of
// [{name: 'Ahmad', age: 30},
// {name: 'Yousef', age: 12},
// {name: 'Shatha', age: 14},
// {name: 'Rana', age: 22},
// {name: 'Osama', age: 22}
// {name: 'Ahmad', age: 38} ]
// Which will be passed to this Component as Prop, you should render 2 lists beside each other, a list of Names with title Names, and a list of Ages with title ages,
// you should make sure that names and ages inside lists will be unique (no duplication allowed),
// no need for Stylingss
// then added a button that will delete all entries from 2 lists one by one 
// (every click the last age and the name will be deleted)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { name: 'Ahmad', age: 30 },
        { name: 'Yousef', age: 12 },
        { name: 'Shatha', age: 14 },
        { name: 'Rana', age: 22 },
        { name: 'Osama', age: 22 },
        { name: 'Ahmad', age: 38 }],


      arrname: [],
      arrname2: [],
      arrage: []
    }
    for (var i = 0; i < this.state.arr.length; i++) {

      this.state.arrname.push(this.state.arr[i].name)
      this.state.arrage.push(this.state.arr[i].age)
    }
    for(var i=0;i<this.state.arrname.length;i++){
      var x=this.state.arrname[i];
      // console.log(x);
  
      // var j=1;
      // for(var key in this.state.arrname){
      //  // console.log(key);
      //   j++;
      //   if(x===this.state.arrname[key]){
    
      //    this.state.arrname.splice(j,1); 
      //    j--;   
      //   }
      // }
     

    } 
    console.log(this.state.arrname);




  }
  changerender = () => {
    let arrcopy = [...this.state.arr];
    arrcopy.pop();
    this.setState({
      arr: arrcopy
    })
  };
  render() {

    return (
      <div style={{ display: 'flex' }}>

        <div><button onClick={this.changerender}>Delete</button></div>
        <div >
          <dl><dd>names :</dd>

            {this.state.arr.map(


              function (a, idx) {

                return (
                  <dd key={idx}>{a.name}</dd>)

              }
            )

            }

          </dl>

        </div>
        <div >
          <dl><dt>    </dt>
          </dl>

        </div>
        <div>  <dl><dd>ages :</dd>
          {this.state.arr.map(function (a, idx) {
            return (
              <dd key={idx}>{a.age}</dd>)

          })}</dl>
        </div>


      </div>
    );


  }

}



export default App;
