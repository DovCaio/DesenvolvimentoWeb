package com.mots.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.mots.enums.Category;
import com.mots.enums.Currency;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MotorcycleResponseDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("photo")
    private byte[] photo;

    @JsonProperty("model")
    private String model;

    @JsonProperty("price")
    private Double price;

    @JsonProperty("category")
    private Category category;

    @JsonProperty("color")
    private String color;

    @JsonProperty("currency")
    private Currency currency;

    @JsonProperty("number-cylinders")
    private Integer numberCylinders;

    @JsonProperty("new")
    private Boolean new_;

    @JsonProperty("year")
    private Integer year;

    @JsonProperty("milage")
    private Integer milage;
}
