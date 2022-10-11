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
      // arrname2: [],
      arrage: []
    }
    var flage = "";
    var flage2 = "";
    var checkflag = "";
    var arrname2 = [];
    var arrage2 = [];

    for (var i = 0; i < this.state.arr.length; i++) {
      for (var j = 0; j < this.state.arr.length; j++) {
        if (this.state.arr[i].name === this.state.arr[j].name) {
          flage = "true1";

        }
        if (this.state.arr[i].age === this.state.arr[j].age) {
          flage += "true2";
        }

      }
      if (flage === "true1true2") {
        flage = "";
        if (arrname2.includes(this.state.arr[i].name) === false) {
          arrname2.push(this.state.arr[i].name);
        } else {

        }
        if (arrage2.includes(this.state.arr[i].age) === false) {
          arrage2.push(this.state.arr[i].age);
        } else {

        }
        continue;
      }
      if (flage !== "true1") {
        arrname2.push(this.state.arr[i].name);
      }
      if (flage !== "true2") {
        arrage2.push(this.state.arr[i].age);
      }
      flage = "";

    }

    this.state.arrname = arrname2;
    this.state.arrage = arrage2;
    // console.log(this.state.arrname);
    // console.log(this.state.arrage);





  }
  changerender = () => {
    let arrCopyName = [...this.state.arrname];
    let arrCopeAge = [...this.state.arrage];
    arrCopyName.pop();
    arrCopeAge.pop();
    this.setState({
      arrname: arrCopyName,
      arrage: arrCopeAge
    })
  };
  render() {

    return (
      <div style={{ display: 'flex' }}>

        <div><button onClick={this.changerender}>Delete</button></div>
        <div >
          <dl><dd>names :</dd>

            {this.state.arrname.map(


              function (a, idx) {

                return (
                  <dd key={idx}>{a}</dd>)

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
          {this.state.arrage.map(function (a, idx) {
            return (
              <dd key={idx}>{a}</dd>)

          })}</dl>
        </div>


      </div>
    );


  }

}



export default App;
