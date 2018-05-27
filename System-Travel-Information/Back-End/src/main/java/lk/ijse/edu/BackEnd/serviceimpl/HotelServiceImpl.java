package lk.ijse.edu.BackEnd.serviceimpl;

import lk.ijse.edu.BackEnd.model.Hotel;
import lk.ijse.edu.BackEnd.repository.HotelRepository;
import lk.ijse.edu.BackEnd.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public Hotel create(Hotel hotel) {
        return hotelRepository.save(hotel);
    }
}
