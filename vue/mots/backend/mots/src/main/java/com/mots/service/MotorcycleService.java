package com.mots.service;


import com.mots.dto.MotorcyclePostPutDTO;
import com.mots.dto.MotorcycleResponseDTO;
import com.mots.model.Motorcycle;
import com.mots.repository.MotorcyleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import com.mots.enums.Category;


import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MotorcycleService {


    @Autowired
    private MotorcyleRepository motorcyleRepository;


    @Bean
    private ModelMapper modelMapper(){

        return new ModelMapper();

    }

    private Motorcycle convertByRequestDTOPerson(MotorcyclePostPutDTO motorcyclePostPutDTO){

        return modelMapper().map(motorcyclePostPutDTO, Motorcycle.class);
    }

    private MotorcycleResponseDTO convertToResponseDTO(Motorcycle motorcycle){

        return modelMapper().map(motorcycle, MotorcycleResponseDTO.class);

    }

    public MotorcycleResponseDTO post(MotorcyclePostPutDTO motorcyclePostPutDTO){

        Motorcycle motorcycle = convertByRequestDTOPerson(motorcyclePostPutDTO);

        return convertToResponseDTO(motorcyleRepository.save(motorcycle));

    }


    public List<MotorcycleResponseDTO> getAll(){

        return motorcyleRepository.findAll().stream()
                .map(this::convertToResponseDTO)
                .collect(Collectors.toList());

    }


    public Set<MotorcycleResponseDTO> getAllByCategory(Category category){

        return motorcyleRepository.findAllByCategory(category).stream()
                .map(this::convertToResponseDTO)
                .collect(Collectors.toSet());

    }


}
