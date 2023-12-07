let BikeRide = {
    bike_Name: "hero",
    bike_color: "green",
    bike_price: 50000,
    b_model: function (m_name, b_power) {
        this.m_name = m_name;
        this.b_power = b_power;
    }
}
let b1 = new BikeRide.b_model("Advanture", "300cc");
console.log(b1);