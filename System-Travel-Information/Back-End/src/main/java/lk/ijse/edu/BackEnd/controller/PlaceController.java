package lk.ijse.edu.BackEnd.controller;

import lk.ijse.edu.BackEnd.model.Place;
import lk.ijse.edu.BackEnd.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping({"/api"})
public class PlaceController {

        @Autowired
        private PlaceService placeService;

        @PostMapping
        public Place create(@RequestBody Place place){
            return placeService.create(place);
        }

//        @GetMapping(path = {"/{id}"})
//        public Place findOne(@PathVariable("id") int id){
//            return placeService.findById(id);
//        }
//
//        @PutMapping
//        public Place update(@RequestBody Place place){
//            return placeService.update(place);
//        }
//
//        @DeleteMapping(path ={"/{id}"})
//        public Place delete(@PathVariable("id") int id) {
//            return placeService.delete(id);
//        }
//
//        @GetMapping
//        public List<Place> findAll(){
//            return placeService.findAll();
 //       }
}
