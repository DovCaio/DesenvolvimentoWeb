package com.mots.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mots.enums.Category;
import com.mots.enums.Currency;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

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
    private byte[] photo;

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

    @JsonProperty("number_cylinders")
    @Column(nullable = false, name = "desc_number_cylinders")
    private Integer numberCylinders;

    @JsonProperty("currency")
    @Column(nullable = false, name = "desc_currency")
    private Currency currency;

    @JsonProperty("new_")
    @Column(nullable = false, name = "desc_new")
    private Boolean new_;

    @JsonProperty("year")
    @Column(nullable = false, name = "desc_year")
    private Integer year;

    @JsonProperty("milage")
    @Column(nullable = false, name = "desc_milage")
    private Integer milage;

    @JsonProperty("comments")
    @JoinColumn(name = "comment_tb")
    @PrimaryKeyJoinColumn(name = "fk_comment")
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Comment> comments;

}
