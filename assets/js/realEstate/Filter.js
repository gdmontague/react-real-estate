import React, {Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Greg'
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.rooms = this.rooms.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }
  cities(){
      if(this.props.globalState.populateFormsData.cities != undefined) {
         var { cities } = this.props.globalState.populateFormsData

    console.log(cities)
    return cities.map((item) => {
      return(
        <option key={item} value={item}> {item} </option>
      )
    })
  }
  }
  homeTypes(){
    if(this.props.globalState.populateFormsData.homeTypes != undefined) {
       var { homeTypes } = this.props.globalState.populateFormsData

  console.log(homeTypes)
  return homeTypes.map((item) => {
    return(
      <option key={item} value={item}> {item} </option>
    )
  })
}
}
  rooms(){
    if(this.props.globalState.populateFormsData.rooms != undefined) {
       var { rooms } = this.props.globalState.populateFormsData

  console.log(rooms)
  return rooms.map((item) => {
    return(
      <option key={item} value={item}> {item}+ BDR </option>
    )
  })
}
}

  render () {
    return (<section id="filter">
    <div className="inside">
      <h4>Filter</h4>
      <label htmlFor="city">City</label>
      <select name="city" className="filters city" onChange={this.props.change}>
        <option value="All">All</option>
        {this.cities()}
      </select>
      <label htmlFor="homeType">Home Type</label>
      <select name="homeType" className="filters housetype" onChange={this.props.change}>
        <option value="All">All Homes</option>
        {this.homeTypes()}
      </select>

      <label htmlFor="rooms">Bedrooms</label>
      <select name="rooms" className="filters rooms" onChange={this.props.change}>
        {this.rooms()}
      </select>
      <div className="filters price">
        <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
      </div>
      <div className="filters floor-space">
        <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-price" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
          <input type="text" name="max_floor_space" className="max-price" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
      </div>
      <div className="filters extras">
        <span className="title">Extras</span>
        <label htmlFor="extras"><span >Elevator</span> <input name="elevator" value="elevator" type="checkbox"  onChange={this.props.change} /> </label>
        <label htmlFor="extras"><span>Swimming Pool</span> <input name="swimming_pool" value="swimming-pool" type="checkbox"  onChange={this.props.change}/> </label>
        <label htmlFor="extras"><span>Finished Basement</span> <input name="finished_basement" value="finished-basement" type="checkbox"  onChange={this.props.change}/> </label>
        <label htmlFor="extras"><span>Gym</span> <input name="gym" type="checkbox" value="gym" onChange={this.props.change}/> </label>
      </div>
    </div>
    </section>)
  }
}
