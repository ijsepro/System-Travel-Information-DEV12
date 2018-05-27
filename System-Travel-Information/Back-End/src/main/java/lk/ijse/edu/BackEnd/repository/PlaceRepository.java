package lk.ijse.edu.BackEnd.repository;

import lk.ijse.edu.BackEnd.model.Place;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PlaceRepository extends Repository<Place,Integer> {

//        void delete(Place place);
//
//        List<Place> findAll();
//
//        Place findOne(int id);

        Place save(Place place);

}
