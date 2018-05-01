package lk.edu.ijse.tis.dto;

public class HotelDTO {

    private int hotelId;
    private String hotelName;
    private String hotelType;
    private String hotelDescription;
    private String hotelDistrict;
    private String hotelTown;

    public HotelDTO() {

    }

    public HotelDTO(int hotelId, String hotelName, String hotelType, String hotelDescription, String hotelDistrict, String hotelTown) {
        this.setHotelId(hotelId);
        this.setHotelName(hotelName);
        this.setHotelType(hotelType);
        this.setHotelDescription(hotelDescription);
        this.setHotelDistrict(hotelDistrict);
        this.setHotelTown(hotelTown);
    }

    public HotelDTO(String hotelName, String hotelType, String hotelDescription, String hotelDistrict, String hotelTown) {
        this.setHotelName(hotelName);
        this.setHotelType(hotelType);
        this.setHotelDescription(hotelDescription);
        this.setHotelDistrict(hotelDistrict);
        this.setHotelTown(hotelTown);
    }

    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
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
