package lk.ijse.edu.BackEnd.serviceimpl;

import lk.ijse.edu.BackEnd.model.Place;
import lk.ijse.edu.BackEnd.repository.PlaceRepository;
import lk.ijse.edu.BackEnd.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService {
    @Autowired
    private PlaceRepository repository;
    @Override
    public Place create(Place place) {
        return repository.save(place);
    }

//    @Override
//    public Place delete(int id) {
//        Place place = findById(id);
//        if(place != null){
//            repository.delete(place);
//        }
//        return place;
//    }
//
//    @Override
//    public List<Place> findAll() {
//        return repository.findAll();
//    }
//
//    @Override
//    public Place findById(int id) {
//        return repository.findOne(id);
//    }
//
//    @Override
//    public Place update(Place place) {
//        return null;
//    }
}
