package com.mots.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mots.enums.Category;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "motorcycle_tb")
public class Motorcycle {

    @Id
    @JsonProperty("id")
    @Column(nullable = false, name = "pk_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @JsonProperty("photo")
    @Column(nullable = false, name = "desc_photo")
    private Byte[] photo;

    @JsonProperty("model")
    @Column(nullable = false, name = "desc_model")
    private String model;

    @JsonProperty("price")
    @Column(nullable = false, name = "desc_price")
    private Double price;

    @JsonProperty("category")
    @Column(nullable = false, name = "desc_category")
    private Category category;

    @JsonProperty("color")
    @Column(nullable = false, name = "desc_color")
    private String color;

    @JsonProperty("number-cylinders")
    @Column(nullable = false, name = "desc_number_cylinders")
    private Integer numberCylinders;

    @JsonProperty("new")
    @Column(nullable = false, name = "desc_new")
    private Boolean new_;

    @JsonProperty("milage")
    @Column(nullable = false, name = "desc_milage")
    private Integer milage;

}
