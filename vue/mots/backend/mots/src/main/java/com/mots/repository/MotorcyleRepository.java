package com.mots.repository;

import com.mots.enums.Category;
import com.mots.model.Motorcycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface MotorcyleRepository extends JpaRepository<Motorcycle, Long> {

    public Set<Motorcycle> findAllByCategory(Category category);

}
