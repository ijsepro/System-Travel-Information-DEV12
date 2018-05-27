package lk.ijse.edu.BackEnd.model;

import javax.persistence.*;

@Entity
@Table(name = "hotel")
public class Hotel {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String hotelName;
    @Column
    private String hotelType;
    @Column
    private String hotelDescription;
    @Column
    private String hotelDistrict;
    @Column
    private String hotelTown;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelType() {
        return hotelType;
    }

    public void setHotelType(String hotelType) {
        this.hotelType = hotelType;
    }

    public String getHotelDescription() {
        return hotelDescription;
    }

    public void setHotelDescription(String hotelDescription) {
        this.hotelDescription = hotelDescription;
    }

    public String getHotelDistrict() {
        return hotelDistrict;
    }

    public void setHotelDistrict(String hotelDistrict) {
        this.hotelDistrict = hotelDistrict;
    }

    public String getHotelTown() {
        return hotelTown;
    }

    public void setHotelTown(String hotelTown) {
        this.hotelTown = hotelTown;
    }
}
