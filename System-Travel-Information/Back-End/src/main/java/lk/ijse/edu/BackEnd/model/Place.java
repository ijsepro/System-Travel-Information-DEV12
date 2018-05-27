package lk.ijse.edu.BackEnd.model;

import javax.persistence.*;

@Entity
@Table(name = "place")
public class Place {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String placeName;
    @Column
    private String placeType;
    @Column
    private String placeDescription;
    @Column
    private String placeDistrict;
    @Column
    private String placeTown;
    @Column
    private double ticketPrice;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getPlaceType() {
        return placeType;
    }

    public void setPlaceType(String placeType) {
        this.placeType = placeType;
    }

    public String getPlaceDescription() {
        return placeDescription;
    }

    public void setPlaceDescription(String placeDescription) {
        this.placeDescription = placeDescription;
    }

    public String getPlaceDistrict() {
        return placeDistrict;
    }

    public void setPlaceDistrict(String placeDistrict) {
        this.placeDistrict = placeDistrict;
    }

    public String getPlaceTown() {
        return placeTown;
    }

    public void setPlaceTown(String placeTown) {
        this.placeTown = placeTown;
    }

    public double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }
}
