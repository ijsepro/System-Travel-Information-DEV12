package lk.ijse.edu.BackEnd.repository;

import lk.ijse.edu.BackEnd.model.Hotel;
import org.springframework.data.repository.Repository;

public interface HotelRepository extends Repository<Hotel, Integer> {

//        void delete(Place place);
//
//        List<Place> findAll();
//
//        Place findOne(int id);

        Hotel save(Hotel hotel);


}
