import React from "react";
import "./Hello.css";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementsCollection: ["input", "select"],
      selectedElements: []
    };
    this.selectedElements = [];
  }
  selectedElement = ele => {
    this.selectedElements.push({ label: "", type: ele });
    this.setState({ selectedElements: this.selectedElements }, () => {
      console.log(this.state.selectedElements);
    });
  };
  chnageObject = (index, e) => {
    let allselected = this.state.selectedElements;
    allselected[index] = JSON.parse(e.target.value);
    this.setState({ selectedElements: allselected }, () =>
      console.log(this.state.selectedElements)
    );
  };
  render() {
    let { elementsCollection, selectedElements } = this.state;
    return (
      <div>
        <div>
          {elementsCollection.map(data => (
            <span onClick={() => this.selectedElement(data)}>{data} </span>
          ))}
        </div>
        <div className="dynamicContainer">
          <div className="formSelection">
            {selectedElements.length > 0
              ? selectedElements.map((data, index) => (
                  <div key={`dynamicContainer_${index}`}>
                    <div key={`dynamicContainer_${data.type}`}>
                      {" "}
                      {data.type}{" "}
                    </div>
                    <div key={`textarea_${index}`}>
                      <textarea
                        value={JSON.stringify(
                          this.state.selectedElements[index]
                        )}
                        onChange={e => this.chnageObject(index, e)}
                      />:{" "}
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div className="formGenerated">
            <h1>formGenerated</h1>
          </div>
        </div>
      </div>
    );
  }
}
