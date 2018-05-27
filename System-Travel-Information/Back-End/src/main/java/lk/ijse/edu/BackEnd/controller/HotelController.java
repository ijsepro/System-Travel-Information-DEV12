package lk.ijse.edu.BackEnd.controller;

import lk.ijse.edu.BackEnd.model.Hotel;
import lk.ijse.edu.BackEnd.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HotelController {

        @Autowired
        private HotelService hotelService;

        @PostMapping
        public Hotel create(@RequestBody Hotel hotel){
            return hotelService.create(hotel);
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
 //   }

}
