package com.mots.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.mots.enums.Stars;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comment_tb")
public class Comment {

    @Id
    @Column(nullable = false, name = "pk_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @JsonProperty("nickname")
    @Column(nullable = false, name = "desc_nickname")
    private String nickname;

    @JsonProperty("email")
    @Column(nullable = false, name = "desc_email")
    private String email;

    @JsonProperty("comment")
    @Column(nullable = false, name = "desc_comment")
    private String comment;

    @JsonProperty("stars")
    @Column(nullable = false, name = "desc_stars")
    private Stars stars;

    @JsonProperty("date")
    @Column(nullable = false, name = "desc_date")
    private Date date; //ESSE não precisa ser recebido no dto, o proprio backend deve inserir a data

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "motorcycle_tb")
    private Motorcycle motorcycle;

}
