package com.mots.controller;

import com.mots.dto.MotorcyclePostPutDTO;
import com.mots.service.MotorcycleService;
import com.mots.enums.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/motorcycle", produces = MediaType.APPLICATION_JSON_VALUE)
public class MotorcycleController {


    @Autowired
    private MotorcycleService motorcycleService;

    @PostMapping
    public ResponseEntity<?> addMotorcycle(@RequestBody MotorcyclePostPutDTO motorcycle) {


        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(motorcycleService.post(motorcycle));

    }

    @GetMapping
    public ResponseEntity<?> getAllMotorcycles() {
        return ResponseEntity
                .status((HttpStatus.OK))
                .body(motorcycleService.getAll());
    }

    @GetMapping("/{category}")
    public ResponseEntity<?> getMotorcycleByCategory(@PathVariable Category category) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(motorcycleService.getAllByCategory(category));

    }

    
}
