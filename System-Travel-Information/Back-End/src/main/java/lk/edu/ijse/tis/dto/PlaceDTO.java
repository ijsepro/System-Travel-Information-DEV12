package lk.edu.ijse.tis.dto;

public class Place {
    private int placeId;
    private String placeName;
    private String placeType;
    private String description;
    private String district;
    private String placeTown;
    private double ticketPrice;

    public Place(){

    }

    public Place(int placeId, String placeName, String placeType, String description, String district, String placeTown, double ticketPrice) {
        this.placeId = placeId;
        this.placeName = placeName;
        this.placeType = placeType;
        this.description = description;
        this.district = district;
        this.placeTown = placeTown;
        this.ticketPrice = ticketPrice;
    }

    public Place(String placeName, String placeType, String description, String district, String placeTown, double ticketPrice) {
        this.placeName = placeName;
        this.placeType = placeType;
        this.description = description;
        this.district = district;
        this.placeTown = placeTown;
        this.ticketPrice = ticketPrice;
    }

    public int getPlaceId() {
        return placeId;
    }

    public void setPlaceId(int placeId) {
        this.placeId = placeId;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
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
